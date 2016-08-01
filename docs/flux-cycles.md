# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## User Cycles

### Users API Request Actions

* `fetchAllUsers`
  0. invoked from `UsersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/notes` is called.
  0. `receiveAllUsers` is set as the success callback.

* `createUser`
  0. invoked from new note button `onClick`
  0. `POST /api/notes` is called.
  0. `receiveSingleUser` is set as the success callback.

* `fetchSingleUser`
  0. invoked from `UserDetail` `didMount`/`willReceiveProps`
  0. `GET /api/notes/:id` is called.
  0. `receiveSingleUser` is set as the success callback.

* `updateUser`
  0. invoked from `UserForm` `onSubmit`
  0. `POST /api/notes` is called.
  0. `receiveSingleUser` is set as the success callback.

* `destroyUser`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/notes/:id` is called.
  0. `removeUser` is set as the success callback.

### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback.
  0. `User` store updates `_notes` and emits change.

* `receiveSingleUser`
  0. invoked from an API callback.
  0. `User` store updates `_notes[id]` and emits change.

* `removeUser`
  0. invoked from an API callback.
  0. `User` store removes `_notes[id]` and emits change.

### Store Listeners

* `UsersIndex` component listens to `User` store.
* `UserDetail` component listens to `User` store.


## Visitor Cycles

### Visitors API Request Actions

* `fetchAllVisitors`
  0. invoked from `VisitorsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/visitors` is called.
  0. `receiveAllVisitors` is set as the success callback.

* `createVisitor`
  0. invoked from `UsersIndexItem` `onVisit`
  0. `POST /api/visitors` is called.
  0. `receiveSingleVisitor` is set as the callback.

* `fetchSingleVisitor`
  0. invoked from `VisitorDetail` `didMount`/`willReceiveProps`
  0. `GET /api/visitors/:id` is called.
  0. `receiveSingleVisitor` is set as the success callback.

* `updateVisitor`
  0. invoked from `UsersIndexItem` `onVisit`
  0. `POST /api/visitors` is called.
  0. `receiveSingleVisitor` is set as the success callback.

### Visitors API Response Actions

* `receiveAllVisitors`
  0. invoked from an API callback.
  0. `Visitor` store updates `_visitors` and emits change.

* `receiveSingleVisitor`
  0. invoked from an API callback.
  0. `Visitor` store updates `_visitors[id]` and emits change.

* `updateVisitor`
  0. invoked from an API callback.
  0. `Visitor` store updates `modified-at` for `_visitors[id]` and emits change.

### Store Listeners

* `VisitorsIndex` component listens to `Visitor` store.



## Like Cycles

### Likes API Request Actions

* `fetchAllLikes`
  0. invoked from `LikesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/likes` is called.
  0. `receiveAllLikes` is set as the success callback.

* `createLike`
  0. invoked from `UsersIndexItem` `onSubmit`
  0. `POST /api/likes` is called.
  0. `receiveSingleLike` is set as the callback.

* `fetchSingleLike`
  0. invoked from `LikeDetail` `didMount`/`willReceiveProps`
  0. `GET /api/likes/:id` is called.
  0. `receiveSingleLike` is set as the success callback.

* `updateLike`
  0. invoked from `UsersIndexItem` `onSubmit`
  0. `POST /api/likes` is called.
  0. `receiveSingleLike` is set as the success callback.

### Likes API Response Actions

* `receiveAllLikes`
  0. invoked from an API callback.
  0. `Like` store updates `_likes` and emits change.

* `receiveSingleLike`
  0. invoked from an API callback.
  0. `Like` store updates `_likes[id]` and emits change.

* `removeLike`
  0. invoked from an API callback.
  0. `Like` store deletes `_likes[id]` and emits change.

### Store Listeners

* `LikesIndex` component listens to `Like` store.


## Message Cycles

### Messages API Request Actions

* `fetchAllMessages`
  0. invoked from `MessagesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/messages` is called.
  0. `receiveAllMessages` is set as the success callback.

* `createMessage`
  0. invoked from `UsersIndexItem` `onSubmit`
  0. `POST /api/messages` is called.
  0. `receiveSingleMessage` is set as the callback.

* `fetchSingleMessage`
  0. invoked from `MessageDetail` `didMount`/`willReceiveProps`
  0. `GET /api/messages/:id` is called.
  0. `receiveSingleMessage` is set as the success callback.

### Messages API Response Actions

* `receiveAllMessages`
  0. invoked from an API callback.
  0. `Message` store updates `_messages` and emits change.

* `receiveSingleMessage`
  0. invoked from an API callback.
  0. `Message` store updates `_messages[id]` and emits change.

### Store Listeners

* `MessagesIndex` component listens to `Message` store.
