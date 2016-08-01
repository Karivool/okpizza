# Phase 4: Likes (1 day, W2 W 6pm)

## Rails
### Models
* Likes

### Controllers
* Api::LikesController (create, destroy, index, show)

### Views
* likes/index.json.jbuilder
* likes/show.json.jbuilder

## Flux
### Views (React Components)
* LikesIndex
  - LikeIndexItem
* LikeForm

### Stores
* Like

### Actions
* `ApiActions.receiveAllLikes`
* `ApiActions.receiveSingleLike`
* `ApiActions.deleteLike`
* `LikeActions.fetchAllLikes`
* `LikeActions.fetchSingleLike`
* `LikeActions.createLike`
* 'LikeActions.destroyLike'

### ApiUtil
* `ApiUtil.fetchAllLikes`
* `ApiUtil.fetchSingleLike`
* `ApiUtil.createLike`
* `ApiUtil.destroyLike`

## Gems/Libraries
