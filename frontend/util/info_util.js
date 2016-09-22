const ApiUtil = {

  fetchUserInfo(userid, callback) {
    $.ajax({
      url: `api/user_infos/${userid}`,
      method: "GET",
      success (userinfo) {
        callback(userinfo);
      },
      error(){
      }
    });
  },

  createUserInfo(userid, success, error) {
    $.ajax({
      url: "api/user_infos",
      method: "POST",
      dataType: "json",
      data: { userid },
      success,
      error(renderError) {
        const errors = renderError.responseJSON;
        error("signup", errors);
      }
    });
  },

};
module.exports = ApiUtil;
