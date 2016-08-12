const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');

const AboutProfile = React.createClass({
  getInitialState () {
    return { user: this.props.user };
  },

  // componentDidMount () {
  // },

  // componentWillUnmount () {
  // },

  // componentWillReceiveProps (newProps) {
  //   if (newProps.params){
  //     this.setState({userName: newProps.params.username });
  //   } else {
  //     this.setState({userName: undefined});
  //   }
  // },

  // _onChange() {
  //   this.forceUpdate();
  // },

  render: function () {
    const user = this.props.user;

    return (
      <div className="questions-index">
        <div className="profile-body-section">
          <p className="body-info-label">My self-summary</p>
          <p className="body-info-text">{ user.summary }</p>
          <p className="body-info-label">What I am doing with my time</p>
          <p className="body-info-text">{ user.doing }</p>
          <p className="body-info-label">Favorite cooks, movies, shows, music, and pizza</p>
          <p className="body-info-text">{ user.favorites }</p>
          <p className="body-info-label">The six things I could do without</p>
          <p className="body-info-text">{ user.sixthings }</p>
          <p className="body-info-label">I spend a lot of life thinking about</p>
          <p className="body-info-text">{ user.thinking }</p>
          <p className="body-info-label">On a typical night I am</p>
          <p className="body-info-text">{ user.typical }</p>
          <p className="body-info-label">You should message me if</p>
          <p className="body-info-text">{ user.messageif }</p>


        </div>
      </div>
    );
  }
});

module.exports = AboutProfile;
