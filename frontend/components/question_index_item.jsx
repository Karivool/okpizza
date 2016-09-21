const React = require('react');
const Link = require('react-router').Link;
const QuestionStore = require('../stores/question_store.js');
const hashHistory = require('react-router').hashHistory;

const QuestionsIndexItem = React.createClass({
  componentWillMount() {
    this.counter = 0;
  },

  componentWillReceiveProps() {
    console.log(this.counter);
    this.counter++;
  },

  render () {
    const question = this.props.question;
    const answers = question.answers;

    return (
      <ul className="question-each">
        <div className="question-asked">
          { question.question }<br/>
        </div>
        <div className="answers-given">
          { answers.map(function (answer, idx) {
              if (answer.selected) {
                return (
                  <li className="chosen-answer" key={idx}>
                    { answer.answer } 🍕
                  </li>
                );
              } else {
                return (
                  <li className="unchosen-answer" key={idx}>
                    { answer.answer }
                  </li>
                );
              }
            })
          }
        </div>
      </ul>
    );
  }
});

module.exports = QuestionsIndexItem;
