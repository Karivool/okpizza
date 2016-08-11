const ApiUtil = {


  fetchAllQuestions(callback) {
    $.ajax({
      url: `api/questions`,
      method: "GET",
      success (questions){
        callback(questions);
      },
      error(renderError) {
        const errors = renderError.responseJSON;
        error("login", errors);
      }
    });
  },

  fetchSingleQuestion(questionid, callback) {
    $.ajax({
      url: `api/questions/${questionid}`,
      method: "GET",
      success (question) {
        callback(question);
      },
      error(){

      }
    });
  },

  fetchQuestionsByResponse(userid, callback) {
    $.ajax({
      url: `api/questions`,
      method: "GET",
      dataType: "json",
      data: { responses: { user_id: userid } },
      success (questions) {
        debugger
        callback(questions);
      },
      error(failure){
        console.log(failure.responseText);
      }
    });
  },

  createQuestion(question, success, error) {
    $.ajax({
      url: "api/questions",
      method: "POST",
      dataType: "json",
      data: { question },
      success,
      error(renderError) {
        const errors = renderError.responseJSON;
        error("signup", errors);
      }
    });
  },

};
module.exports = ApiUtil;
