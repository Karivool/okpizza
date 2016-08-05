const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const LoginForm = require('./login.jsx');
const SignUpForm = require('./signup.jsx');
const UsersIndex = require('./usersindex.jsx');
const Navbar = require('./navbar.jsx');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const Button = require('react-button');

const App = React.createClass({

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
    console.log("This shouldn't work unless the button is clicked");
  },

  guestSignIn() {
    SessionActions.logIn({username: "Bungh0", password: "lma0lma0umad"});
  },

  sessionRenders() {
    // debugger
    if (SessionStore.isUserLoggedIn()) {
      return (<UsersIndex />);
    } else {
      let signupTheme = {
        style: { color: 'white' },
      };
      return (
        <div className="homepage-render">
          <div className="splash-page-1">
            <header className="homepage-header">
              <div className="main-page-logo">
                <img src={window.okPizzaLogo}></img>
              </div>
              <div className="main-page-login">
                <span className="mp-su">Have an account?  </span>
                <Link className="sign-up-button" to="#/login">Sign In</Link>
                <Button theme={ signupTheme } href="#/login" onClick={this.showFormLogin} className="sign-up-button">Sign in</Button>
                <button onClick={this.guestSignIn} className="sign-up-button">Guest</button>
              </div>
            </header>
            <div className="main-page-slogan">
              Find the Pizza of Your Dreams.
            </div>
            <SignUpForm />
          </div>
          <div className="saucy-reasons">
            PIC1
            Sign up in a flash and browse saucy profiles, free! What could be better than free pizza?
            <br></br>
            PIC2
            Whether you are in for a one slice night, commitment to an entire box or a pizza party, we got you covered.
            <br></br>
            PIC3
            Amazing pizzas and humans come together, bringing you back, hungry for more.
            <br></br>
          </div>
        </div>
      )
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
