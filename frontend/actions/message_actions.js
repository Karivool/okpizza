const ApiUtil = require('../util/message_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

import {
  MESSAGE_TAKEN_IN,
  RECEIVE_MESSAGE,
  ALL_FIRST_MESSAGES,
  MESSAGE_SET_TAKEN_IN

} from '../constants/message_constants.js';

const SessionStore = require('../stores/session_store.js');
const ErrorActions = require('./error_actions.js');

// Action Creators

// Actions 
