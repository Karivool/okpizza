const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');

const UserIndexItem = require('./user_index_item.jsx');
const UserStore = require('../stores/user_store.js');

const Navbar = React.createClass({

  getInitialState() {
    return {
      profileMenuShown: false,
      messageMenuShown: false
    };
  },

  _signOut() {
    SessionActions.signOut();
  },

  showMessageMenu() {
    let menuShown = this.state.messageMenuShown;
    if (menuShown) {
      $('.message-dropdown-menu').css({'visibility':'hidden', 'opacity':0});
      this.setState({messageMenuShown: false});
      return;
    } else {
      $('.message-dropdown-menu').css({'visibility':'visible', 'opacity':1});
      this.setState({messageMenuShown: true, profileMenuShown: false});
    }
  },

  showProfileMenu() {
    let menuShown = this.state.profileMenuShown;
    if (menuShown) {
      $('.profile-dropdown-menu').css({'visibility':'hidden', 'opacity':0});
      this.setState({profileMenuShown: false});
      return;
    } else {
      $('.profile-dropdown-menu').css({'visibility':'visible', 'opacity':1});
      this.setState({profileMenuShown: true, messageMenuShown: false});
    }
  },

  seeAll() {

  },

  render() {
    const user = SessionStore.currentUser();

    return (
      <div className="navbar">
        <div className="mini-logo">
          <a href="#/index"><img src={okPLogo}/></a>
        </div>
        <div className="user-nav-detail">
          <img className="profile-message" onClick={this.showMessageMenu} src="https://s3.amazonaws.com/okpizza-dev/message-unhover.png"></img>
          <img className="profile-mini-pic" onClick={this.showProfileMenu} src={ user.image_url }/>
          <div className="profile-dropdown-menu">
            <div className="profile-click">
              <Link to={`/profile/${user.id}`} className="profile-button">Profile</Link>
            </div>
            <div className="sign-out">
              <button onClick={this._signOut} className="sign-out-button">Log out</button>
            </div>
          </div>
          <div className="message-dropdown-menu">
            <p className="message-inbox-text">Inbox</p>
            <div className="message-click">
            </div>
            <div className="message-see-all">
              <Link to={`/messages/${user.id}`} onClick={this.seeAll} className="message-see-all-text">See all</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Navbar;
