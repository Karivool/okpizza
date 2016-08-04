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

  render() {
    return (
      <div className="mainapp">
      <Navbar />
        <LoginForm />
      </div>
    );
  }
});

module.exports = App;
