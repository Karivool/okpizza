const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions.js');

const Navbar = React.createClass({

  _signOut() {
    SessionActions.signOut();
  },

  render: function() {
    return (
      <div className="navbar">
        <div className="mini-logo">
          <a href="#/index"><img src={okPLogo}/></a>
        </div>
        <div className="user-nav-detail">
          "le user"
        </div>
        <div className="sign-out">
          <button onClick={this._signOut} className="sign-out-button">Log out</button>
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
