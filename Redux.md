### 1. What is redux?

Redux is a predictable state management library for JavaScript applications. It is often used with React to manage and centralize application state, but it can be used with any JavaScript framework or library. Redux helps manage the state of an application in a consistent and predictable way by following a set of core principles.

Key Concepts of Redux:
Store: The store is a single, centralized repository of the application's state. It holds the entire state tree of the application and provides methods to access, update, and subscribe to state changes.

Actions: Actions are plain JavaScript objects that describe an event or an intention to change the state. Each action has a type property that indicates the type of action and may include additional data (payload) required to update the state.

Reducers: Reducers are pure functions that specify how the state should change in response to an action. A reducer takes the current state and an action as arguments and returns a new state. Reducers must be pure functions, meaning they should not mutate the existing state but rather return a new state object.

Dispatch: The dispatch function is used to send actions to the store. When an action is dispatched, the store invokes the reducers to update the state based on the action type and payload.

Selectors: Selectors are functions used to access and derive pieces of state from the store. They help encapsulate and abstract away the logic for accessing specific parts of the state.

Middleware: Middleware is a way to extend Redux's capabilities by adding custom logic that can be executed before or after actions reach the reducer. Common use cases include logging, asynchronous operations (e.g., API calls), and handling side effects. Redux Thunk and Redux Saga are popular middleware for handling asynchronous actions.

Core Principles of Redux:
Single Source of Truth: The state of the entire application is stored in a single store, which ensures that the state is consistent and centralized.

State is Read-Only: The state cannot be directly modified. Instead, you must dispatch actions to describe what happened, and the reducers handle how the state changes in response to those actions.

Changes are Made with Pure Functions: State changes are handled by pure functions (reducers) that take the current state and an action and return a new state. Pure functions ensure that state changes are predictable and maintainable.


Redux: A Predictable State Container
Redux is a JavaScript library specifically designed for managing and centralizing application state. It's particularly useful for complex applications where state management becomes challenging.   

Core Concepts:
Store: A single source of truth for your application's state. It's an object tree that holds all the data.   
Actions: Plain JavaScript objects that describe what happened. They are sent to the store to trigger state changes.   
Reducers: Pure functions that take the previous state and an action as input and return a new state. They define how the state changes in response to actions.   
How it Works:
State: The application's state is stored in a single store.   
Actions: When something happens (like a button click), an action is dispatched.   
Reducer: The reducer receives the action and the previous state, and returns a new state based on the action type.   
Store: The store updates its state with the new state returned by the reducer.   
Components: Components subscribe to the store and re-render when the state changes.   
Key Benefits:
Predictability: State changes are always deterministic, making it easier to reason about and test your application.   
Centralized State: Managing state in one place simplifies complex state management scenarios.
Time Travel Debugging: Redux DevTools allow you to inspect state changes and even rewind or replay actions.   
Community and Ecosystem: A large community and a rich ecosystem of tools and libraries.   
When to Use Redux:
Large-scale applications with complex state management.   
Applications requiring time travel debugging or state persistence.   
When you need to share data across multiple components efficiently.


### 2. Difference between action and reducer.
Actions are plain javascript objects.
They must have a type indicating the type of action being performed.
In essence, actions are payloads of information that send data from your application to your store.
A reducer is simply a pure function that takes the previous state and an action, and returns the next state.


### 3. What is a store in redux?
The store is a javascript object that holds application state. Along with this it also has the following responsibilities:

Allows access to state via getState();.
Allows state to be updated via dispatch(action);.
Registers listeners via subscribe(listener);.
Handles un-registering of listeners via the function returned by subscribe(listener).

### 4. What is Redux Thunk used for?
Redux thunk is middleware that allows you to write action creators that return a function instead of an action.
The thunk can then be used to delay the dispatch of an action if a certain condition is met. This allows you to handle the asynchronous dispatching of actions.


### 5. What is the difference between npx and npm?
NPM is a package manager and can be used to install node.js packages.
NPX is a tool to execute node.js packages.
It doesn't matter whether you installed that package globally or locally. NPX will temporarily install it and run it. NPM also can run packages if you configure a package.json file.

So if you want to check/run a node package quickly without installing it - use NPX.

'create-react-app' is a npm package that is expected to be run only once in a project's lifecycle. Hence, it is preferred to use npx to install and run it in a single step.