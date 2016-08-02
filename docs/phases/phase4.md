# Phase 4: Messages (2 days, W2 W/Th 6pm)

## Rails
### Models
* Message

### Controllers
* Api::MessagesController (create, index, show)

### Views
* messages/index.json.jbuilder
* messages/show.json.jbuilder

## Flux
### Views (React Components)
* MessagesIndex
  - MessageIndexItem
* MessageForm

### Stores
* Message

### Actions
* `ApiActions.receiveAllMessages`
* `ApiActions.receiveSingleMessage`
* `MessageActions.fetchAllMessages`
* `MessageActions.fetchSingleMessage`
* `MessageActions.createMessage`

### ApiUtil
* `ApiUtil.fetchAllMessages`
* `ApiUtil.fetchSingleMessage`
* `ApiUtil.createMessage`

## Gems/Libraries
