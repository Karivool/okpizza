const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
import {
  MESSAGE_TAKEN_IN,
  RECEIVE_MESSAGE,
  ALL_FIRST_MESSAGES,
  MESSAGE_SET_TAKEN_IN

} from '../constants/message_constants.js';

const ApiUtil = require('../util/message_util.js');

let _message = {};
let _messages = {};
let _firstMessages = {};

const MessageStore = new Store(AppDispatcher);

module.exports = MessageStore;
