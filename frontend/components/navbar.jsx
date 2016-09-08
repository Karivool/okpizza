const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');

const UserIndexItem = require('./user_index_item.jsx');
const UserStore = require('../stores/user_store.js');

const Navbar = React.createClass({

  getInitialState() {
    return {
      menuShown: false
    };
  },

  _signOut() {
    SessionActions.signOut();
  },

  showMenu() {
    let menuShown = this.state.menuShown;
    if (menuShown) {
      $('.dropdown-menu').css({'visibility':'hidden', 'opacity':0});
      this.state.menuShown = false;
      return;
    } else {
      $('.dropdown-menu').css({'visibility':'visible', 'opacity':1});
      this.state.menuShown = true;
    }
  },

  render() {
    const user = currentUser;

    return (
      <div className="navbar">
        <div className="mini-logo">
          <a href="#/index"><img src={okPLogo}/></a>
        </div>
        <div className="user-nav-detail" onClick={this.showMenu}>
          <img className="profile-mini-pic" src={ user.image_url }/>
          <div className="dropdown-menu">
            <div className="profile-click">
              <Link to={`/profile/${user.id}`} className="profile-button">Profile</Link>
            </div>
            <div className="sign-out">
              <button onClick={this._signOut} className="sign-out-button">Log out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
