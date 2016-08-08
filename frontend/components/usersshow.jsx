const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const HashHistory = require('react-router').hashHistory;

const UserShow = React.createClass({

  render: function() {
    return (
      <div className="user-show">
        <Navbar />
      </div>
    );
  }

});

module.exports = UserShow;
