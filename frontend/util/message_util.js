const ApiUtil = {
  fetchAllFirstMessages(userid, callback) {
    $.ajax({
      url: `api/messages`,
      method: "GET",
      dataType: "json",
      data: {  user_id: userid },
      success (messages){
        callback(messages);
      },
      error(renderError) {
        const errors = renderError.responseJSON;
        error("login", errors);
      }
    });
  }
};
module.exports = ApiUtil;
