const ApiUtil = {


  fetchAllQuestions(callback) {
    $.ajax({
      url: `api/questions`,
      method: "GET",
      success (questions){
        callback(questions);
      },
      error(){

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
