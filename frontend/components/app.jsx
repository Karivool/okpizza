const React = require('react');
const Link = require('react-router').Link;
const LoginForm = require('./session/login.jsx');
const SignupForm = require('./session/signup.jsx');
const Navbar = require('./navbar.jsx');

const App = React.createClass({

  render() {
    return (
      <div className="mainapp">
      <Navbar />
        <LoginForm />
        <SignupForm />
      </div>
    );
  }
});

module.exports = App;
