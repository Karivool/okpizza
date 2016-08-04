const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const HashHistory = require('react-router').hashHistory;
let PropTypes = React.PropTypes;

const LoginForm = React.createClass({

  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  handleSubmit(e) {
    e.preventDefault();

    // if (this.props.location.pathname === "/login") {
    //   SessionActions.logIn(this.state);
    // } else {
    //   SessionActions.signUp(this.state);
    // }
  },

  errors() {
    const errors = ErrorStore.errors(this.formType());
    const messages = errors.map ( (errorMessage, idx) => {
      return <li key={ idx }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    // return this.props.location.pathname.slice(1);
  },

  inputHandler(property, e) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    let entryType;
    if (this.formType() === "login") {
      entryType = <Link to="/signup">Sign Up</Link>;
    } else {
      entryType = <Link to="/login">Log In</Link>;
    }

    return (
      <div className="login-form-container">
        <form onSubmit={ this.handleSubmit } className="login-form-box">
          { this.formType() }
          <br></br>
          { entryType }

          { this.errors () }
          <div className="login-form">
            <br></br>
            <label> Username:
              <input type="text" className="login-input"
                value={ this.state.username }
                onChange={ this.inputHandler("username") }/>
            </label>
            <br></br>
            <label> Password:
              <input type="password" className="login-input"
                value={ this.state.password }
                onChange={ this.inputHandler("password") }/>
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
