const React = require('react');
const Link = require('react-router').Link;
const Button = require('react-button');

const Navbar = React.createClass({


  render: function() {
    let signupTheme = {
      style: { color: 'white' },
    }

    return (
      <div className="navbar">
        <img src={window.okPizzaLogo}></img>
        <span className="navbar-signin">
          Have an account? <Button theme={signupTheme} href="#/login" className="sign-up-button">Sign in</Button>
        </span>
      </div>
    );
  }

});

module.exports = Navbar;
