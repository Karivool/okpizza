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
      data: {  user_id: userid },
      success (questions) {
        callback(questions);
      },
      error(failure){
        console.log(failure.responseText);
      }
    });
  },

  fetchQuestionsByNoResponse(userid, callback) {
    $.ajax({
      url: `api/questions`,
      method: "GET",
      dataType: "json",
      data: { user_id: userid, non_answers: true },
      success (questions) {
        callback(questions);
      },
      error(failure) {
        console.log(failure.responseText);
      }
    });
  },

  createResponse(response, questionId, id, callback) {
    const userId = id;
    $.ajax({
      url: "api/responses",
      method: "POST",
      dataType: "json",
      data: { response: { answer: response, question_id: questionId, user_id: userId } },
      success (response) {
        callback(response);
      },
      error (failure) {
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
