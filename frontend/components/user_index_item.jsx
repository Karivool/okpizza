const React = require('react');
const Link = require('react-router').Link;
const UserActions = require('../actions/user_actions.js');
const hashHistory = require('react-router').hashHistory;
const Helpers = require ('./helpers.jsx');

const UsersIndexItem = React.createClass({
  // <img className="match-image" src={ user.image_url }/>

  render () {
    let pics = [];
    for (let i = 0; i < 30; i++) {
      pics.push(window[`pic${i + 1}`]);
    }

    const user = this.props.user;
    const birthdate = Helpers.getBday(user.birthdate);
    let photo = user.image_url;
    if (user.id >= 2 && user.id <= 31) {
      photo = pics[user.id - 2];
    }

    return (
      <li className="match-display-li">
        <div className="match-display-image">
          <a href={"#/profile/" + user.id}><img className="match-image" src={ photo }/></a>
        </div>
        <br></br>
        <div className="match-display-name">
          {user.username}
        </div>
        <br></br>
        <div className="match-display-details">
          {birthdate} • {user.city_name}, {user.state_name}
        </div>
      </li>
    );
  }

});

module.exports = UsersIndexItem;
