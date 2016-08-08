const React = require('react');
const Link = require('react-router').Link;
const UserActions = require('../actions/user_actions.js');
const hashHistory = require('react-router').hashHistory;

const UsersIndexItem = React.createClass({

  getBday(bday) {
    let age;

    const date = new Date();
    const year = parseInt(bday.slice(0, 4));
    const month = parseInt(bday.slice(5, 7));
    const day = parseInt(bday.slice(8, 10));

    age = date.getUTCFullYear() - year;

    if (date.getMonth() + 1 < month) {
      age -= 1;
    } else if (date.getMonth() === month && date.getDate < day) {
      age -= 1;
    }

    return age;
  },

  render () {
    const user = this.props.user;
    const birthdate = this.getBday(user.birthdate);
    return (
      <li className="match-display-li">
        <div className="match-display-image">
          [Picture]
        </div>
        <br></br>
        <div className="match-display-name">
          {user.username}
        </div>
        <br></br>
        <div className="match-display-details">
          {birthdate} * {user.city_name}, {user.state_name}
        </div>
          {user.summary}
      </li>
    );
  }

});

module.exports = UsersIndexItem;
