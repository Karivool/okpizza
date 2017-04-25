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

### Messages

- `GET /api/messages/:id`
  - Retrieves messages of a specific user
- `POST /api/messages`

### Matches

- `GET /api/users/:id`
  - Retrieves a specific user by ID
- `PATCH /api/users/:id`
  - Update specific user with edited params
- `DELETE /api/users/:id`
  - Delete users from database. Not the highest priority for now.
