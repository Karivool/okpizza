const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;

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
      gender: "Milady",
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

  guestSignIn() {
    SessionActions.logIn({username: "Bungh0", password: "lma0lma0umad"});
  },

  errors() {
    const errors = ErrorStore.errors(this.formType());
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
          <header className="homepage-header">
            <div className="main-page-logo">
              <img src={window.okPizzaLogo}></img>
            </div>
            <div className="main-page-login">
              <span className="mp-su">Have an account?  </span>
              <a href="#/login" className="sign-up-link">Sign In</a>
              <button onClick={this.guestSignIn} className="sign-up-button">Guest</button>
            </div>
          </header>
          <div className="main-page-slogan">
            Find the Pizza (or Pizza Lover) of Your Dreams.
          </div>
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
                  Birthday
                  <input type="date" className="login-input"
                    placeholder="YYYYMMDD"
                    value={ this.state.birthdate }
                    onChange={ this.inputHandler("birthdate") }/>
                </label>
                <label>
                  City
                  <input type="text" className="login-input"
                    placeholder="Pizzburgh"
                    value={ this.state.city_name }
                    onChange={ this.inputHandler("city_name") }/>
                </label>
                <label>
                  State
                  <input type="text" className="login-input"
                    placeholder="Pizzavanyia"
                    value={ this.state.state_name }
                    onChange={ this.inputHandler("state_name") }/><br/>
                </label>
                <label>
                  E-mail
                  <input type="text" className="login-input"
                    placeholder="e.g. example@url.com"
                    value={ this.state.email }
                    onChange={ this.inputHandler("email") }/>
                </label>
                <label>
                  Username
                  <input type="text" className="login-input"
                    placeholder="Enter your username"
                    value={ this.state.username }
                    onChange={ this.inputHandler("username") }/>
                </label>
                <label>
                  Password
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
        <div className="saucy-reasons group">
          <div className="saucy-reason-each">
            <img src="https://s3.amazonaws.com/okpizza-dev/attract-1.png" className="saucy-image"></img>
            <p className="saucy-texts">
              Sign up in a flash and browse saucy profiles, free! What could be better than free pizza?
            </p>
            <br></br>
          </div>
          <div className="saucy-reason-each">
            <img src="https://s3.amazonaws.com/okpizza-dev/attract-2.png" className="saucy-image"></img>
            <p className="saucy-texts">
              Whether you are in for a one slice night, commitment to an entire box or a pizza party, we got you covered.
            </p>
            <br></br>
          </div>
          <div className="saucy-reason-each">
            <img src="https://s3.amazonaws.com/okpizza-dev/attract-3.png" className="saucy-image"></img>
            <p className="saucy-texts">
              Amazing pizzas and humans come together, bringing you back, hungry for more.
            </p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SignUpForm;
