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
        console.log(errors);
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

  fetchAllUsers(callback) {
    $.ajax({
      url: `api/users`,
      method: "GET",
      success (users){
        callback(users);
      },
      error(){

      }
    });
  },

  fetchFilteredUsers(callback) {
    $.ajax({
      url: `api/users`,
      method: "GET",
      success (users){
        callback(users);
      },
      error(){

      }
    });
  },

  fetchSingleUser(userid, callback) {
    $.ajax({
      url: `api/users/${userid}`,
      method: "GET",
      success (user) {
        callback(user);
      },
      error(){

      }
    });
  },

  fetchUserById(userid, callback) {
    $.ajax({
      url: `api/users/${userid}`,
      method: "GET",
      dataType: "json",
      success (user) {
        callback(user);
      },
      error(failure){
        console.log(failure.responseText);
      }
    });
  },

  editUser(userdata, callback) {
    $.ajax({
      url: `api/users/${userdata.id}`,
      method: "POST",
      data: { user },
      success (user) {
        callback(user);
      },
      error(){
      }
    });
  },

  editUserProfile(image, userid, callback) {
    $.ajax({
      url: `api/users/${userid}`,
      method: "PATCH",
      dataType: "json",
      data: image,
      contentType: false,
      processData: false,
      success: function() {
        callback();
      }
    });
  },

  destroyUser(userid, callback) {
    $.ajax({
      url: `api/users/${userid}`,
      method: "DELETE",
      success (user) {
        callback(user);
      },
      error(){

      }
    });
  }
};

module.exports = ApiUtil;
