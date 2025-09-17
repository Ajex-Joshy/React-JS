### So what is JSX

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files.

At its core, JSX is just syntactic sugar for React.createElement(). When a browser runs your code, it doesn't understand JSX. A build tool with a transpiler, most commonly Babel, converts your JSX code into standard JavaScript that the browser can execute.

**Why Use JSX?**
Writing JSX makes your code more readable, maintainable, and expressive. It combines the declarative nature of HTML with the power of JavaScript.

- **Readability:** writing UI in React.createElement() makes it very complicated. So there comes the JSX where you can write UI in HTML like code which is easy to visualize + you can leverage the power of JS
- **Expressiveness:** As we know we can write any JS variables, functions, and expressions in JSX it makes the UI dynamic and powerful

**Rules and Syntax**

**1. Single root element**

- Every JSX expression must have a single parent element. If you need to return multiple elements, you must wrap them in a parent div, an empty tag <></> (a React Fragment), or <React.Fragment>.

```js
// Correct
const myDiv = (
 <div>
   <h1>Hello</h1>
   <p>World</p>
 </div>
);

// Correct with Fragment
const myFragment = (
 <>
   <h1>Hello</h1>
   <p>World</p>
 </>
);

const myFragment2 = (
 <React.Fragment>
   <h1>Hello</h1>
   <p>World</p>
 </React.Fragment>
);

// Incorrect
const incorrect = (
 <h1>Hello</h1>
 <p>World</p>
);
```

In React, a Fragment is a special type of component that lets you group multiple elements together without adding an extra node to the DOM.

Normally in React,if you want to return multiple sibling elements, you would typically wrap them inside a `<div>` or another container. But that adds unnecessary nodes to the DOM.

👉 Fragments solve this problem — they allow you to return multiple children without introducing an extra wrapper.

**<React.Fragment> vs <></>**

The key difference lies in their capabilities: **Attributes and Keys:**

**React.Fragment**: This syntax allows you to pass attributes, most notably the key prop. This is essential when mapping over an array to render a list of components or elements, as React requires a unique key for each item in a list to efficiently manage updates.
**<></>**: The shorthand syntax does not support attributes or keys. It is a simpler, more concise way to group elements when you don't need any additional properties on the fragment itself.

**2. CamelCase Naming for Attributes**

- Because JSX is a part of JavaScript, standard HTML attributes are often converted to camelCase to avoid conflicting with reserved JavaScript keywords.

HTML Attribute JSX Attribute

`class` - `className`
`for` - `htmlFor`
`onclick` - `onClick`
`tabindex` - `tabIndex`

**3. Embedding Javascript**

- You can embed any valid JavaScript expression inside JSX using curly braces {}. This is how you display variables, call functions, or perform calculations

```js
const name = "John Doe";
const element = <h1>Hello, {name}</h1>; // embeds a variable

const getGreeting = () => "Welcome back!";
const greetingElement = <p>{getGreeting()}</p>; // calls a function
```

**4. Self-Closing Tags**

- In JSX, all tags must be closed. Tags that do not have children, like `<br> `or `<img>`, must be self-closed with a slash before the closing angle bracket.

```js
// Correct
const image = <img src="image.jpg" alt="A photo" />;

// Incorrect
const incorrectImage = <img src="image.jpg" alt="A photo">;
```

### HTML VS JSX

<table border="1" >
  <thead>
    <tr>
      <th>Feature</th>
      <th>HTML</th>
      <th>JSX (JavaScript XML)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>What It Is</td>
      <td>A markup language for web pages.</td>
      <td>A syntax extension for JavaScript.</td>
    </tr>
    <tr>
      <td>Environment</td>
      <td>Natively understood by web browsers.</td>
      <td>Requires a transpiler (e.g., Babel) to be converted to JavaScript.</td>
    </tr>
    <tr>
      <td>Purpose</td>
      <td>Defines the structure and content of a web page.</td>
      <td>Describes a React component's UI, integrating logic and markup.</td>
    </tr>
    <tr>
      <td>Syntax</td>
      <td>Uses standard attributes (class, onclick).</td>
      <td>Uses camelCase for attributes (className, onClick). All tags must be closed.</td>
    </tr>
    <tr>
      <td>Code Integration</td>
      <td>Cannot directly embed JavaScript variables or expressions.</td>
      <td>Can embed JavaScript expressions using curly braces {}.</td>
    </tr>
    <tr>
      <td>Root Element</td>
      <td>Not required to have a single root element.</td>
      <td>Must return a single root element or a Fragment (&lt;&gt;&lt;/&gt;).</td>
    </tr>
  </tbody>
</table>

Before get into the code we should also understand about components

### components

Components are JS functions or class that returns JSX

we have two types of components

- Functional Component (Recommended)
  - A functional component is a JS function that returns a JSX
  - we can use props (properties) to pass data to child and hooks to manage state and other features
- Class Components (outdated)
  - It is the older way of writing components
  - we will more about it when we write code

**we should write the first letter of Component in capital**

A component is the fundamental building block of a React application.
We can combine these components to build our UI
We can also reuse compomnents with different datas in it

- for eg if we have to display restaurant cards in a food delivery app we will write one component for one card and we will resuse the component for building multiple cards with different restaurant data

**Importance of Making Components Pure**

A React component should behave like a pure function with respect to its props. This means:

1. It always returns the same output for the same set of input props.

2. It has no side effects (it doesn't change anything outside of its scope, like global variables or the DOM).

### props

Props (short for properties) are how you pass data from a parent component to a child component. Props are **read-only** and **immutable**, meaning a child component cannot change the props it receives.

### state

State is data that a component can manage and change itself. Unlike props, state is mutable, and when it changes, React automatically re-renders the component to reflect the new data. In functional components, you manage state using the useState Hook.

### Commponent Composition

This means that we can write componenta inside another components

- It is the ability to build complex UIs by nesting smaller components inside larger ones.
- This is a core principle that encourages modularity and reusability.
