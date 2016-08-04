const ApiUtil = require('../util/api_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = require('../constants/session_constants.js');

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
    ApiUtil.signOut(this.signoutCurrentUser);
  },

  takeInCurrentUser (user) {
    Dispatcher.dispatch({
      actionType: SessionConstants.USER_TAKEN_IN,
      user: user
    });
  },

  signoutCurrentUser () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.SIGNOUT
    });
    hashHistory.push("/login");
  }
};
