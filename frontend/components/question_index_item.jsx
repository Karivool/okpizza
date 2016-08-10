const React = require('react');
const Link = require('react-router').Link;
const QuestionActions = require('../actions/question_actions.js');
const hashHistory = require('react-router').hashHistory;

const QuestionsIndexItem = React.createClass({

  render () {
    const question = this.props.question;
    
    return (
      <li className="question-each">
        <div className="question-asked">
          { question.question }<br/>
        </div>
        <div className="answers-given">
          { question.ans_one }<br/>
          { question.ans_two }<br/>
          { question.ans_three }<br/>
          { question.ans_four }<br/>
        </div>
      </li>
    );
  }
});

module.exports = QuestionsIndexItem;
