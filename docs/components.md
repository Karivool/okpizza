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
    * UsersShow
  * **Questions**
    * QuestionsIndex
  * **Visitors**
    * VisitorsIndex
  * **Profile**
    * UsersShow


Profile would lead to your own UsersShow.

## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** /login
  * **component** `SignupForm` **path:** /signup
  * **component:** `UsersIndex` **path:** index
    * **component:** `UserShow` **path:** `users/:userId`
  * **component:** `QuestionIndex` **path:** `questions`
  * **component:** `MessagesIndex` **path:** `messages/:userId`
    * **component:** `MessageDetail` **path:** `messages/message/:userId`
