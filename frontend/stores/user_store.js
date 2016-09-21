const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const UserConstants = require('../constants/user_constants.js');

let _user = {};
let _users = {};

// const currentUser = {};
// const allUsers = {};

const UserStore = new Store(AppDispatcher);

const resetUsers = function (users) {
  _users = {};
  users.forEach(function (user) {
    _users[user.id] = user;
  });
};

const resetUser = function (user) {
  _user = {};
  _user[user.id] = user;
};

const setUser = function (user) {
  _user[user.id] = user;
};

// const removeUser = function (user) {
//   delete _user[user.id];
// };

UserStore.all = function () {
  return Object.keys(_users).map(function (userId) {
    return _users[userId];
  });
};

UserStore.viewProfile = function () {
  for (var obj in _user) {
    let pointer = parseInt(obj);
    return _user[pointer];
  }
};

UserStore.findFiltered = function (filter) {
  return Object.keys(_users).map(function (userId) {
    if (this.hasOwnProperty(filter)) {
      return _users[userId];
    }
  });
};

UserStore.__onDispatch = userload => {
  switch (userload.actionType) {
    case UserConstants.USER_TAKEN_IN:
      // setUser(userload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.ALL_USERS_TAKEN_IN:
      resetUsers(userload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.ALL_USERS_FILTERED:
      findFiltered(userload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.USERID_TAKEN_IN:
      resetUser(userload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
