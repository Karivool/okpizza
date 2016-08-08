const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const UserStore = require('../stores/user_store.js');
const UserActions = require('../actions/user_actions.js');
const UserIndexItem = require('./user_index_item.jsx');

const UsersIndex = React.createClass({
  getInitialState () {
    return { users: [] };
  },

  componentDidMount () {
    this.userListener = UserStore.addListener(this.getUsers);
    UserActions.fetchAllUsers();
  },

  componentWillUnmount () {
    this.userListener.remove();
  },

  getUsers() {
    this.setState({ users: UserStore.all() });
  },

  render: function() {
    
    const users = this.state.users;
    return (
      <div className="users-index">
        <Navbar />
        <div className="users-listing">
          { users.map(function (user) {
            if (user.id !== currentUser.id){
              return (<UserIndexItem key={user.id}
              user={user} />);
            }
            })
          }
        </div>
      </div>
    );
  }

});

module.exports = UsersIndex;
