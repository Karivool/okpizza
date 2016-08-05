const React = require('react');
const Link = require('react-router').Link;

const Navbar = React.createClass({


  render: function() {
    return (
      <div className="navbar">
        <img src={window.okPLogo}></img>
      </div>
    );
  }

});

module.exports = Navbar;
