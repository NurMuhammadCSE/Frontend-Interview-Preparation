### 1. How does React work?

React creates a virtual DOM. When the state changes in a component it first runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.

- Key Points:
One-Way Data Binding: Unidirectional Data Flow: Data in React flows in one direction, from parent to child through props. 

Components:
React applications are built with components, which are reusable pieces of UI.  
Components can be functional or class-based.  
They manage their own state and props (properties).

JSX (JavaScript XML):
JSX is a syntax extension for JavaScript that looks like HTML.  
It makes writing components more intuitive.

State and Props:
State: Each component can have its own state, which is an object that holds data that can change over time.
Props (Properties): Props are read-only attributes passed from a parent component to a child component. 

Component-Based Architecture:
Components: React apps are built using components, which are reusable pieces of UI.

Functional and Class Components: There are two types of components—functional and class components. Functional components are just functions that return JSX (a syntax extension that looks like HTML), while class components are ES6 classes that have additional features like state and lifecycle methods.

### 2. What are the advantages of using React?


Performance
Virtual DOM: React's virtual DOM significantly improves performance by efficiently updating only the necessary parts of the real DOM, reducing rendering time.

JSX
Intuitive: JSX syntax combines HTML-like structure with JavaScript, making it familiar and easier to write.


### 3. What are the differences between a class component and functional component?


Syntax:
Class Component: Defined using ES6 class syntax.
Functional Component: Defined as a plain JavaScript function that returns JSX.

State Management:
Class Component: Uses this.state to manage local state within the component.
Functional Component: With the introduction of React Hooks, functional components can now manage state using the useState hook.

Lifecycle Methods:
Class Component: Class components have lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount.
Functional Component: Functional components use the useEffect hook to handle side effects, which can replace multiple lifecycle methods in class components.

### 4. What is the difference between state and props?

Definition:
State: State is an internal data structure that stores information about the component's current situation. It is managed within the component itself.

Props: Props (short for "properties") are inputs to a component. They are passed from a parent component to a child component and are immutable, meaning they cannot be changed by the child component.

Mutability:
State: Mutable: The state can be updated or modified within the component using the setState method (in class components) or the useState hook (in functional components).
Props: Immutable: Props cannot be changed by the receiving component. They are read-only and are used to pass data and event handlers from parent components to child components.

### 5. What is a higher order component?

Higher Order Components (HOCs)
A Higher Order Component (HOC) is a function that takes a component as input and returns a new component.

Essentially, it's a pattern for reusing component logic without modifying the original component. Think of it as a wrapper that adds additional features.

How it works:
Create a function: This function will accept a component as an argument.
Return a new component: This new component will typically render the original component, but with added logic or props.

Common Use Cases:
Adding authentication
Code splitting
Data fetching
Error handling
Performance optimization

### 6. What is JSX?

JSX: A Syntactic Sugar for React
JSX is a syntax extension for JavaScript that looks like HTML code within your JavaScript files.

Key Points:
Not HTML: While it resembles HTML, JSX is actually transformed into regular JavaScript code before it runs in the browser. 

### 7. What is the purpose of useEffect?

useEffect is a Hook used for performing side effects in functional components. Side effects include data fetching, subscriptions, or manually changing the DOM. The useEffect Hook runs after every render by default, but you can control when it runs by specifying dependencies in the dependency array. This helps manage effects efficiently and avoid unnecessary operations.

### 8. What is React Context, and how is it used?

Context API provides a way to share data across components without prop drilling. It's useful for global state management.

### 9. What is the difference between useCallback and useMemo?

useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.
useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.
useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result


### 10.  How do you optimize performance in React?

Use shouldComponentUpdate to prevent unnecessary re-renders, memoization, lazy loading, code splitting, and profiling tools to identify performance bottlenecks.
Additional Topics
Error boundaries
React Router
Server-Side Rendering (SSR)
Code splitting
Testing in React (Jest, React Testing Library)


### 11. What is the difference between useEffect and useLayoutEffect?

### 12. Can you explain the difference between a pure and impure function, and why it matters in the context of React?

