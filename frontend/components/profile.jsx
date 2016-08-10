const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const UserStore = require('../stores/user_store.js');
const SessionStore = require('../stores/session_store.js');
const UserActions = require('../actions/user_actions.js');
const UserIndexItem = require('./user_index_item.jsx');
const Helpers = require ('./helpers.jsx');

const Profile = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    let viewed;
    if (this.props) {
      viewed = this.props.params.username;
    }

    return ({
      userName: viewed,
      imageFile: null,
      imageUrl: null
    });
  },

  componentDidMount () {
    this.userListener = UserStore.addListener(this.getProfileInfo);
    this._onChange();
  },

  componentWillReceiveProps (newProps) {
    if (newProps.params){
      this.setState({userName: newProps.params.username });
    } else {
      this.setState({userName: undefined});
    }
  },

  componentWillUnmount () {
    this.userListener.remove();
  },

  getProfileInfo() {
    this.setState({ userName: UserStore.viewProfile() });
  },

  _onChange() {
    this.forceUpdate();
  },

  updateFile: function (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result }.bind(this));
      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  },

  routeHandler() {
    const routes = this.props.routes;
    const path = routes[routes.length - 1].path;
    if (path == "/profile/:username") {
      let username = this.props.params.username;
      return `/profile/${username}`;
    } else {
      return "/profile";
    }
  },

  handleSubmit: function (e) {
    let formData = new FormData();
    formData.append("user[image]", this.state.imageFile);
    ApiUtil.editProfile(this.state);
  },

  // <input type="file" onChange={ this.updateFile }/>
  render: function() {
    let user = SessionStore.currentUser();
    let birthdate = Helpers.getBday(user.birthdate);
    if (this.state.userName !== undefined) {
      let finder = this.state.userName;
      if (typeof(finder) === "object") {
        user = finder;
        birthdate = Helpers.getBday(user.birthdate);
      } else if (typeof(finder) === "string"){
        finder = UserActions.fetchUserByName(finder);
      }
    }
    let routeToGo = this.routeHandler();
    return (
      <div className="user-profile">
        <Navbar />
        <div className="profile-content">
          <div className="profile-header">
            <img src= {user.image_url} className="user-picture"></img>
            <div className="profile-info">
              <p className="profile-username">
                { user.username }
              </p>
              <p className="profile-deets">
                { birthdate } • { user.city_name }, { user.state_name } • { user.gender }
              </p>
            </div>
            <div className="profile-tabs">
              <Link to={ routeToGo } className="profile-tab-link">About</Link>
              <Link to={ routeToGo + "/questions" } className="profile-tab-link">Questions</Link>
            </div>
            <img src={this.state.imageUrl}/>
          </div>

          <div className="profile-body">
            <div className="profile-body-section">
              <p className="body-info-label">My self-summary</p>
              <p className="body-info-text">{ user.summary }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Profile;
