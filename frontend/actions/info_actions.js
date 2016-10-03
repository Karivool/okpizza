const ApiUtil = require('../util/info_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

import { USER_INFO_TAKEN_IN, USER_INFO_UPDATED } from '../constants/info_constants.js';

const SessionStore = require('../stores/session_store.js');
const ErrorActions = require('./error_actions.js');

// Action Creators

export function fetchUserInfo(userId) {
  ApiUtil.fetchUserInfo(
    userId,
    takeInUserInfo
  );
}

export function updateUserInfo(userId, userInfo, fieldType) {
  ApiUtil.updateUserInfo(
    userId, userInfo, fieldType,
    takeInUpdatedInfo
  );
}

// Actions

export function takeInUserInfo (userinfo) {
  Dispatcher.dispatch({
    actionType: USER_INFO_TAKEN_IN,
    userinfo: userinfo
  });
}

export function takeInUpdatedInfo (userinfo) {
  Dispatcher.dispatch({
    actionType: USER_INFO_UPDATED,
    userinfo: userinfo
  });
}
