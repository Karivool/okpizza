const ApiUtil = require('../util/message_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

import {
  MESSAGE_TAKEN_IN,
  TAKE_IN_MESSAGE,
  ALL_LAST_MESSAGES,
  MESSAGE_SET_TAKEN_IN

} from '../constants/message_constants.js';

const SessionStore = require('../stores/session_store.js');
const ErrorActions = require('./error_actions.js');

// Action Creators

export function fetchAllFirstMessages(userId) {
  ApiUtil.fetchAllFirstMessages(
    userId,
    allLastMessages
  );
}

// Actions

export function allLastMessages(messages) {
  Dispatcher.dispatch({
    actionType: ALL_LAST_MESSAGES,
    messages: messages
  });
}
