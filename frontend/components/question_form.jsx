const React = require('react');
const Link = require('react-router').Link;
const QuestionActions = require('../actions/question_actions.js');
const QuestionStore = require('../stores/question_store.js');
const hashHistory = require('react-router').hashHistory;

const QuestionForm = React.createClass({
  getInitialState () {
    return({
      answer: null,
      chosen: true
    });
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmit(e) {
    e.preventDefault();
    this.state.chosen = !this.state.chosen;
    if (this.state.answer !== null) {
      QuestionActions.submitAnswer(this.state.answer, this.props.unanswered[0].id);
      QuestionActions.fetchUnansweredQuestions(currentUser.id);
      QuestionActions.fetchAnsweredQuestions(currentUser.id);
      this.state.answer = null;
      this.state.answer = 0;
      this.state.answer = null;
      this.forceUpdate();
    }
  },

  inputHandler(property, e) {
    return (e) => this.setState({[property]:
    e.target.value});
  },

  render () {
    const unanswered = this.props.unanswered[0];
    const answers = unanswered.answers;
    const inputHandler = this.inputHandler;

    return (
      <div className="question-form">
        <form onSubmit={ this.handleSubmit }>
          <div className="question-asked">
            { unanswered.question }<br/>
            <div className="choices-given">
              { answers.map(function (answer, idx) {
                return (
                  <div key={idx}>
                    <input type="radio"
                          name="radio-group"
                          className="radio-button"
                          id={ "answer_" + idx }
                          key={ idx }
                          value={ idx }
                          onChange={ inputHandler("answer") }
                          false>
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
        </form>
      </div>
    );
  }
});

module.exports = QuestionForm;
