# OKPizza

[Heroku link][heroku]

[heroku]: https://okpizza.herokuapp.com/

## Minimum Viable Product

OKPizza is a saucy web application inspired by OKCupid that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, with any luck, satisfy the following criteria:

- [x] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Profile Options
  - [ ] Ability to select from different dropdown options
  - [x] Adequate seed data to demonstrate the dropdown features
  - [ ] Adequate CSS styling
- [ ] Questions features
  - [ ] Ability to answer questions
  - [ ] Adequate seed data so there are some questions made and answered
  - [ ] Adequate CSS styling
- [ ] User browsing
  - [ ] Ability to browser other user profiles based on filters
  - [ ] Adequate seed data to demonstrate diverse user profiles
  - [ ] Adequate CSS styling
- [ ] Messaging features
  - [ ] Ability to message other logged in users
  - [ ] Adequate seed data to begin demonstration of messaging features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 T/W 6pm)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create `StaticPages` controller and root view
- [x] set up webpack & flux scaffold with skeleton files
- [x] setup `APIUtil` to interact with the API
- [x] set up flux cycle for frontend auth
- [ ] user signup/signin components
- [ ] style signin/signup components
- [x] seed users

### Phase 2: Users Model, API, and components (2 days, W1 Th/F 6pm)

**Objective:** Users can be created, edited and (maybe) destroyed through
the API.

- [x] create `User` model
- [x] seed the database with a decent amount of fun test data
- [x] CRUD API for users (`UsersController`)
- [x] jBuilder views for users
- [x] test out API interaction in the console.
- implement each user component, building out the flux loop as needed.
  - [x] `UsersIndex`
  - [ ] `UserIndexItem`
  - [ ] `ProfileEdit`
- [ ] update Users info to the DB when user updates their own profile
- [ ] style users components

### Phase 3: Questions (2 days, W2 M/T 6pm)

**Objective:** Users can answer questions to be matched up with other users.

- [ ] create `Question` model and join table
- build out API, Flux loop, and components for:
- [ ] Seeing questions you can answer
- [ ] Questions you have answered
- [ ] Users should see who others who answered questions similarly to them
- [ ] Style CSS
- [ ] Seed questions adequately and make sure they all work right

Phase 3 lets users see questions and answer them to get better matches.

### Phase 4: Messages (2 days, W2 W/Th 6pm)

**Objective:** Messages belongs to users, and can be viewed by users who are making said messages.

- [ ] create `Message` model and join table
- build out API, Flux loop, and components for:
  - [ ] Message CRUD (excluding editing and deleting perhaps)
  - [ ] Users can currently message any user they desire
  - [ ] viewing messages by user messaged
  - [ ] Users should be able to view messages in real time
- [ ] Use CSS to style new components
- [ ] Seed messages

Phase 4 adds user interaction so users can hook up and get a slice or find someone to have some slices.


### Phase 5: - Final touchups, bonus features (1 day, W2 F 6pm)

**Objective:** Ensure project is as polished as it can get at this point. If ahead of schedule, begin work on bonus features

- [ ] Ensure everything is in working order
- [ ] Make sure the bare minimum needed is present
- [ ] Good CSS
- [ ] Start on bonus features if possible!

### Bonus Features (TBD)
- [ ] Likes
- [ ] See visitors
- [ ] Block users

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
