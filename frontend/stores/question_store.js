const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const QuestionConstants = require('../constants/question_constants.js');
const ApiUtil = require('../util/question_util.js');

let _question = {};
let _questions = {};

const QuestionStore = new Store(AppDispatcher);

const resetQuestions = function (questions) {
  _questions = {};
  questions.forEach(function (question) {
    _questions[question.id] = question;
  });
};

const resetQuestion = function (question) {
  _question = {};
  _question[question.id] = question;
};

const getQuestionsFromResponses = function (questions) {
  _questions = {};
  questions.forEach(function (question) {
    _questions[question.id] = question;
  });
};

const getUnansweredQuestionsFromResponses = function (questions) {
  _question = {};
  _question[0] = questions[0];
};

const setQuestion = function (question) {
  _question[question.id] = question;
};

const loadNewQuestion = function (response) {
};

QuestionStore.all = function () {
  return Object.keys(_questions).map(function (questionId) {
    return _questions[questionId];
  });
};

QuestionStore.answered = function (responses) {
  return Object.keys(_questions).map(function (questionId) {
    return _questions[questionId];
  });
};

QuestionStore.unanswered = function (responses) {
  return Object.keys(_question).map(function (questionId) {
    return _question[questionId];
  });
};

QuestionStore.__onDispatch = questionload => {
  switch (questionload.actionType) {
    case QuestionConstants.QUESTION_TAKEN_IN:
      setQuestion(questionload.question);
      QuestionStore.__emitChange();
      break;
    case QuestionConstants.ALL_QUESTIONS_TAKEN_IN:
      resetQuestions(questionload.questions);
      QuestionStore.__emitChange();
      break;
    case QuestionConstants.ANSWERED_QUESTIONS_TAKEN_IN:
      getQuestionsFromResponses(questionload.questions);
      QuestionStore.__emitChange();
      break;
    case QuestionConstants.UNANSWERED_QUESTIONS_TAKEN_IN:
      getUnansweredQuestionsFromResponses(questionload.questions);
      QuestionStore.__emitChange();
      break;
    case QuestionConstants.RESPONSE_TAKEN_IN:
      loadNewQuestion(questionload.response);
      QuestionStore.__emitChange();
      break;
  }
};

module.exports = QuestionStore;
