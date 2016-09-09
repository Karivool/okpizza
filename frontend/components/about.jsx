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

  // _onChange() {
  //   this.forceUpdate();
  // },

  render: function () {
    const viewedUser = this.props.viewedUser;

    return (
      <div className="questions-index">
        <div className="profile-body-section">
          <p className="body-info-label">My self-summary</p>
          <p className="body-info-text">{ viewedUser.summary }</p>
          <p className="body-info-label">What I am doing with my time</p>
          <p className="body-info-text">{ viewedUser.doing }</p>
          <p className="body-info-label">Favorite cooks, movies, shows, music, and pizza</p>
          <p className="body-info-text">{ viewedUser.favorites }</p>
          <p className="body-info-label">The six things I could do without</p>
          <p className="body-info-text">{ viewedUser.sixthings }</p>
          <p className="body-info-label">I spend a lot of life thinking about</p>
          <p className="body-info-text">{ viewedUser.thinking }</p>
          <p className="body-info-label">On a typical night I am</p>
          <p className="body-info-text">{ viewedUser.typical }</p>
          <p className="body-info-label">You should message me if</p>
          <p className="body-info-text">{ viewedUser.messageif }</p>


        </div>
      </div>
    );
  }
});

module.exports = AboutProfile;
