const React = require('react');
const Link = require('react-router').Link;
const UserActions = require('../actions/user_actions.js');
const hashHistory = require('react-router').hashHistory;

const UsersIndexItem = React.createClass({

  render () {
    const date = Date.now();

    const user = this.props.user;
    return (
      <li>
        {user.username}'s picture'<br></br>
        {user.username}<br></br>
      {user.birthdate} * {user.city}, {user.state}
      </li>
    );
  }

});

module.exports = UsersIndexItem;
