# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

- Users and Sessions in this case is your standard log in/log out

### Matches

- `GET /api/users`
  - Retrieves all users in database
- `POST /api/users`
  - Adds a new user to the database
- `GET /api/users/:id`
  - Retrieves a specific user by ID
- `PATCH /api/users/:id`
  - Update database of users with edited params
- `DELETE /api/users/:id`
  - Delete users from database. Not the highest priority for now.

### Likes

- `GET /api/likes`
  - Retrieves all likes in database
- `POST /api/likes`
- `GET /api/likes/:id`
- `PATCH /api/likes/:id`
- `DELETE /api/likes/:id/user`
  - Deletes a like made on a specific user
- `GET /api/likes/:id/user`
  - Gets all likes a specific user has made

### Visitors

- This feature may have to come later
- `GET /api/visitors`
  - Gets all user pages visited
- `POST /api/visitors`
- `GET /api/visitors/:id`
  - Gets all visits a user has by ID
- `GET /api/visitors/:id/user`
  - Gets all visits made to a specific user

### Profile

- Should be able to reuse what was used for Matches, just for one user
- `GET /api/users/:id`
  - Retrieves a specific user by ID
- `PATCH /api/users/:id`
  - Update a specific user's profile params
- `DELETE /api/users/:id`
  - Delete a specific user's profile
