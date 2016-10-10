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
let _firstMessages = {};

const MessageStore = new Store(AppDispatcher);

const resetLastMessages = function (messages) {
  _firstMessages = {};
  messages.forEach(function (message) {
    _firstMessages[message.id] = message;
  });
};

const resetMessages = function (messages) {
  _messages = {};
  _messages[message.id] = messages;
};

MessageStore.firsts = function () {
  return Object.keys(_messages).map(function(messageId) {
    return _messages[messageId];
  });
};

MessageStore.__onDispatch = messageLoad => {
  switch (messageLoad.actionType) {
    case MESSAGE_TAKEN_IN:

      break;
    case TAKE_IN_MESSAGE:

      break;
    case ALL_LAST_MESSAGES:

      break;
    case MESSAGE_SET_TAKEN_IN:

      break;
  }
};

module.exports = MessageStore;
