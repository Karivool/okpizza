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

};
module.exports = ApiUtil;
