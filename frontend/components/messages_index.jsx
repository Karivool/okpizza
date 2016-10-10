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
      unanswered: {}
    };
  },

  componentWillMount() {
    // all answered messages
    // an unanswered message
    this.messageListener = MessageStore.addListener(this.getMessages);

    fetchAnsweredMessages(this.props.viewedUser.id);
    fetchUnansweredMessages();
  },

  componentWillUnmount() {
    this.messageListener.remove();
  },

  getMessages() {
    this.setState({
      unanswered: MessageStore.unanswered(),
      messages: MessageStore.answered()
    });
  },

  showMessageForm(unanswered, viewedUser, currentUser) {
    if (viewedUser.id === currentUser.id) {
      if (!unanswered) {
        return (
          <div className="show-message-form">
            <div className="message-each">
              Sorry! You answered all the messages.<br/>
            </div>
          </div>
        );
      }

      else if (Object.keys(unanswered).length > 0) {
        return (
          <div className="show-message-form">
            <MessageForm
              key={ unanswered.id }
              userId={ this.props.viewedUser.id }
              unanswered={ unanswered }
            />
          </div>
        );
      }
    }
  },

  render: function () {
    const currentUser = typeof currentUser !== "undefined" ? currentUser : SessionStore.currentUser();
    const unanswered = this.state.unanswered;
    const messages = this.state.messages;
    const viewedUser = this.props.viewedUser;

    return (
      <div className="messages-index">
        { this.showMessageForm(unanswered, viewedUser, currentUser) }
        <p className="messages-answered-p">Answered Messages</p>
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
