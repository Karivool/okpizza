const React = require('react');
const Link = require('react-router').Link;
const MessageStore = require('../stores/message_store.js');
const hashHistory = require('react-router').hashHistory;

const MessagesIndexItem = React.createClass({
  componentWillMount() {
  },

  componentWillReceiveProps() {
  },

  render () {
    const message = this.props.message;
    const username = this.props.photo;

    return (
      <div className="message-item">
        <img></img>
        Conversation with {username}
        <ul>
          { message }<br/>
        </ul>
      </div>
    );
  }
});

module.exports = MessagesIndexItem;
