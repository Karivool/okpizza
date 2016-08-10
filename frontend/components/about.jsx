const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');

const AboutProfile = React.createClass({
  getInitialState () {
    return { user: this.props.user };
  },
  componentDidMount () {
    this._onChange();
  },

  componentWillUnmount () {

  },

  componentWillReceiveProps (newProps) {
    if (newProps.params){
      this.setState({userName: newProps.params.username });
    } else {
      this.setState({userName: undefined});
    }
  },

  _onChange() {
    this.forceUpdate();
  },

  render: function () {
    const user = this.state.user;

    return (
      <div className="questions-index">
        <div className="profile-body-section">
          <p className="body-info-label">My self-summary</p>
          <p className="body-info-text">{ user.summary }</p>
        </div>
      </div>
    );
  }
});

module.exports = AboutProfile;
