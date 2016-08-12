const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');

const QuestionForm = React.createClass({
  getInitialState () {
    return { questions: this.props.questions,
             user: this.props.user };
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this.getAnsweredQuestions);
    QuestionActions.fetchAnsweredQuestions(this.props.user.id);
    this._onChange();
  },

  componentWillUnmount () {
    this.questionListener.remove();
  },

  componentWillReceiveProps () {
  },

  getQuestions() {
    this.setState({ questions: QuestionStore.all() });
  },

  getAnsweredQuestions() {
    this.setState({ questions: QuestionStore.answered() });
  },

  _onChange() {
    this.forceUpdate();
  },

  render: function () {
    const questions = this.props.questions;
    const user = this.props.user;
    return (
      <div className="questions-index">
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

module.exports = QuestionForm;
