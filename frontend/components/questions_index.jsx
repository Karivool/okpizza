const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');
const QuestionIndexItem = require('./question_index_item.jsx');
const QuestionForm = require('./question_form.jsx');
const SessionStore = require('../stores/session_store.js');

const QuestionsIndex = React.createClass({
  getInitialState () {
    return { questions: this.props.questions,
             unanswered: this.props.unanswered,
             user: this.props.user };
  },

  getUnansweredQuestions() {
    this.setState({ questions: QuestionStore.unanswered() });
  },

  getAnsweredQuestions() {
    this.setState({ questions: QuestionStore.answered() });
  },

  showQuestionForm(unanswered, user, currentUser) {
    if (user.id === currentUser.id) {
      if (unanswered.length === 0 || unanswered[0] === undefined) {
        return (
          <div className="show-question-form">
            <div className="question-each">
              Sorry! You answered all the questions.<br/>
            </div>
          </div>);}
      else {
        return (
          <div className="show-question-form">
            { unanswered.map(function (question) {
                return (<QuestionForm key={question.id} unanswered={unanswered} />);
              })
            }
          </div>);
      }
    }
  },

  render: function () {
    const currentUser = typeof currentUser !== "undefined" ? currentUser : SessionStore.currentUser();

    const unanswered = this.props.unanswered;
    const questions = this.props.questions;
    const user = this.props.user;
    return (
      <div className="questions-index">
        { this.showQuestionForm(unanswered, user, currentUser) }
        <p className="questions-answered-p">Answered Questions</p>
        <div className="questions-listing">
          { questions.map(function (question) {
            return (<QuestionIndexItem key={question.id} question={question} />);
          })
        }
        </div>
      </div>
    );
  }
});

module.exports = QuestionsIndex;
