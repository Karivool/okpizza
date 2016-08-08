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
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the success callback.
  0. `This should eventually be obsolete. We won't want ALL users.`

* `fetchFilteredUsers`
  0. invoked from `UsersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users` is called.
  0. `receiveFilteredUsers` is set as the success callback.

* `fetchSingleUser`
  0. invoked from `UserDetail` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id` is called.
  0. `receiveSingleUser` is set as the success callback.

* `updateUser`
  0. invoked from `UserForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveSingleUser` is set as the success callback.

* `destroyUser`
  0. invoked from delete user button `onClick`
  0. `DELETE /api/users/:id` is called.
  0. `removeUser` is set as the success callback.

### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback.
  0. `User` store updates `_users` and emits change.
  0. make eventually obsolete.

* `receiveFilteredUsers`
  0. invoked from an API callback.
  0. `User` store updates `_users` and emits change.

* `receiveSingleUser`
  0. invoked from an API callback.
  0. `User` store updates `_users[id]` and emits change.

* `removeUser`
  0. invoked from an API callback.
  0. `User` store removes `_users[id]` and emits change.

### Store Listeners

* `UsersIndex` component listens to `User` store.
* `UserDetail` component listens to `User` store.

## Question Cycles

### Questions API Request Actions

* `fetchAllQuestions`
  0. invoked from `QuestionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/questions` is called.
  0. `receiveAllQuestions` is set as the success callback.

* `fetchFilteredQuestions`
  0. invoked from `QuestionsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/questions` is called.
  0. `receiveFilteredQuestions` is set as the success callback.

* `createQuestion`
  0. invoked from new user button `onClick`
  0. `POST /api/questions` is called.
  0. `receiveSingleQuestion` is set as the success callback.

* `fetchSingleQuestion`
  0. invoked from `QuestionDetail` `didMount`/`willReceiveProps`
  0. `GET /api/questions/:id` is called.
  0. `receiveSingleQuestion` is set as the success callback.

### Questions API Response Actions

* `receiveAllQuestions`
  0. invoked from an API callback.
  0. `Question` store updates `_questions` and emits change.
  0. make eventually obsolete.

* `receiveFilteredQuestions`
  0. invoked from an API callback.
  0. `Question` store updates `_questions` and emits change.

* `receiveSingleQuestion`
  0. invoked from an API callback.
  0. `Question` store updates `_questions[id]` and emits change.

### Store Listeners

* `QuestionsIndex` component listens to `Question` store.
* `QuestionDetail` component listens to `Question` store.



## Message Cycles

### Messages API Request Actions

* `fetchAllMessages`
  0. invoked from `MessagesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/messages` is called.
  0. `receiveAllMessages` is set as the success callback.
  0. this should be set to fetch messages only from two specific users.

* `createMessage`
  0. invoked from `UsersIndexItem` `onSubmit`
  0. `POST /api/messages` is called.
  0. `receiveSingleMessage` is set as the callback.

* `fetchSingleMessage`
  0. invoked from `MessageDetail` `didMount`/`willReceiveProps`
  0. `GET /api/messages/:id` is called.
  0. `receiveSingleMessage` is set as the success callback.
  0. this can be used for showing the most recent messages for each user.

### Messages API Response Actions

* `receiveAllMessages`
  0. invoked from an API callback.
  0. `Message` store updates `_messages` and emits change.

* `receiveSingleMessage`
  0. invoked from an API callback.
  0. `Message` store updates `_messages[id]` and emits change.

### Store Listeners

* `MessagesIndex` component listens to `Message` store.
