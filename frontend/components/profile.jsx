const React = require('react');
const Link = require('react-router').Link;
const ApiUtil = require('../util/api_util');
const Navbar = require('./navbar.jsx');
const UserStore = require('../stores/user_store.js');
const SessionStore = require('../stores/session_store.js');
const UserActions = require('../actions/user_actions.js');
const UserIndexItem = require('./user_index_item.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');
const Helpers = require ('./helpers.jsx');
const hashHistory = require('react-router').hashHistory;

const Profile = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({
      questions: [],
      unanswered: [],
      viewedUser: {},
      userId: null,
      imageFile: null,
      imageUrl: null
    });
  },

  componentWillMount() {
    const userId = this.props.params.userId;

    this.userListener = UserStore.addListener(this.getProfileInfo);
    this.unansweredListener = QuestionStore.addListener(this.getUnansweredQuestions);

    this.handleActions(userId);
  },

  componentWillReceiveProps(newProps) {
    const userId = newProps.params.userId;

    this.handleActions(userId);
  },

  componentWillUnmount() {
    this.userListener.remove();
    this.unansweredListener.remove();
  },

  handleActions(userId) {
    UserActions.fetchUserById(userId);
    QuestionActions.fetchAnsweredQuestions(userId);
    QuestionActions.fetchUnansweredQuestions(userId);
  },

  getProfileInfo() {
    this.setState({
      viewedUser: UserStore.viewProfile()
    });
  },

  getAnsweredQuestions() {
    this.setState({
      questions: QuestionStore.answered()
    });

  },

  getUnansweredQuestions() {
    this.setState({
      unanswered: QuestionStore.unanswered()
    });
  },

  updateFile: function (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function (event) {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  },

  handleSubmit: function (e) {
    let formData = new FormData();

    formData.append("viewedUser[image]", this.state.imageFile);
    ApiUtil.editUserProfile(this.state.imageUrl, SessionStore.currentUser().id);
  },

  // <input type="file" onChange={ this.updateFile }/>
  render: function() {
    const user = SessionStore.currentUser();
    const viewedUser = this.state.viewedUser;
    const questions = this.state.questions;
    const unanswered = this.state.unanswered;

    const birthdate = ( viewedUser === undefined || viewedUser.birthdate === undefined) ? "--" : Helpers.getBday(viewedUser.birthdate) ;

    let pics = [];
    for (let i = 0; i < 25; i++) {
      pics.push(window[`pic${i + 1}`]);
    }

    let photo = viewedUser.image_url;
    if (viewedUser.id >= 2 && viewedUser.id <= 26) {
      photo = pics[viewedUser.id - 2];
    }
    return (
      <div className="user-profile">
        <Navbar />
        <div className="profile-content group">
          <div className="profile-header">
            <img src= { photo } className="user-picture"></img>
            <input type="file" className="upload-input" onChange={this.updateFile}/>
            <button onClick={this.handleSubmit}>Upload image</button>
            <div className="profile-info">
              <p className="profile-username">
                { viewedUser.username }
              </p>
              <p className="profile-deets">
                { birthdate } • { viewedUser.city_name }, { viewedUser.state_name } • { viewedUser.gender }
              </p>
            </div>
            <div className="profile-tabs">
              <Link
                to={`profile/${viewedUser.id}/about`}
                className="profile-tab-link"
                params={ { viewedUser: viewedUser } }>About</Link>
              <Link
                to={`profile/${viewedUser.id}/questions`}
                className="profile-tab-link">Questions</Link>
            </div>
            <img src={ this.state.imageUrl }/>
          </div>

          <div className="profile-body">
            { React.cloneElement(this.props.children, { viewedUser: viewedUser }) }
          </div>

        </div>
        <div className="profile-footer">
          © OkPizza 2016
        </div>
      </div>
    );
  }

});

module.exports = Profile;
