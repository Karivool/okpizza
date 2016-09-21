const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');
const QuestionIndexItem = require('./question_index_item.jsx');
const QuestionForm = require('./question_form.jsx');
const SessionStore = require('../stores/session_store.js');

import {
  fetchAnsweredQuestions,
  fetchUnansweredQuestions
 } from '../actions/question_actions';

const QuestionsIndex = React.createClass({
  getInitialState() {
    return {
      questions: [],
      unanswered: {}
    };
  },

  componentWillMount() {
    // all answered questions
    // an unanswered question
    this.questionListener = QuestionStore.addListener(this.getQuestions);

    fetchAnsweredQuestions(this.props.viewedUser.id);
    fetchUnansweredQuestions();
  },

  componentWillUnmount() {
    this.questionListener.remove();
  },

  getQuestions() {
    this.setState({
      unanswered: QuestionStore.unanswered(),
      questions: QuestionStore.answered()
    });
  },

  showQuestionForm(unanswered, viewedUser, currentUser) {
    if (viewedUser.id === currentUser.id) {
      if (!unanswered) {
        return (
          <div className="show-question-form">
            <div className="question-each">
              Sorry! You answered all the questions.<br/>
            </div>
          </div>
        );
      }

      else if (Object.keys(unanswered).length > 0) {
        return (
          <div className="show-question-form">
            <QuestionForm
              key={ unanswered.id }
              userId={ this.props.viewedUser.id }
              unanswered={ unanswered }
            />
          </div>
        );
      }
    }
  },

  render: function () {
    const currentUser = typeof currentUser !== "undefined" ? currentUser : SessionStore.currentUser();
    const unanswered = this.state.unanswered;
    const questions = this.state.questions;
    const viewedUser = this.props.viewedUser;

    return (
      <div className="questions-index">
        { this.showQuestionForm(unanswered, viewedUser, currentUser) }
        <p className="questions-answered-p">Answered Questions</p>
        <div className="questions-listing">
          {
            questions.map(function (question) {
              return (
                <QuestionIndexItem
                  key={question.id}
                  question={question}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
});

// QuestionsIndex.propTypes = {
//   viewedUser: React.PropTypes.object.isRequired
// };

module.exports = QuestionsIndex;
