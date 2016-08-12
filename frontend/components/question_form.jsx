const React = require('react');
const Link = require('react-router').Link;
const QuestionStore = require('../stores/question_store.js');
const hashHistory = require('react-router').hashHistory;

const QuestionForm = React.createClass({

  render () {
    const unanswered = this.props.unanswered[0];
    const answers = unanswered.answers;

    return (
      <div className="question-form">
        <div className="question-asked">
          { unanswered.question }<br/>
          <div className="choices-given">
            { answers.map(function (answer, idx) {
              return (
                <div>
                <input type="radio" name="radio-group" className="radio-button" id={ "answer_" + idx } key={idx} false>
                </input>
                <label className="unanswered-choice" htmlFor={ "answer_" + idx}>
                  { answer.answer[0] }
                </label><br/>
                </div>
              );
            })
          }
          </div>
        </div>
        <p/>
        <button className="answer-button">Answer</button>
      </div>
    );
  }
});

module.exports = QuestionForm;
