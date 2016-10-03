const ApiUtil = {

  fetchUserInfo(userid, callback) {
    $.ajax({
      url: `api/infos/${userid}`,
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
      url: "api/infos",
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

  updateUserInfo(userid, text, fieldtype, success) {
    $.ajax({
      url: `api/infos/${userid}`,
      method: "PATCH",
      dataType: "json",
      data: { userid, text, fieldtype },
      success,
      error(renderError) {
        const errors = renderError.responseJSON;
        console.log(errors);
      }
    });
  }

};
module.exports = ApiUtil;
