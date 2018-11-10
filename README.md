# react-redux-examples

## React Componenents

### Functional Components

Simple + return JSX

### Class Components

Intelligent

- can handle state
- can host class methods

### Containers

Components wired up to host state as props - very flexible on how to organize components vs containers.

### LifeCycle Methods

Get called automatically immediately **after** component renders in the DOM.

- componentDidMount fires as component renders

- componentWillMount fires before component redners

- gets triggered with any change to state

### Lodash

Ducks hard. Slick data manipulation.

**RULE**: when pulling down arrays it is always best to convert to large objects to easily move around state (vs a ducking array). **\_.mapKeys** does just that.

## Redux

Delivers state to the React code

### Reducers

More like 'deliverers'..

Delivers state data, connected to containers via mapStateToProps().

Named according to what it delivers.

### Actions

Simple function which set state, connected to containers via mapDispatchToProps() + bindActionCreators.

Passed around components (like guns to fire) as piece of state via mapDispatchToProps() + bindActionCreators.

## Middleware

Filters the actions getting passed to reducer. Gatekeeper functions which filter large payloads into data -> state.

### Redux Promise

foxing with asynchronous API calls? how bout [Redux Promise](https://www.npmjs.com/package/redux-promise)

This will let you retrieve big data from asynchronous API calls and unpack it -> plug it into app state cleanly. Slick ducking tool right here.

Middleware which can recognize if an action's payload is a AJAX request. If so it will STOP the processand wait until the AJAX request has completed before feeding the unpacked response into application state.

It filters HTTP response data into state.

Simple way to feed asynchronous retrieved data into app state cleanly.

### React Router DOM

multiple pages? how bout [Redux Router Dom](https://www.npmjs.com/package/react-router-dom#installation)

This is what you use to break up your application into multiple views and pages.

Circumvents the traditional link --> new route & html page rendering.

Rather, it informs React which components to render instead, which are [Single Page Applications](https://en.wikipedia.org/wiki/Single-page_application) (SPA) - which is the doozy React Magic.

React router should directly inform state (in a blog = active post, posts, etc)

### Switch: React Router

One route at a time! Switch takes in multiple routes and returns the **first match**, so it is important that the routes are ordered top to bottom, leaving "/" home at the bottom.

### Match Params!: React Router

**MAGIC ALERT**

Slick ability to set **/:id** in the route and pull that value into the component props with **this.props.match.params**

### OwnProps

Allows small component to filter larger set of state props to identify the one needed

ownProps = this.props[this.props.match.params.id]

Syntactic magic for simplicity.

### Redux Form

Need forms? a lot of User input? How bout [Redux Form](https://redux-form.com/7.4.2/)

Handles forms with redux. Validates the input and submits the form.

Also handles the internal state of the form and for each field: **pristine, touched, invalid**

Essentially creates a Postman object out of validated form input.

Save us from creating an action creator for each ducking input ---> simplifies the reducer delivery to state.

### Thunk

Handles multiple asynchronous actions smoothly.
