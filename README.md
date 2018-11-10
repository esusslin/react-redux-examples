# react-redux-examples

## React Componenents

### Functional Components

Simple + return JSX

#### Class Components

Intelligent

- can handle state
- can host class methods

### Redux

Delivers state to the React code

#### Containers

Components wired up to host state as props.

#### Reducers

Deliver state data, connected to containers via mapStateToProps()

#### Actions

Simple function which set state, connected to containers via mapDispatchToProps() + bindActionCreators

#### Middleware

Filters the actions getting passed to reducer. Gatekeeper functions which filter large payloads into data -> state.

#### Redux Promise

Middleware which can recognize if an action's payload is a AJAX request. If so it will STOP the processand wait until the AJAX request has completed before feeding the unpacked response into application state.

It filters HTTP response data into state.

Simple way to feed asynchronous retrieved data into app state cleanly.
