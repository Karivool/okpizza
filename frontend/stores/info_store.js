const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
import { USER_INFO_TAKEN_IN } from '../constants/info_constants.js';

const ApiUtil = require('../util/info_util.js');

let _userInfo = {};

const InfoStore = new Store(AppDispatcher);

const resetUserInfo = function (userInfo) {
  _userInfo = {};
  _userInfo[userInfo.id] = userInfo;
};

const setUserInfo = function (userInfo) {
  _userInfo[userInfo.id] = userInfo;
};

const loadNewUserInfo = function (response) {
};

InfoStore.viewInfo = function () {
  return Object.keys(_userInfos).map(function (userInfoId) {
    return _userInfos[userInfoId];
  });
};

InfoStore.__onDispatch = userInfoload => {
  switch (userInfoload.actionType) {
    case USER_INFO_TAKEN_IN:
      setUserInfo(userInfoload.userInfo);
      InfoStore.__emitChange();
      break;
  }
};

module.exports = InfoStore;
