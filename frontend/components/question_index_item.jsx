const React = require('react');
const Link = require('react-router').Link;
const QuestionActions = require('../actions/question_actions.js');
const hashHistory = require('react-router').hashHistory;

const QuestionsIndexItem = React.createClass({

  render () {
    const question = this.props.question;

    return (
      <ul className="question-each">
        <div className="question-asked">
          { question.question }<br/>
        </div>
          <li className="answers-given">{ question.ans_one }<br/></li>
          <li className="answers-given">{ question.ans_two }<br/></li>
          <li className="answers-given">{ question.ans_three }<br/></li>
          <li className="answers-given">{ question.ans_four }<br/></li>
      </ul>
    );
  }
});

module.exports = QuestionsIndexItem;
