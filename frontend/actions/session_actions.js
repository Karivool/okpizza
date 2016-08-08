const ApiUtil = require('../util/api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = require('../constants/session_constants.js');
const ErrorActions = require('./error_actions.js');
const hashHistory = require('react-router').hashHistory;

module.exports = {
  logIn (form) {
    ApiUtil.logIn(
      form,
      this.takeInCurrentUser,
      ErrorActions.setErrors);
  },

  signUp (form) {
    ApiUtil.signUp(
      form,
      this.takeInCurrentUser,
      ErrorActions.setErrors);
  },

  fetchCurrentUser (id) {
    ApiUtil.fetchCurrentUser(id, this.takeInCurrentUser);
  },

  signOut () {
    ApiUtil.logOut(this.signoutCurrentUser);
  },

  takeInCurrentUser (user) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.USER_TAKEN_IN,
      user: user
    });
  },

  signoutCurrentUser () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SIGNOUT
    });
    hashHistory.push("/");
  }
};
