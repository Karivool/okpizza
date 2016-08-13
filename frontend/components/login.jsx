const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      username: "",
      password: "",
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
      this.context.router.push("/index");
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    SessionActions.logIn(this.state);
  },

  errors() {
    const errors = ErrorStore.errors(this.inputHandler);
    const messages = errors.map ( (errorMessage, idx) => {
      return <li key={ idx }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  inputHandler(property, e) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {

    return (
      <div className="homepage-render">
        <div className="splash-page-1">
          <div className="login-form-container">
            <header className="homepage-header">
              <div className="main-page-logo">
                <img src={window.okPizzaLogo}></img>
              </div>
              <div className="main-page-login">
                <span className="mp-su">Need an account?  </span>
                <a href="#/signup" className="sign-up-link">Sign Up</a>
                <button onClick={this.guestSignIn} className="sign-up-button">Guest</button>
              </div>
            </header>
            <form onSubmit={ this.handleSubmit } className="login-form-box">
              <br></br>

              { this.errors () }
              <div className="login-form">
                <br></br>
                <label>
                  <input type="text" className="login-input"
                    placeholder="Your username"
                    value={ this.state.username }
                    onChange={ this.inputHandler("username") }/>
                </label>
                <br></br>
                <label>
                  <input type="password" className="login-input"
                    placeholder="Password"
                    value={ this.state.password }
                    onChange={ this.inputHandler("password") }/>
                </label>
                <br></br>
                <input type="submit"
                  className="submit-button"
                  value="Let's go"
                  onClick = { this.handleSubmit } />
              </div>
            </form>
          </div>
      </div>
    </div>
    );
  }

});

module.exports = LoginForm;
