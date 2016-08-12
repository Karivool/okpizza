const React = require('react');
const Link = require('react-router').Link;
const UserActions = require('../actions/user_actions.js');
const hashHistory = require('react-router').hashHistory;
const Helpers = require ('./helpers.jsx');

const UsersIndexItem = React.createClass({
  // <img className="match-image" src={ user.image_url }/>

  render () {
    const pics = [window.pic1, window.pic2, window.pic3, window.pic4, window.pic5, window.pic6, window.pic7, window.pic8, window.pic9, window.pic10, window.pic11, window.pic12, window.pic13, window.pic14, window.pic15, window.pic16, window.pic17, window.pic18, window.pic19, window.pic20, window.pic21, window.pic22, window.pic23, window.pic24, window.pic25];

    const user = this.props.user;
    const birthdate = Helpers.getBday(user.birthdate);
    let photo = user.image_url;
    if (user.id >= 2 && user.id <= 25) {
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
