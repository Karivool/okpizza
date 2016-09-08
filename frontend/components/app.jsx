const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const Button = require('react-button');

const LoginForm = require('./login.jsx');
const SignUpForm = require('./signup.jsx');
const UsersIndex = require('./users_index.jsx');
const Navbar = require('./navbar.jsx');
const Profile = require('./profile.jsx');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

// window.currentUser = SessionStore.currentUser;

const App = React.createClass({

  getInitialState: function () {
    return { currentUser: SessionStore.currentUser() };
  },

  componentDidMount() {
    this.handleListeners();
    this._onChange();
  },

  handleListeners() {
    this.sessionListener = SessionStore.addListener(function () { this.getCurrentUser();}.bind(this));
  },

  getCurrentUser() {
    let currentUser = SessionStore.currentUser();

    if (currentUser) {
      this.setState({ currentUser: currentUser });
    }
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onChange() {
    this.forceUpdate();
  },

  sessionRenders() {
  },

  render() {
    return (
      <div className="sessionRender">
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
