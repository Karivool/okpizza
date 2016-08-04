const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants.js');

let _currentUser = {};

const SessionStore = new Store(AppDispatcher);

const _login = function(currentUser) {
  _currentUser = currentUser;
};

const _signout = function() {
  _currentUser = {}
};

SessionStore.__onDispatch = sessload => {
  switch (sessload.actionType) {
    case SessionConstants.LOGIN:
      _login(sessload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.SIGNOUT:
      _signout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
}

module.exports = SessionStore;
