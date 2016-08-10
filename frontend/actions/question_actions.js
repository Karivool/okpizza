const ApiUtil = require('../util/api_util.js');
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
