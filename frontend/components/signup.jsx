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
      password: "",
      orientation: "Pizzasexual",
      gender: "Milady"
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
    console.log(property + " property handled by inputHandler");
    return (e) => this.setState({[property]: e.target.value});
  },

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={ this.handleSubmit } className="login-form-box">
          <br>
          </br>
          { this.errors () }
          <div className="login-form">
            <br>
            </br>
            <span className="big-form-span">I am a</span>
              <div className="login-input-1">
                <select className="signup-1" onChange={this.inputHandler('orientation')}>
                  <option value={ this.state.orientation }>Pizzasexual</option>
                  <option value={ this.state.orientation }>Humansexual</option>
                  <option value={ this.state.orientation }>Piesexual</option>
                  <option value={ this.state.orientation }>Piecurious</option>

                </select>
                <select className="signup-1" onChange={this.inputHandler('gender')}>
                  <option value={ this.state.gender }>Milady</option>
                  <option value={ this.state.gender }>Milord</option>
                  <option value={ this.state.gender }>Pizza</option>
                  <option value={ this.state.gender }>Transgrainder</option>
                  <option value={ this.state.gender }>Non-pienary</option>
                </select>
              </div>
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
