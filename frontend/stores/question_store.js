const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
import {
  QUESTION_TAKEN_IN,
  ALL_QUESTIONS_TAKEN_IN,
  ANSWERED_QUESTIONS_TAKEN_IN,
  UNANSWERED_QUESTIONS_TAKEN_IN,
  RESPONSE_TAKEN_IN
} from '../constants/question_constants.js';

const ApiUtil = require('../util/question_util.js');

let _question = {};
let _questions = {};

// const currentQuestion = {};
// const allQuestions = {};

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
  let unansweredQuestions = Object.keys(_question).map(function (questionId) {
    return _question[questionId];
  });

  if (unansweredQuestions.length === 0) {
    return null;
  }

  else {
    return unansweredQuestions[Math.floor(Math.random()*unansweredQuestions.length)];
  }
};

QuestionStore.__onDispatch = questionload => {
  switch (questionload.actionType) {
    case QUESTION_TAKEN_IN:
      setQuestion(questionload.question);
      QuestionStore.__emitChange();
      break;

    case ALL_QUESTIONS_TAKEN_IN:
      resetQuestions(questionload.questions);
      QuestionStore.__emitChange();
      break;

    case ANSWERED_QUESTIONS_TAKEN_IN:
      getQuestionsFromResponses(questionload.questions);
      QuestionStore.__emitChange();
      break;

    case UNANSWERED_QUESTIONS_TAKEN_IN:
      getUnansweredQuestionsFromResponses(questionload.questions);
      QuestionStore.__emitChange();
      break;

    case RESPONSE_TAKEN_IN:
      loadNewQuestion(questionload.response);
      QuestionStore.__emitChange();
      break;
  }
};

module.exports = QuestionStore;
