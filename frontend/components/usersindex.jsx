const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');

const UsersIndex = React.createClass({

  render: function() {
    return (
      <div className="usersIndex">
        <Navbar />
      </div>
    );
  }

});

module.exports = UsersIndex;
