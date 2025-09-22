**Static vs Dynamic rendering**

- static rendering:
  - The HTML of the page is generated at build time
  - Content is pre-rendered into static files (HTML, CSS, JS) and served directly from a CDN or server.
  - very fast performance and great for SEO
- dynamic rendering:
  - The HTML of the page is generated on-demand (per request), often using a server or API.
  - Content is always fresh and up-to-date.

CSR vs SSR
Impacts of CSR on SEO

**SPA (Single Page Application):**
• Loads a single HTML file; updates content dynamically with JS.
• Navigation happens on the client side → no full page reload.
• Example: Gmail, Twitter, Trello.

**MPA (Multi Page Application):**
• Each request loads a new HTML page from the server.
• Traditional web model with full page reloads.
• Example: Amazon, eBay, most blogs.

Pros of SPA

✅ Faster navigation (no full page reload).
✅ Better user experience (smooth & app-like).
✅ Can work offline (with Service Workers).
✅ Easy to separate frontend & backend (API-based).

Cons of SPA

❌ Slower initial load (large JS bundle).
❌ SEO challenges (content depends on JS rendering).
❌ Higher complexity (routing, state management).
❌ Security concerns (XSS, client-side data exposure).

**React Strict Mode**

- A development tool that helps identify potential issues in an application.
- It does not affect production builds — only runs checks in development.
- Enabled by wrapping part (or all) of your component tree in:

**Synthetic Events**

- React wraps native browser events in a SyntheticEvent object.
- It provides a consistent API across different browsers.
- Works the same way in all environments, regardless of browser quirks.

### A React Render Tree

A **React render tree** is the hierarchical structure formed by your components. It represents the parent-child relationships in your application's UI, similar to a family tree.

- **Top-level components**: These are the components at the very top of the render tree. They often manage the overall layout of the application and hold the main state that is passed down to their children. An `App` component is a typical top-level component.
- **Leaf components**: These are the components at the bottom of the tree with no children. They are typically small, simple, and primarily concerned with presentation, such as a `Button` or a `Card`.

---

### Controlled vs. Uncontrolled Components

This distinction is most commonly used when discussing form inputs. It describes how the input's state is managed.

- **Controlled Components**: A controlled component is one where the input's value is controlled by **React's state**. The input's value is always in sync with a state variable, and any changes to the input are handled via an event handler that updates the state. This makes form data easy to validate and manage.
- **Uncontrolled Components**: An uncontrolled component's value is managed by the **DOM itself**, not by React. You use a `ref` to get the value from the input when it's needed (e.g., when a form is submitted). This approach can be simpler for basic forms but offers less control over validation and real-time feedback.

---

### Higher-Order Components (HOCs)

A **Higher-Order Component** is an advanced pattern in React, defined as a **function that takes a component as an argument and returns a new component** with enhanced functionality. HOCs are used to share reusable logic between components without repeating code. They are less common now due to the popularity of Hooks, which offer a simpler way to achieve the same goal.

---

### Pure Components

pure component refers to a component that, given the same props and state, will always render the **same output**. This concept is crucial for performance optimization in React applications.

**No Side Effects:** It does not modify any data outside of its own scope during rendering. This means no direct DOM manipulation or external API calls within the render method.

**Shallow Comparison for Re-renders:** Pure components in React implement a shallow comparison of props and state to determine if a re-render is necessary. If the shallow comparison reveals no changes, the component's render() method (for class components) or the functional component's body is skipped, preventing unnecessary re-renders and improving performance.

```js
import React from "react";

const MyPureFunctionalComponent = React.memo(({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
});
```

---

### Stateful vs. Stateless Components

This distinction describes whether a component manages its own internal state.

- **Stateful Components**: A stateful component is one that holds and manages its own internal state. In modern React, these are functional components that use the `useState` hook. They can also be class components that use `this.state`.
- **Stateless Components**: A stateless component does not have any internal state. Its primary job is to receive data via props and display it. They are typically used for presentation and are often referred to as "dumb" components.

### UI as a Tree

The concept of a UI as a tree is a fundamental model in web development. The entire user interface is represented as a hierarchical structure of nested elements. Both the browser and frameworks like React use this tree model to efficiently manage and render a UI.

#### a. Render Trees

A **render tree** is a visual representation of your application's components and elements in a nested structure. For example, a page with a header, a main content area, and a sidebar would be a render tree where the top-level component (e.g., `App`) has three child components (`Header`, `Main`, `Sidebar`). This model is how frameworks like React manage their component hierarchy.

#### b. Module Dependency Tree

A **module dependency tree** (or graph) is a concept used by bundlers. It's a map of all the files (modules) in your application and how they are related. The tree starts from an entry file (e.g., `index.js`) and branches out to all the other files that it imports, directly or indirectly. A bundler uses this tree to figure out every piece of code that your application needs to run.

---

### c. Bundler

A **bundler** is a build tool that takes your application's module dependency tree and combines all of its files into one or more final output files, known as **bundles**. The primary purpose of a bundler is to prepare your code for the browser, which is much more efficient at loading a few large files than hundreds of small ones.

- **i. Webpack**: **Webpack** is one of the most popular and powerful bundlers. It's highly configurable and forms the backbone of many modern frameworks' build processes, including the original `create-react-app`.
- **ii. Compiling**: **Compiling** is a step in the bundling process. It's the act of converting code from one language to another. For example, a compiler or transpiler like **Babel** converts modern JavaScript (ES6+) or JSX into older, browser-compatible JavaScript.
- **iii. Loader**: In Webpack, a **loader** is a tool that transforms a file before it's added to the bundle. Loaders allow Webpack to handle files that aren't JavaScript, such as CSS, images, and fonts. For example, the `babel-loader` compiles your JSX code, and a `style-loader` handles your CSS.
- **iv. Code Splitting**: **Code splitting** is a key optimization technique used by bundlers to improve performance. Instead of creating a single, massive JavaScript bundle, the bundler splits the code into smaller, on-demand chunks. This allows the browser to download and execute the initial code much faster, with the rest of the application loading only when it's needed.

When React renders, it follows a strict, two-phase process: the **Render Phase** and the **Commit Phase**. Your notes correctly outline the key steps and concepts involved.

---

### The Rendering Process

The rendering process has three main steps:

#### a. Triggering

Rendering is triggered by a change in your application. This can happen in two ways:

1.  **Initial Render**: When the application first starts.
2.  **Re-render**: When a component's **state** is updated (via a `setState` function) or when a parent component passes **new props** to a child component.

#### b. Rendering

This is the "planning" phase. React's **Fiber reconciler** builds a new **work-in-progress Fiber tree** in memory. During this process, the **diffing algorithm** compares the new tree with the old one to find what has changed. The output of this phase is a list of all the necessary updates, called the **effect list**.

#### c. Committing

This is the "execution" phase. React uses the **effect list** to make changes to the **real DOM**. This phase is **synchronous** and **uninterruptible**, ensuring the UI is updated consistently. After the real DOM is updated, the browser re-paints the screen, and the user sees the new UI.

---

### Re-rendering

A **re-render** is when a component renders again after the initial render. This happens automatically whenever a component's state or props change. React is smart enough to re-render only the components that are affected by the change, which is a key part of its performance model.

### Batching Updates

To avoid unnecessary re-renders, React **batches updates**. This means that multiple state updates, even if they are triggered in quick succession, are grouped together and processed in a single re-render. This is a crucial performance optimization that prevents a component from rendering multiple times for a single event.

### Webpack

**Webpack** is a powerful and highly-configurable **module bundler** for modern JavaScript applications. It takes all the files in your project and bundles them into one or more final output files that are optimized for the browser.

---

### a. Module Bundler

A module bundler, like Webpack, works by building a **dependency graph** of your application. It starts from a main entry file and recursively includes every file (module) that is imported. It then processes these files and bundles them into a single file or a few files. This is necessary because browsers are more efficient at loading a small number of large files than a large number of small files.

---

### b. Code Splitting

**Code splitting** is a key optimization feature in Webpack. It's the process of dividing your code into smaller, on-demand chunks that the browser can load in parallel. This significantly reduces the initial page load time and is especially useful for large applications where not all code is needed at once.

---

### c. Webpack Dev Server

The **Webpack Dev Server** is a development tool that provides a local server to run your application. It serves your files from memory, which is much faster than serving them from disk. It also includes features like live reloading, which automatically refreshes the browser whenever you make a change to your code.

---

### d. Hot Module Replacement (HMR)

**Hot Module Replacement (HMR)** is a feature of the Webpack Dev Server. It allows you to swap, add, or remove modules in a running application without a full page reload. This is a crucial feature for a fast development workflow, as it preserves the application's state while you're making changes.

---

### e. Tree Shaking

**Tree shaking** is a form of dead code elimination. It's a build-time optimization that removes unused code from your final bundle. The name comes from the concept of a dependency tree: a bundler "shakes" the tree to see what falls off (the unused code) and then removes it, resulting in a much smaller file size.

---

### Memoization

**Memoization** is a general programming technique for optimizing performance by caching the results of expensive function calls and returning the cached result when the same inputs occur again. In React, hooks like `useMemo` and `useCallback` use memoization to prevent unnecessary re-renders and computations.

When it comes to building user interfaces, the **declarative** and **imperative** approaches represent two fundamentally different philosophies. React is a prime example of a declarative UI library.

---

### Imperative UI 📝

The imperative approach is about **how** you do something. You, the developer, give the computer a series of step-by-step instructions to achieve a desired outcome. You must manually manage every detail of the UI's creation and modification.

**Example:** To update a user's name on a webpage imperatively, you would:

1.  Find the specific element in the Document Object Model (DOM).
2.  Change its content (`textContent` or `innerHTML`).
3.  Maybe change its color or other styles.

This approach can become complicated and bug-prone, especially with complex UIs, because you have to constantly manage and update the UI's state manually.

---

### Declarative UI 🖼️

The declarative approach is about **what** you want. You, the developer, describe the final, desired state of the UI for a given set of data. The underlying library (like React) then takes care of all the necessary steps to make that happen.

**Example:** To update a user's name declaratively in React, you would:

1.  Update the state variable that holds the user's name.
2.  That's it.

React will automatically handle the rest: it will compare the new UI state with the old one (the reconciliation process) and efficiently update only the parts of the real DOM that have changed.

**Analogy:**

- **Imperative:** Telling a chef every single step to cook a meal: "Slice the tomato. Now, dice the onion. Now, put them in a pan with oil..."
- **Declarative:** Giving the chef a recipe: "Make me a bruschetta." The chef knows how to do all the steps and figures out the best way to do them.

sat -

morning session
useContext
useReducer
custom hooks
Router
lazy loading
Handling DOM Events in React

noon session Todo app
due over toast

eve session
complete unit testing for resCard - eve
study integration testing

night

- ep - 14

sun - revision
complete unit testing for resCard + integration testing



mon - revision
tue - review + ep - 14
wed - ep - 15
thu - ep - 16
fri - study react + firebase in detail
sat - redux in detail
sun - 
mon - 
tue - 
wed - revision
thu - review

tue - devTinder
wed - 
Thu - 
Fri -
Sat -
Sun -
Mon -
Tue -
Wed -
Thu - react - 2 review

ep - 15, 16

<!-- TODO  --> complete react 15qs per day

usecontext + useReducer
