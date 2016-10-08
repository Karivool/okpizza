const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require ('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app.jsx');
const LoginForm = require('./components/login.jsx');
const SignUpForm = require('./components/signup.jsx');
const UsersIndex = require('./components/users_index.jsx');
const Profile = require('./components/profile.jsx');
const AboutProfile = require('./components/about.jsx');
const QuestionsIndex = require('./components/questions_index.jsx');
const MessagesIndex = require('./components/messages_index.jsx');
const SessionStore = require('./stores/session_store.js');
const SessionActions = require('./actions/session_actions.js');
const ApiUtil = require('./util/api_util.js');

const routes = (
  <Router history= { hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ SignUpForm } onEnter={ _ensureLoggedOut } />
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ SignUpForm } />
      <Route path="/index" component={ UsersIndex } onEnter={ _ensureLoggedIn }/>
      <Route path="/profile/:userId" component={ Profile } onEnter={ _ensureLoggedIn }>
        <IndexRoute component={ AboutProfile } onEnter={ _ensureLoggedIn }/>
        <Route path="/profile/:userId/about" component={ AboutProfile } onEnter={ _ensureLoggedIn }/>
        <Route path="/profile/:userId/questions" component={ QuestionsIndex } onEnter={ _ensureLoggedIn }/>
      </Route>
      <Route path="/messages/:userId" component={ MessagesIndex } onEnter={ _ensureLoggedIn }>
      </Route>
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/');
  }
}

function _ensureLoggedOut(nextState, replace) {
  if (SessionStore.isUserLoggedIn()) {
    replace('/index');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (typeof(currentUser) !== "undefined") {
    SessionActions.takeInCurrentUser(currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(routes, root);
});
