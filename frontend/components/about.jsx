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
      userInfo: {},
      formStates: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
      }
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
      InfoActions.fetchUserInfo(newProps.params.userId);
      this.setState({
        userInfo: InfoStore.viewInfo()
      });
    }
  },

  toggleForm (idx) {
    let newEditState = this.state.formStates;

    newEditState[idx] = !newEditState[idx];
    this.setState({
      formStates: newEditState
    });
  },

  editForm(showEdit, textField) {
    if (showEdit === true) {
      return (
        <div className="edit-form">
          <textarea className="user-info" defaultValue={textField}/>
          <div className="button">
            <button type="submit" className="info-submit-button">Submit</button>
          </div>
        </div>
      );
    } else {
      return (
        textField
      );
    }
  },


  render: function () {
    const viewedUser = this.props.viewedUser;
    const userInfo = this.state.userInfo;
    const editIcon = "https://s3.amazonaws.com/okpizza-dev/neonpizza.png";
    const isCurrentUser = viewedUser.id === currentUser().id;
    const editStates = this.state.formStates;

    const aboutEl = [
      [userInfo[0], "My self-summary"],
      [userInfo[1], "What I am doing with my time"],
      [userInfo[2], "Favorite cooks, movies, shows, music, pizza"],
      [userInfo[3], "The six things I could do without"],
      [userInfo[4], "I spend a lot of time thinking about"],
      [userInfo[5], "On a typical night I am"],
      [userInfo[6], "You should message me if"]
    ];

    return (
      <div className="questions-index">
        <div className="profile-body-section">
            { aboutEl.map(function (mapItem, idx) {
              if (isCurrentUser === true) {
                  return [
                    <p key={idx} className="body-info-label">{mapItem[1]} <img id={idx} onClick={this.toggleForm.bind(this, idx)} className="edit-icon" src={editIcon}></img></p>,
                    <p key={idx + 1} className="body-info-text">{this.editForm(editStates[idx], mapItem[0])}</p>
                  ];
                } else {
                  return [
                    <p key={idx} className="body-info-label">{mapItem[1]}</p>,
                    <p key={idx + 1} className="body-info-text">{mapItem[0]}</p>
                  ];
                }
              }.bind(this))
            }
        </div>
      </div>
    );
  }
});

module.exports = AboutProfile;
