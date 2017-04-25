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

    return (
      <ul className="message-item">
        { message }<br/>
      </ul>
    );
  }
});

module.exports = MessagesIndexItem;
