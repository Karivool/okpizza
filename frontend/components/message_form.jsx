const React = require('react');
const Link = require('react-router').Link;
const MessageActions = require('../actions/message_actions.js');
const MessageStore = require('../stores/message_store.js');
const hashHistory = require('react-router').hashHistory;

const MessageForm = React.createClass({
  getInitialState () {
    return({
      message: "",
    });
  },

  componentWillMount() {
    this.setState({
      answer: null
    });
  },

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.message !== "") {
      MessageActions.submitResponse(
        this.state.message
      );
      MessageActions.fetchNewMessage(this.props.userId);

      this.setState({
        answer: null
      });
    }
  },

  inputHandler(property, event) {
    this.setState({
      [property]: event.target.value,
    });
  },

  render () {
    const messages = this.props.messages;

    return (
      <div className="message-form">
        <form>
          <button
            onClick={ this.handleSubmit }
            className="send-button"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
});

module.exports = MessageForm;
