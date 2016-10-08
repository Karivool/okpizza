const ApiUtil = {
  fetchAllFirstMessages(userid, callback) {
    $.ajax({
      url: `api/messages`,
      method: "GET",
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
