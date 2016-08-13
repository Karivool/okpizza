const React = require('react');
const Link = require('react-router').Link;
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
      user: {},
      userId: null,
      imageFile: null,
      imageUrl: null
    });
  },

  componentDidMount () {
    const userId = this.props.params.userId;
    this.userListener = UserStore.addListener(this.getProfileInfo);
    this.questionListener = QuestionStore.addListener(this.getAnsweredQuestions);
    this.unansweredListener = QuestionStore.addListener(this.getUnansweredQuestions);
    this.handleActions(userId);
  },

  componentWillReceiveProps (newProps) {
    const userId = newProps.params.userId;
    this.handleActions(userId);
  },

  componentWillUnmount () {
    this.userListener.remove();
    this.questionListener.remove();
    this.unansweredListener.remove();
  },

  handleActions(userId) {
    UserActions.fetchUserById(userId);
    QuestionActions.fetchAnsweredQuestions(userId);
    QuestionActions.fetchUnansweredQuestions(userId);
  },

  getProfileInfo() {
    this.setState({ user: UserStore.viewProfile() });
  },

  getAnsweredQuestions() {
    this.setState({ questions: QuestionStore.answered() });

  },

  getUnansweredQuestions() {
    this.setState({ unanswered: QuestionStore.unanswered() });
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

  handleSubmit: function (e) {
    let formData = new FormData();
    formData.append("user[image]", this.state.imageFile);
    ApiUtil.editProfile(this.state);
  },

  // <input type="file" onChange={ this.updateFile }/>
  render: function() {

    const user = this.state.user;
    const questions = this.state.questions;
    const unanswered = this.state.unanswered;
    const birthdate = ( user === undefined || user.birthdate === undefined) ? "--" : Helpers.getBday(user.birthdate) ;

    const pics = [window.pic1, window.pic2, window.pic3, window.pic4, window.pic5, window.pic6, window.pic7, window.pic8, window.pic9, window.pic10, window.pic11, window.pic12, window.pic13, window.pic14, window.pic15, window.pic16, window.pic17, window.pic18, window.pic19, window.pic20, window.pic21, window.pic22, window.pic23, window.pic24, window.pic25];
    let photo = user.image_url;
    if (user.id >= 2 && user.id <= 26) {
      photo = pics[user.id - 2];
    }

    return (
      <div className="user-profile">
        <Navbar />
        <div className="profile-content group">
          <div className="profile-header">
            <img src= { photo } className="user-picture"></img>
            <div className="profile-info">
              <p className="profile-username">
                { user.username }
              </p>
              <p className="profile-deets">
                { birthdate } • { user.city_name }, { user.state_name } • { user.gender }
              </p>
            </div>
            <div className="profile-tabs">
              <Link
                to={`profile/${user.id}/about`}
                className="profile-tab-link"
                params={ {user: user} }>About</Link>
              <Link
                to={`profile/${user.id}/questions`}
                className="profile-tab-link">Questions</Link>
            </div>
            <img src={ this.state.imageUrl }/>
          </div>

          <div className="profile-body">
            { React.cloneElement(this.props.children, {user: user, questions: questions, unanswered: unanswered } )}
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
