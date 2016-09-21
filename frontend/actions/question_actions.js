const ApiUtil = require('../util/question_util.js');
const Dispatcher = require('../dispatcher/dispatcher.js');

import {
  QUESTION_TAKEN_IN,
  ALL_QUESTIONS_TAKEN_IN,
  ANSWERED_QUESTIONS_TAKEN_IN,
  UNANSWERED_QUESTIONS_TAKEN_IN,
  RESPONSE_TAKEN_IN
} from '../constants/question_constants.js';

const SessionStore = require('../stores/session_store.js');
const ErrorActions = require('./error_actions.js');

// Action Creators

export function fetchAnsweredQuestions(userId) {
  ApiUtil.fetchQuestionsByResponse(
    userId,
    takeInAnsweredQuestions
  );
}

export function fetchUnansweredQuestion(userId) {
  ApiUtil.fetchQuestionsByNoResponse(
    userId,
    receiveUnansweredQuestion
  );
}

export function fetchAllQuestions () {
  ApiUtil.fetchAllQuestions(
    takeInAllQuestions,
    ErrorActions.setErrors);
}

export function fetchSingleQuestion (id) {
  ApiUtil.fetchSingleQuestion(id, takeInSingleQuestion);
}

export function fetchUnansweredQuestions() {
  let currentUser = SessionStore.currentUser();
  ApiUtil.fetchQuestionsByNoResponse (currentUser.id,
  takeInUnansweredQuestions);
}

export function submitAnswer(answer, questionId) {
  let currentUser = SessionStore.currentUser();
  const response = parseInt(answer) + 1;
  ApiUtil.createResponse(response, questionId, currentUser.id, takeInResponse);
}


// Actions

export function takeInResponse (response) {
  Dispatcher.dispatch({
    actionType: RESPONSE_TAKEN_IN,
    response: response
  });
}

export function receiveUnansweredQuestion(response) {
  Dispatcher.dispatch({
    actionType: RECEIVE_UNANSWERED_QUESTION,
    response: response
  });
}

export function takeInAnsweredQuestions(questions) {
  Dispatcher.dispatch({
    actionType: ANSWERED_QUESTIONS_TAKEN_IN,
    questions: questions
  });
}

export function takeInUnansweredQuestions (questions) {
  Dispatcher.dispatch({
    actionType: UNANSWERED_QUESTIONS_TAKEN_IN,
    questions: questions
  });
}

export function takeInAllQuestions (questions) {
  Dispatcher.dispatch({
    actionType: ALL_QUESTIONS_TAKEN_IN,
    questions: questions
  });
}

export function takeInSingleQuestion (question) {
  Dispatcher.dispatch({
    actionType: QUESTION_TAKEN_IN,
    question: question
  });
}
