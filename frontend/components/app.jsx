const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const LoginForm = require('./login.jsx');
const Navbar = require('./navbar.jsx');
const hashHistory = require('react-router').hashHistory;

const App = React.createClass({

  componentDidMount() {
    this.handleListeners();
    this._onChange();
  },

  handleListeners() {

  },

  _onChange() {

  },

  sessionRenders() {
    if (SessionStore.isUserLoggedIn()) {
      return (<Navbar />);
    } else {
      return (
        <div>Hell0</div>
      )
    }
  },

  render() {
    return (
      <div className="mainapp">
        { this.sessionRenders() }
      </div>
    );
  }
});

module.exports = App;
