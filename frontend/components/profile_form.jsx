const React = require('react');
const Link = require('react-router').Link;
const Navbar = require('./navbar.jsx');
const UserStore = require('../stores/user_store.js');
const UserActions = require('../actions/user_actions.js');
const UserIndexItem = require('./user_index_item.jsx');

const ProfileForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({
      imageFile: null,
      imageUrl: null
    });
  },

  updateFile: function (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result }.bind(this));
      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  },

  handleSubmit: function (e) {
    let formData = new FormData();
    formData.append("user[image]", this.state.imageFile);
    ApiUtil.editProfile(this.state);
  },

  render: function () {

    return(
      <div>
        User Profile Info

        <input type="file" onChange={ this.updateFile }/>
        <img src={this.state.imageUrl}/>
      </div>
    );
  }

});

module.exports = ProfileForm;
