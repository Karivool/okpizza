const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const HashHistory = require('react-router').hashHistory;

const SignUpForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  // let define context type you want => points to an object

  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/index");
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    SessionActions.signUp(this.state);
  },

  errors() {
    // const errors = ErrorStore.errors(this.formType());
    // const messages = errors.map ( (errorMessage, idx) => {
    //   return <li key={ idx }>{ errorMsg }</li>;
    // });

    // return <ul>{ messages }</ul>;
  },

  inputHandler(property, e) {
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    // let entryType = <Link to="/signup">Sign Up</Link>;

    return (
      <div className="login-form-container">
        <form onSubmit={ this.handleSubmit } className="login-form-box">
          <br>

          </br>
          { this.errors () }
          <div className="login-form">
            <br>

            </br>
            I am a
            <label>
              <input type="text" className="login-input"
                placeholder="Pizzasexual"
                value={ this.state.orientation }
                onChange={ this.inputHandler("orientation") }/>
            </label>
            <label>
              <input type="text" className="login-input"
                placeholder="Human"
                value={ this.state.gender }
                onChange={ this.inputHandler("gender") }/>
            </label>
            <br>

            </br>
            <label>
              <input type="text" className="login-input"
                placeholder="MMDDYYYY"
                value={ this.state.birthdate }
                onChange={ this.inputHandler("birthdate") }/>
            </label>
            <label>
              <input type="text" className="login-input"
                placeholder="Pizzburgh"
                value={ this.state.city_name }
                onChange={ this.inputHandler("city_name") }/>
            </label>
            <label>
              <input type="text" className="login-input"
                placeholder="Pizzavanyia"
                value={ this.state.state_name }
                onChange={ this.inputHandler("state_name") }/>
            </label>
            <label>
              <input type="text" className="login-input"
                placeholder="e.g. example@url.com"
                value={ this.state.email }
                onChange={ this.inputHandler("email") }/>
            </label>
            <br>


            </br>
            <label>
              <input type="text" className="login-input"
                placeholder="Enter your username"
                value={ this.state.username }
                onChange={ this.inputHandler("username") }/>
            </label>
            <label>
              <input type="password" className="login-input"
                placeholder="Password"
                value={ this.state.password }
                onChange={ this.inputHandler("password") }/>
            </label>
            <input type="submit" value="Let's go" />
          </div>
        </form>
      </div>
    );
  }

});

module.exports = SignUpForm;
