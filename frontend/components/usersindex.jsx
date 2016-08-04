const React = require('react');
const Link = require('react-router').Link;

const UsersIndex = React.createClass({

  render: function() {
    return (
      <div className="usersindex">
        <img src={window.okPizzaLogo}></img>
      </div>
    );
  }

});

module.exports = UsersIndex;
