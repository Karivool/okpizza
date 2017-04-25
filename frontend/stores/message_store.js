const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
import {
  MESSAGE_TAKEN_IN,
  TAKE_IN_MESSAGE,
  ALL_LAST_MESSAGES,
  MESSAGE_SET_TAKEN_IN

} from '../constants/message_constants.js';

const ApiUtil = require('../util/message_util.js');

let _message = {};
let _messages = {};
let _lastMessages = {};

const MessageStore = new Store(AppDispatcher);

const resetLastMessages = function (messages) {
  _lastMessages = {};
  messages.forEach(function (message, id) {
    _lastMessages[id] = message;
  });
};

const resetMessages = function (messages) {
  _messages = {};
  _messages[message.id] = messages;
};

MessageStore.getLastMessages = function () {
  return Object.keys(_lastMessages).map(function(messageId) {
    return _lastMessages[messageId];
  });
};

MessageStore.__onDispatch = messageLoad => {
  switch (messageLoad.actionType) {
    case MESSAGE_TAKEN_IN:
      debugger
      break;
    case TAKE_IN_MESSAGE:
      debugger
      break;
    case ALL_LAST_MESSAGES:
      resetLastMessages(messageLoad.messages);
      MessageStore.__emitChange();
      break;
    case MESSAGE_SET_TAKEN_IN:
      debugger
      break;
  }
};

module.exports = MessageStore;
