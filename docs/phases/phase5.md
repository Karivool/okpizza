# Phase 5: Visitors (1 day, T W 6pm))

## Rails
### Models
* Visitor

### Controllers
* Api::VisitorsController (create, index, show, update)

### Views
* visitors/index.json.jbuilder
* visitors/show.json.jbuilder

## Flux
### Views (React Components)
* VisitorsIndex
  - VisitorsIndexItem
* VisitorForm

### Stores
* Visitor

### Actions
* `ApiActions.receiveAllVisitors`
* `ApiActions.receiveSingleVisitor`
* `VisitorActions.fetchAllVisitors`
* `VisitorActions.fetchSingleVisitor`
* `VisitorActions.createVisitor`
* `VisitorActions.editVisitor`

### ApiUtil
* `ApiUtil.fetchAllVisitors`
* `ApiUtil.fetchSingleVisitor`
* `ApiUtil.createVisitor`
* `ApiUtil.editVisitor`

## Gems/Libraries
