const React = require('react');
const Link = require('react-router').Link;
const PropTypes = React.PropTypes;

const Navbar = React.createClass({

  render: function() {
    return (
      <div className="navbar">
        <img src={window.okPizzaLogo}></img>
      </div>
    );
  }

});

module.exports = Navbar;
