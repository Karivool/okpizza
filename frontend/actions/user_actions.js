const ApiUtil = require('../util/api_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const UserConstants = require('../constants/user_constants.js');
const ErrorActions = require('./error_actions.js');

module.exports = {
  fetchAllUsers () {
    ApiUtil.fetchAllUsers(
      this.takeInAllUsers,
      ErrorActions.setErrors);
  },

  fetchFilteredUsers () {
    ApiUtil.fetchFilteredUsers(
      this.takeInFilteredUsers,
      ErrorActions.setErrors);
  },

  fetchSingleUser (id) {
    ApiUtil.fetchSingleUser(id, this.takeInSingleUser);
  },

  editUser (data) {
    ApiUtil.editUser(data, this.takeinSingleUser);
  },

  destroyUser (id) {
    ApiUtil.destroyUser(id, this.destroyCurrentUser);
  },

  takeInAllUsers (users) {
    Dispatcher.dispatch({
      actionType: UserConstants.ALL_USERS_TAKEN_IN,
      users: users
    });
  },

  takeInSingleUser (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_TAKEN_IN,
      user: user
    });
  },

  takeInFilteredUsers (users) {
    Dispatcher.dispatch({
      actionType: UserConstants.ALL_USERS_FILTERED,
      users: users
    });
  },
};
