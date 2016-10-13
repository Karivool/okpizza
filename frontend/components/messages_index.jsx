const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const MessageStore = require('../stores/message_store.js');
const MessageActions = require('../actions/message_actions.js');
const MessageIndexItem = require('./message_index_item.jsx');
const MessageForm = require('./message_form.jsx');
const SessionStore = require('../stores/session_store.js');

// import {
//   fetchAnsweredMessages,
//   fetchUnansweredMessages
// } from '../actions/message_actions';

const MessagesIndex = React.createClass({
  getInitialState() {
    return {
      messages: [],
    };
  },

  componentWillMount() {
    // this.messageListener = MessageStore.addListener(this.getMessages);

    // fetchfirstMessages(Sessionstore.currentUser);
  },

  componentWillUnmount() {
    this.messageListener.remove();
  },

  getMessages() {
    this.setState({
      messages: MessageStore.getLastMessages()
    });
  },

  showMessageForm(viewedUser, currentUser) {

  },

  render: function () {
    const currentUser = typeof currentUser !== "undefined" ? currentUser : SessionStore.currentUser();
    const messages = this.state.messages;
    const viewedUser = this.props.viewedUser;

    return (
      <div className="messages-index">
        <Navbar />
        { this.showMessageForm(viewedUser, currentUser) }
        <p className="message-title">Messages</p>
        <div className="messages-listing">
          {
            messages.map(function (message) {
              return (
                <MessageIndexItem
                  key={message.id}
                  message={message}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
});

// MessagesIndex.propTypes = {
//   viewedUser: React.PropTypes.object.isRequired
// };

module.exports = MessagesIndex;
