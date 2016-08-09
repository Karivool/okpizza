const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const Button = require('react-button');

const LoginForm = require('./login.jsx');
const SignUpForm = require('./signup.jsx');
const UsersIndex = require('./usersindex.jsx');
const Navbar = require('./navbar.jsx');
const Profile = require('./profile.jsx');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

window.current_user = SessionStore.currentUser;

const App = React.createClass({

  getInitialState() {
    return { signIn: false };
  },

  componentDidMount() {
    this.handleListeners();
    this._onChange();
  },

  handleListeners() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onChange() {
    this.forceUpdate();
  },

  showFormLogin() {
    this.state.signIn = !this.state.signIn;
    this._onChange();
  },

  guestSignIn() {
    SessionActions.logIn({username: "Bungh0", password: "lma0lma0umad"});
  },

  sessionRenders() {
    const route = this.props.routes[this.props.routes.length - 1];
    if (SessionStore.isUserLoggedIn()) {
      if (route.path === "/profile")
      {
        window.viewedUser = window.currentUser.username;

        return (
          <div className="profile-page">
            <Profile />
          </div>
        );
      } else if (route.path === "/profile/:username") {
        window.viewedUser = this.props.params.username;
        return (
          <div className="profile-page">
            <Profile params={this.props.params} />
          </div>
        );

      } else {
        return (
          <div className="mainpage-render">
            <UsersIndex /><br/>
          </div>
        );
      }
    } else {
      if (this.state.signIn === false) {
        return (
          <div className="homepage-render">
            <div className="splash-page-1">
              <header className="homepage-header">
                <div className="main-page-logo">
                  <img src={window.okPizzaLogo}></img>
                </div>
                <div className="main-page-login">
                  <span className="mp-su">Have an account?  </span>
                  <button onClick={this.showFormLogin} className="sign-up-link" to="#/login">Sign In</button>
                  <button onClick={this.guestSignIn} className="sign-up-button">Guest</button>
                </div>
              </header>
              <div className="main-page-slogan">
                Find the Pizza of Your Dreams.
              </div>
              <SignUpForm />
            </div>
            <div className="saucy-reasons group">
              <div className="saucy-reason-each">
                <img src={window.saucyPic1} className="saucy-image"></img>
                <p className="saucy-texts">
                  Sign up in a flash and browse saucy profiles, free! What could be better than free pizza?
                </p>
                <br></br>
              </div>
              <div className="saucy-reason-each">
                <img src={window.saucyPic2} className="saucy-image"></img>
                <p className="saucy-texts">
                  Whether you are in for a one slice night, commitment to an entire box or a pizza party, we got you covered.
                </p>
                <br></br>
              </div>
              <div className="saucy-reason-each">
                <img src={window.saucyPic3} className="saucy-image"></img>
                <p className="saucy-texts">
                  Amazing pizzas and humans come together, bringing you back, hungry for more.
                </p>
                <br></br>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="homepage-render">
            <div className="splash-page-1">
              <header className="homepage-header">
                <div className="main-page-logo">
                  <img src={window.okPizzaLogo}></img>
                </div>
                <div className="main-page-login">
                  <span className="mp-su">Dont Have an Account?</span>
                  <button onClick={this.showFormLogin} className="sign-up-link" to="#/">Sign Up</button>
                  <button onClick={this.guestSignIn} className="sign-up-button">Guest</button>
                </div>
              </header>
              <LoginForm />
            </div>
          </div>
        );
      }
    }
  },

  render() {
    return (
      <div className="sessionRender">
        { this.sessionRenders() }
      </div>
    );
  }
});

module.exports = App;
