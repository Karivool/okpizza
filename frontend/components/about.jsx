const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');
const InfoStore = require('../stores/info_store.js');
const InfoActions = require('../actions/info_actions.js');

import { currentUser } from '../stores/session_store';

const AboutProfile = React.createClass({
  getInitialState () {
    return {
      viewedUser: this.props.viewedUser,
      userInfo: {}
    };
  },

  componentDidMount () {
    this.userInfoListener = InfoStore.addListener(this.getUserInfo);
    InfoActions.fetchUserInfo(this.props.params.userId);
  },

  getUserInfo () {
    this.setState({
      userInfo: InfoStore.viewInfo()
    });
  },

  componentWillUnmount () {
    this.userInfoListener.remove();
  },

  componentWillReceiveProps (newProps) {
    if (parseInt(newProps.params.userId) !== newProps.viewedUser.id) {
      InfoActions.fetchUserInfo(this.props.params.userId);
    }
  },

  infoForm () {
    return (
      <form onSubmit={ this.handleSubmit } className="about-info-box">
        <div>
          <label for="name">Info section:</label>
          <input type="text" id="name" name="user_info" />
        </div>
        <div class="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  },


  render: function () {
    const viewedUser = this.props.viewedUser;
    const userInfo = this.state.userInfo;
    const editIcon = "https://s3.amazonaws.com/okpizza-dev/neonpizza.png";
    const isCurrentUser = viewedUser.id === currentUser().id;

    const aboutEl = [
      [userInfo[0], "My self-summary", this.infoForm()],
      [userInfo[1], "What I am doing with my time", this.infoForm()],
      [userInfo[2], "Favorite cooks, movies, shows, music, pizza", this.infoForm()],
      [userInfo[3], "The six things I could do without", this.infoForm()],
      [userInfo[4], "I spend a lot of time thinking about", this.infoForm()],
      [userInfo[5], "On a typical night I am", this.infoForm()],
      [userInfo[6], "You should message me if", this.infoForm()]
    ];
    return (
      <div className="questions-index">
        <div className="profile-body-section">
            { aboutEl.map(function (mapItem, idx) {
              if (isCurrentUser === true) {
                  return [
                    <p key={idx} className="body-info-label">{mapItem[1]} <img className="edit-icon" src={editIcon}></img></p>,
                    <p key={idx + 1} className="body-info-text">{mapItem[0]}</p>
                  ];
                } else {
                  return [
                    <p key={idx} className="body-info-label">{mapItem[1]}</p>,
                    <p key={idx + 1} className="body-info-text">{mapItem[0]}</p>
                  ];
                }
              })
            }
        </div>
      </div>
    );
  }
});

module.exports = AboutProfile;
