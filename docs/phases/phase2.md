# Phase 2: Users Model, API, and components (2 days, W1 Th/F 6pm)

## Rails
### Models
* User

### Controllers
* Api::UsersController (create, destroy, index, show, update)

### Views
* users/index.json.jbuilder
* users/show.json.jbuilder

## Flux
### Views (React Components)
* UsersIndex
  - UsersShow
* UserForm

### Stores
* User

### Actions
* `ApiActions.receiveAllUsers`
* `ApiActions.receiveSingleUser`
* `ApiActions.deleteUser`
* `UserActions.fetchAllUsers`
* `UserActions.fetchFilteredUsers`
* `UserActions.fetchSingleUser`
* `UserActions.createUser`
* `UserActions.editUser`
* `UserActions.destroyUser`

### ApiUtil
* `ApiUtil.fetchAllUsers`
* `ApiUtil.fetchFilteredUsers`
* `ApiUtil.fetchSingleUser`
* `ApiUtil.createUser`
* `ApiUtil.editUser`
* `ApiUtil.destroyUser`

## Gems/Libraries
