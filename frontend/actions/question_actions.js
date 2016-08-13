const ApiUtil = require('../util/question_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');
const QuestionConstants = require('../constants/question_constants.js');
const ErrorActions = require('./error_actions.js');

module.exports = {
  fetchAllQuestions () {
    ApiUtil.fetchAllQuestions(
      this.takeInAllQuestions,
      ErrorActions.setErrors);
  },

  fetchSingleQuestion (id) {
    ApiUtil.fetchSingleQuestion(id, this.takeInSingleQuestion);
  },

  fetchAnsweredQuestions (id) {
    ApiUtil.fetchQuestionsByResponse (id,
    this.takeInAnsweredQuestions);
  },

  fetchUnansweredQuestions (id) {
    ApiUtil.fetchQuestionsByNoResponse (id,
    this.takeInUnansweredQuestions);
  },

  submitAnswer(answer, questionId) {
    const response = parseInt(answer) + 1;
    ApiUtil.createResponse(response, questionId, this.takeInResponse);
  },

  takeInResponse (response) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.RESPONSE_TAKEN_IN,
      response: response
    });
  },

  takeInAnsweredQuestions (questions) {
    Dispatcher.dispatch({
      actionType:
      QuestionConstants.ANSWERED_QUESTIONS_TAKEN_IN,
      questions: questions
    });
  },

  takeInUnansweredQuestions (questions) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.UNANSWERED_QUESTIONS_TAKEN_IN,
      questions: questions
    });
  },

  takeInAllQuestions (questions) {
    Dispatcher.dispatch({
      actionType: QuestionConstants.ALL_QUESTIONS_TAKEN_IN,
      questions: questions
    });
  },

  takeInSingleQuestion (question) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_TAKEN_IN,
      question: question
    });
  },
};
