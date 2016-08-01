## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
  * **LoginForm**
  * **SignupForm**
  * **UsersIndex**
    * Search
    * UsersIndexItem
  * **Visitors**
    * VisitorsIndex
  * **Likes**
    * LikesIndex
  * **Messages**
    * MessageDetail
  * **Profile**
    * UsersIndexItem


Profile would lead to a specific UsersIndexItem, but for yourself.

## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `UsersIndex` **path:** index
    * **component:** `UserDetail` **path:** `users/:userId`
  * **component:** `VisitorsIndex` **path:** `visitors/:userId`
  * **component:** `LikesIndex` **path:** `likes/:userId`
  * **component:** `MessagesIndex` **path:** `messages/:userId`
    * **component:** `MessageDetail` **path:** `messages/message/:userId`
