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
  // <img className="match-image" src={ user.image_url }/>

  render () {
    const pics = [window.pic1, window.pic2, window.pic3, window.pic4, window.pic5, window.pic6, window.pic7, window.pic8, window.pic9, window.pic10, window.pic11, window.pic12, window.pic13, window.pic14, window.pic15, window.pic16, window.pic17, window.pic18, window.pic19, window.pic20, window.pic21, window.pic22, window.pic23, window.pic24, window.pic25];

    const user = this.props.user;
    const birthdate = this.getBday(user.birthdate);
    return (
      <li className="match-display-li">
        <div className="match-display-image">
          <img className="match-image" src={ pics[user.id - 2] }/>
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
