What is a React?

React, is an open-source JavaScript library for building user interfaces (UIs). It was developed and is maintained by Meta, and is widely used by developers to create interactive and dynamic web applications.

What are the features of React?

Use of Virtual DOM instead of Real DOM, JSX, Server-side rendering, Unidirectional data flow or data binding, Reusable components, etc.

What is JSX?

JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects.

What is the difference between Real DOM and Virtual DOM?

Virtual DOM is the representation of a UI in the form of a plain JavaScript object. It is a node tree that lists the elements, their attributes and content as Objects and their properties. Real DOM is the real representation of a UI which can be seen and inspected in the browser. Manipulating the virtual DOM is much faster than real DOM, because nothing gets drawn on the screen. React uses this virtual DOM to figure out the most efficient way to update the browser DOM.


What is the difference between state and props?

Props are used to pass data from parent to child. They are like function arguments. They are immutable. State is managed within the component and is mutable.


Can we change the state of the component directly?

No, we can't change the state of the component directly. State can only be changed by using setState() method. Changing the state variable directly won't re-render the component.


What is the difference between controlled and uncontrolled components?

A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

Most native React form components support both controlled and uncontrolled usage:

// Controlled:
<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>

What are Pure Components?

Pure components re-render only when the props passed to the component changes. For example, if you have a pure child component inside a parent component state changes in the parent component will not re-render the child component unless the props passed to the child component change.

To create a pure component, you can use the memo function from React. It is a higher order component which takes a component as an argument and returns a new component. The new component renders only if the props change.

import React, { memo } from 'react';

const ChildComponent = ({ name }) => {
  console.log('Rendering child component');
  return <div>{name}</div>;
};

const PureChildComponent = memo(ChildComponent);

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={() => setName('Jane')}>Change name</button>
      <PureChildComponent name={name} />
    </div>
  );
};

What are Synthetic Events in React?

React differs from HTML in that it uses a synthetic event system instead of directly binding to the browser’s native events. This system brings consistency and performance benefits, and it allows React to be agnostic of environments like browser, server, or React Native.

The events such as onClick, onSubmit, onFocus, etc. are all camel-cased to be consistent with the naming convention in JavaScript. React event handlers are written inside curly braces:

function activateLasers(e) {
    e.preventDefault();
    console.log('The button was clicked.');
}

<button onClick={activateLasers}>Activate Lasers</button>

What is the purpose of `key` attribute in React?

The string attribute key is a special attribute you need to include when rendering an array of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

What are refs in React?

Refs are used to get reference to a DOM node or an instance of a component. They help to access the DOM nodes or React elements created in the render method. You can also use refs when you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.

What is ref forwarding in React?

By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent—for example, to allow focusing it. To opt in, wrap your component definition into forwardRef():

import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} />
    </label>
  );
});
You will receive a ref as the second argument after props. Pass it to the DOM node that you want to expose:

import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});
This lets the parent Form component access their <input> DOM node exposed by MyInput:

function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
This Form component passes a ref to MyInput. The MyInput component forwards that ref to the <input> browser tag. As a result, the Form component can access that <input> DOM node and call focus() on it.

What is React Fiber?

React fiber is the reconciliation engine that replaced the core algorithm in React v16. It is a rewrite of the core algorithm, responsible for scheduling what gets rendered on screen. It is a set of algorithms for efficiently updating the UI. Here is a bit-outdated but quite good article about React Fiber.

What is the difference between class components and function components?

Class components let you define your components with the help of classes. You can extend from React.Component class to create a component. Class components also allow you to define component level lifecycle methods. Function components are defined by writing a function which returns a React element. Functional components are the preferred way to write React components. There are no lifecycle methods similar to class components available in functional components; you can use React hooks instead to manage the component lifecycle.

What are Higher-Order Components (HOCs)?

A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature. Higher-Order Components are not part of the React API. They are the pattern that emerges from React's compositional nature.

What are React Hooks?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. Some common hooks include useState, useEffect, useMemo, useRef, useCallback, etc.

What is Context in React?

Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is primarily used when some data needs to be accessible by many components at different nesting levels.

What is Reconciliation in React?

Reconciliation is the process through which React updates the DOM by comparing the newly returned elements with the previously rendered ones. React updates the DOM when a component's state changes.

What could be the reasons for un-necessary re-renders in React?

Unnecessary re-renders in components can occur due to several reasons, and it's important to optimize your code to minimize them for better performance.

Here are some common reasons for unnecessary re-renders in functional components:

Using inline functions in JSX props: If you pass an inline function as a prop to child components, those components will get re-rendered every time the parent component re-renders. This is because a new function is created on every render. You can optimize this by using useCallback hook to memoize the function.
Using useState hook with objects: If you use useState hook with objects, you need to make sure that you are not mutating the object. If you mutate the object, React will not be able to detect the change and will not re-render the component. You can optimize this by using useReducer hook instead of useState hook.
Using useEffect hook without dependencies: If you use useEffect hook without dependencies, it will run on every render. You can optimize this by passing an empty array as the second argument to useEffect hook.
Parent Component Re-renders: If a parent component re-renders, all its child components will also re-render. You can optimize this by using React.memo to memoize the child component where possible.
Global State Changes: If you use global state management libraries like Redux, MobX, etc., and the global state changes, all the components that use that state will re-render. You can optimize this by using useSelector hook to select only the state that you need in a component.
Misusing Context: If you use Context API to pass data to child components, and the data changes, all the child components will re-render. You can optimize this by using useContext hook to select only the data that you need in a component.
You can also use React.StrictMode to detect potential problems in your code that could cause unnecessary re-renders.


How does React handle prop drilling, and what are the downsides of excessive prop drilling?

Prop drilling is the process of passing data from a parent component to deeply nested child components through props. While React doesn't prohibit this, it can lead to code that is hard to maintain and understand. Excessive prop drilling can make it challenging to track data flow and can result in unnecessary re-renders. To mitigate these issues, you can use Context API or state management libraries like Redux.

What is the purpose of the `useEffect` hook in React?

The useEffect hook in React is used for performing side effects in functional components. Side effects can include data fetching, DOM manipulation, and subscribing to external data sources.

What is the purpose of the `useContext` hook in React?

The useContext hook is used to access and consume context values in functional components. It provides a way to access context data without the need for a context consumer. useContext is particularly useful when you want to access context values in nested components without having to pass props through intermediate components.

What is the purpose of the `useMemo` hook in React?

The useMemo hook is used to memoize the result of a computationally expensive operation in a functional component. It helps optimize performance by caching the result of the operation and returning the cached result on subsequent renders if the dependencies have not changed. This can prevent unnecessary calculations.


Explain the concept of error boundaries in React.

Error boundaries are special React components that catch JavaScript errors during rendering, in lifecycle methods, and during the constructor of whole tree below them. They are used to handle errors gracefully by displaying a fallback UI and preventing the entire application from crashing due to unhandled errors.

You can use react-error-boundary package to create error boundaries in your application. It provides a ErrorBoundary component that you can wrap around any component that might throw an error. The ErrorBoundary component takes a FallbackComponent prop that is used to render a fallback UI when an error occurs.

What are fragments in React?

React doesn't allow returning multiple elements from a component. You can use fragments to return multiple elements.

Fragments in React allow for a group of elements to be returned from a component's render method without adding an extra node to the DOM. They are useful when you want to return multiple elements without wrapping them in a parent container.

What are Server Components in React?

Server Components allow developers to write components that render on the server instead of the client. Unlike traditional components, Server Components do not have a client-side runtime, meaning they result in a smaller bundle size and faster loads. They can seamlessly integrate with client components and can fetch data directly from the backend without the need for an API layer. This enables developers to build rich, interactive apps with less client-side code, improving performance and developer experience.

How to lazy load components in React?

You can use React's lazy() function in conjunction with dynamic import() to lazily load a component. This is often combined with Suspense to display fallback content while the component is being loaded.

What is `Suspense` in React?

Suspense is a component in React that lets you specify the fallback content to display while waiting for a component to load. It is used in conjunction with lazy() to lazily load components.


How does React Virtual DOM work?

Virtual DOM works in this steps:

Whenever any underlying data changes, new virtual DOM representation will be created.
Then the difference between the previous DOM representation and the new one is calculated.
Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

How do Server Components differ from Client Components?

Server Components are rendered on the server and do not require client-side JavaScript for rendering. While Server Components and Client components can coexist in the same app, Server Components can import and render Client components.


How do React Server Components handle data fetching?

Server Components can directly access backend resources, databases, or filesystems to fetch data during rendering, eliminating the need for a separate API layer for data fetching.


What's the component's lifecycle in React?

In React functional components, lifecycle-like behaviors are achieved using hooks:

Mounting and Unmounting
Utilizing the useEffect hook with an empty dependency array ([]) ensures the hook runs after the component mounts to the DOM.

useEffect(() => {
  // do something after component mounts
  return () => {
    // do something before component unmounts
  };
}, []);
The cleanup function returned within the useEffect callback offers a mechanism for handling tasks when the component is about to unmount.

Updates
The useEffect hook, when invoked without a dependency array or with specific dependencies, executes after every render or when specified prop/state changes are detected.

useEffect(() => {
  // do something after every render
});
useEffect(() => {
  // do something after specific prop/state changes
}, [state1, state2]);

What is the difference between stateful and stateless components?

The main difference between stateful and stateless components is one has state and the other doesn't. Stateful components keep track of changes to their state and re-render themselves when the state changes. Stateless components, on the other hand, render whatever is passed to them via props or always render the same thing.

What is the naming convention for React components?

In React, the naming convention for components is to use PascalCase, meaning the first letter of each word in the component's name should be capitalized. For example, UserProfile, SidebarItem, or NavigationMenu. This convention differentiates custom React components from regular HTML tags in JSX, as React treats elements starting with a lowercase letter as DOM tags and those starting with a capital letter as custom components.

How to render a list in React?

In React, you can render a list by using the JavaScript map function to iterate over an array of items and return a JSX element for each item. It's important to provide a unique key prop to each element in the list for React's diffing algorithm to function efficiently during re-renders. Here's a basic example:

const items = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {items.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
Note: While using the index as a key can work in some cases, it's generally not recommended for dynamic lists where items can be added, removed, or reordered.


What are `use client` and `use server` directives?

The use client directive marks source files whose components are intended to execute only on the client. Conversely, use server marks server-side functions that can be invoked from client-side code.

Can you use hooks in Server Components?

No, hooks are not supported in Server Components. Hooks are a client-side feature and are not supported in Server Components. However, you can use hooks in client components and import them into Server Components.

How to create a Custom hook in React?

Custom hooks are a mechanism for code reuse in React and allow you to extract component logic into reusable functions. Custom hooks can be used to share logic between components or to abstract away complex logic to make components more readable.


What is Hydration in React?

Hydration is the process of using client-side JavaScript to add interactivity to the markup generated by the server. When you use server-side rendering, the server returns a static HTML representation of the component tree. Once this reaches the browser, in order to make it interactive, React "hydrates" the static content, turning it into a fully interactive application.

What is Strict Mode in React and why is it useful?

Strict Mode is a tool in React for highlighting potential problems in an application. By wrapping a component tree with StrictMode, React will activate additional checks and warnings for its descendants. This doesn't affect the production build but provides insights during development.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
In Strict Mode, React does a few extra things during development:

It renders components twice to catch bugs caused by impure rendering.
It runs side-effects (like data fetching) twice to find mistakes in them caused by missing effect cleanup.
It checks if deprecated APIs are used, and logs a warning message to the console if so.


How do you investigate a slow React app and identify performance bottlenecks?

There are many reasons why an app might be slow. It could be due to a slow network, a slow backend, or a slow client. It could also be due to a memory leak, unnecessary re-renders, or large bundle sizes.

Here are some tips to help you investigate and fix performance issues:

- Use the React DevTools Profiler
The React DevTools Profiler helps you visualize how components render and identify costly renderings. It can also help you identify unnecessary re-renders.

Check for Unnecessary Renders
Ensure that components don't render more often than needed. Be clear about the useEffect dependencies and avoid creating new objects or arrays every render, as these can trigger unnecessary child component renders. Tools like why-did-you-render can help spot unnecessary re-renders.

Analyze Bundle Size
Use your production build to analyze your bundle size. Tools like webpack-bundle-analyzer or source-map-explorer can help you see if large libraries or unused code is slowing down the initial load.

Optimize Images & Assets
Ensure images are appropriately sized and use modern formats. Also, consider using CDNs for assets that don't change often.

Lazy Load Components
Use lazy() and dynamic imports to split your bundle and load components only when they're needed. This can help reduce the initial load time.

Check Network Requests
Slow API calls or fetching large amounts of data can affect performance. Optimize your backend, paginate data, or cache results. You can also use tools like @tanstack/react-query or swr to help manage data fetching and caching.

Regularly profiling and monitoring your app can help you spot and fix performance issues before they become significant problems. You can use tools like Lighthouse or Calibre to monitor your app's performance over time.