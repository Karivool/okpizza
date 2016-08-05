const ApiUtil = {

  logIn(user, success, error) {
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: { user },
      success,
      error(renderError) {
        const errors = renderError.responseJSON;
        error("login", errors);
      }
    });
  },

  logOut(success) {
    $.ajax({
      url: "/api/session",
      method: "DELETE",
      success,
      error() {
        console.log("Logout Error");
      }
    });
  },

  signUp(user, success, error) {
    $.ajax({
      url: "api/users",
      method: "POST",
      dataType: "json",
      data: { user },
      success,
      error(renderError) {
        const errors = renderError.responseJSON;
        error("signup", errors);
      }
    });
  },

  fetchCurrentUser(success) {
    $.ajax({
      url: "api/session",
      method: "GET",
      success,
      error: function (renderError) {
        console.log("Error fetching current user");
      }
    });
  },

  receiveAllUsers() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  },

  receiveSingleUser() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  },

  deleteUser() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  },

  fetchAllUsers() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  },

  fetchFilteredUsers() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  },

  fetchSingleUser() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  },

  createUser() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  },

  editUser() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  },

  destroyUser() {
    $.ajax({
      url: "",
      method: "",
      success,
      error(){

      }
    });
  }
};

module.exports = ApiUtil;
