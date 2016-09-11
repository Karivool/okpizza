const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');

const AboutProfile = React.createClass({
  getInitialState () {
    return { viewedUser: this.props.viewedUser };
  },

  // componentDidMount () {
  // },

  // componentWillUnmount () {
  // },

  // componentWillReceiveProps (newProps) {
  //   if (newProps.params){
  //     this.setState({viewedUserName: newProps.params.viewedUsername });
  //   } else {
  //     this.setState({viewedUserName: undefined});
  //   }
  // },

  render: function () {
    const viewedUser = this.props.viewedUser;
    const editIcon = "https://s3.amazonaws.com/okpizza-dev/neonpizza.png";
    const isCurrentUser = viewedUser.id === currentUser.id;
    const aboutEl = [
      [viewedUser.summary, "My self-summary"],
      [viewedUser.doing, "What I am doing with my time"],
      [viewedUser.favorites, "Favorite cooks, movies, shows, music, pizza"],
      [viewedUser.sixthings, "The six things I could do without"],
      [viewedUser.thinking, "I spend a lot of time thinking about"],
      [viewedUser.typical, "On a typical night I am"],
      [viewedUser.messageif, "You should message me if"]
    ];
    return (
      <div className="questions-index">
        <div className="profile-body-section">
            { aboutEl.map(function (mapItem, idx) {
              if (isCurrentUser === true) {
                  return [<p key={idx} className="body-info-label">{mapItem[1]} <img className="edit-icon" src={editIcon}></img></p>, <p key={idx + 1} className="body-info-text">{mapItem[0]}</p>];
                } else {
                  return [<p key={idx} className="body-info-label">{mapItem[1]}</p>, <p key={idx + 1} className="body-info-text">{mapItem[0]}</p>];
                }
              })
            }
        </div>
      </div>
    );
  }
});

module.exports = AboutProfile;
