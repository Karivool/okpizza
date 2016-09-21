const React = require('react');
const Link = require('react-router').Link;
const QuestionActions = require('../actions/question_actions.js');
const QuestionStore = require('../stores/question_store.js');
const hashHistory = require('react-router').hashHistory;

const QuestionForm = React.createClass({
  // getInitialState () {
  //   return({
  //     answer: null,
  //   });
  // },

  componentWillMount() {
    this.setState({
      answer: null
    });
  },

  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.answer !== null) {
      QuestionActions.submitAnswer(
        this.state.answer,
        this.props.unanswered.id
      );
      QuestionActions.fetchUnansweredQuestions();
      QuestionActions.fetchAnsweredQuestions(this.props.userId);

      this.setState({
        answer: null
      });
    }
  },

  inputHandler(property, event) {
    this.setState({
      [property]: event.target.value,
    });
  },

  renderAnswerChoice(answer, idx) {
    return (
      <div key={ idx }>
        <input
          type="radio"
          name="radio-group"
          className="radio-button"
          id={ "answer_" + idx }
          key={ idx }
          value={ idx }
          onChange={ this.inputHandler.bind(this, "answer") }
        >
        </input>
        <label className="unanswered-choice" htmlFor={ "answer_" + idx }>
          { answer.answer[0] }
        </label><br/>
      </div>
    );
  },

  render () {
    const unanswered = this.props.unanswered;
    const answers = unanswered.answers;

    return (
      <div className="question-form">
        <form>
          <div className="question-asked">
            { unanswered.question }<br/>
            <div className="choices-given">
              { answers.map((answer, idx) => this.renderAnswerChoice(answer, idx)) }
            </div>
          </div>
          <p/>
          <button
            onClick={ this.handleSubmit }
            className="answer-button"
          >
            Answer
          </button>
        </form>
      </div>
    );
  }
});

module.exports = QuestionForm;
