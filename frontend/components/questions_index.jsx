const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const QuestionStore = require('../stores/question_store.js');
const QuestionActions = require('../actions/question_actions.js');
const QuestionIndexItem = require('./question_index_item.jsx');

const QuestionsIndex = React.createClass({
  getInitialState () {
    return { questions: [] };
  },

  componentDidMount () {
    this.questionListener = QuestionStore.addListener(this.getQuestions);
    QuestionActions.fetchAllQuestions();
    this._onChange();
  },

  componentWillUnmount () {
    this.questionListener.remove();
  },

  getQuestions() {
    this.setState({ questions: QuestionStore.all() });
  },

  _onChange() {
    this.forceUpdate();
  },

  render: function () {
    const questions = this.state.questions;
    return (
      <div className="questions-index">
        LOL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<p/>
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<p/>
        XDDDDDDDDDDDDDDD
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
