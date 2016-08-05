const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const UserConstants = require('../constants/user_constants.js');

let _currentUser = {};

const UserStore = new Store(AppDispatcher);

const _login = function(currentUser) {
  _currentUser = currentUser;
};

const _signout = function() {
  _currentUser = {};
};

UserStore.__onDispatch = userload => {
  switch (userload.actionType) {
    case UserConstants.USER_TAKEN_IN:
      _login(userload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.SIGNOUT:
      _signout();
      UserStore.__emitChange();
      break;
  }
};

UserStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

UserStore.isUserLoggedIn = function() {
  return !!_currentUser.username;
};

module.exports = UserStore;
