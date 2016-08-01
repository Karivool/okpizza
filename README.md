# OKPizza

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://okpizza.herokuapp.com/

## Minimum Viable Product

OKPizza is a web application inspired by OKCupid that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Profile Options
  - [ ] Ability to select from different dropdown options
  - [ ] Adequate seed data to demonstrate the dropdown features
  - [ ] Adequate CSS styling
- [ ] User browsing
  - [ ] Ability to browser other user profiles based on filters
  - [ ] Adequate seed data to demonstrate diverse user profiles
  - [ ] Adequate CSS styling
- [ ] Messaging features
  - [ ] Ability to message other logged in users
  - [ ] Adequate seed data to begin demonstration of messaging features
  - [ ] Adequate CSS styling
- [ ] Likes features
  - [ ] Ability to like other users
  - [ ] Adequate seed data so there are some users already liked
  - [ ] Adequate CSS styling
- [ ] Visitors features
  - [ ] Ability to see who visited your page
  - [ ] Adequate seed data so some users have already made visits
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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication backend setup
- [ ] create `StaticPages` controller and root view
- [ ] set up webpack & flux scaffold with skeleton files
- [ ] setup `APIUtil` to interact with the API
- [ ] set up flux cycle for frontend auth
- [ ] user signup/signin components
- [ ] style signin/signup components
- [ ] seed users

### Phase 2: Users Model, API, and components (2 days, W1 Th/F 6pm)

**Objective:** Users can be created, edited and (maybe) destroyed through
the API.

- [ ] create `User` model
- [ ] seed the database with a decent amount of fun test data
- [ ] CRUD API for users (`UsersController`)
- [ ] jBuilder views for users
- [ ] test out API interaction in the console.
- implement each user component, building out the flux loop as needed.
  - [ ] `UsersIndex`
  - [ ] `UserIndexItem`
  - [ ] `ProfileEdit`
- [ ] update Users info to the DB when user updates their own profile
- [ ] style users components

### Phase 3: Messages (2 days, W2 M/T 6pm)

**Objective:** Messages belongs to users, and can be viewed by users who are making said messages.

- [ ] create `Message` model and join table
- build out API, Flux loop, and components for:
  - [ ] Message CRUD (excluding editing and deleting perhaps)
  - [ ] Users can currently message any user they desire
  - [ ] viewing messages by user messaged
  - [ ] Users should be able to view messages in real time
- [ ] Use CSS to style new components
- [ ] Seed messages

Phase 3 adds user interaction so users can hook up and get a slice or find someone to have some slices.

### Phase 4: Likes (1 day, W2 W 6pm)

**Objective:** Users can see who liked their profile.

- [ ] create `Visitor` model and join table
- build out API, Flux loop, and components for:
  - [ ] Seeing who liked your profile
  - [ ] Liked time should be updated by 'modified-at'
  - [ ] Users should see who liked them, who they liked, and mutual likes
- [ ] Style CSS to display all the different like styles
- [ ] Seed likes adequately and make sure they all work right

Phase 4 lets users see who likes them so they can have an idea of who to message

### Phase 5: Visitors (1 day, T W 6pm)

**Objective:** Users can see who visited their page, as well as be tracked if they visit another person's page

- [ ] create `Visitor` model and join table
- build out API, Flux loop, and components for:
  - [ ] Seeing who visited your page
  - [ ] Being logged every time you visit a user's page
  - [ ] Visited time should be updated by 'modified-at'
- [ ] Style CSS to nicely display both visited/visited by
- [ ] Seed visited/visited by adequately

Phase 5 lets you see who visited your page but didn't message or like you, giving you hints at something possibly being wrong

### Phase 6: - Final touchups, bonus features (1 day, W2 F 6pm)

**Objective:** Ensure project is as polished as it can get at this point. If ahead of schedule, begin work on bonus features

- [ ] Ensure everything is in working order
- [ ] Make sure the bare minimum needed is present
- [ ] Good CSS
- [ ] Start on bonus features if possible!

### Bonus Features (TBD)
- [ ] Have questions and answers you can make
- [ ] Algorithms will determine match and enemy % based on questions
- [ ] Block users

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
