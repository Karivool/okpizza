const React = require('react');
const Link = require('react-router').Link;

const Navbar = React.createClass({


  render: function() {
    return (
      <div className="navbar">
        <div className="mini-logo">
          <a href="#/index"><img src={okPLogo}/></a>
        </div>
        <div className="user-nav-detail">
          "le user"
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
