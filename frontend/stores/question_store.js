const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const QuestionConstants = require('../constants/question_constants.js');

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

const setQuestion = function (question) {
  _question[question.id] = question;
};

QuestionStore.all = function () {
  return Object.keys(_questions).map(function (questionId) {
    return _questions[questionId];
  });
};

QuestionStore.findFiltered = function (filter) {
  return Object.keys(_questions).map(function (questionId) {
    if (this.hasOwnProperty(filter)) {
      return _questions[questionId];
    }
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
  }
};

module.exports = QuestionStore;
