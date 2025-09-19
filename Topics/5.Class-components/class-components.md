### Class Components

A **class component** is a way of defining a React component using an ES6 class. For many years, it was the standard way to write components that needed to manage state or use lifecycle methods. While they are still supported, they are now less common in new projects in favor of modern functional components and Hooks.

**The Anatomy of a Class Component**

A class component is a JavaScript class that extends React.Component and must include a render() method.

```js
import React from "react";

class Greet extends React.Component {

    render() {
        return (
            <h1> Helllo World <h1>
        )
    }

}


```

**Passing props in class components**


```js

import React from "react";

class Greet extends React.Component {
  render() {
    const {user: {name, age}} = this.props
    return (
      <h1>Hello {name}</h1>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <>
      <h1>App component</h1>
      <Greet user={{name: "Ajex Joshy", age: 18}}/>
    </>
    )
  }
}


```

if you have to access props inside constructor function the you have to pass props 
`super(props)`
this is basically passing calling the parent constructor function and passing props to it

```js

import React from "react";

class Greet extends React.Component {
  render() {
    const {user: {name, age}} = this.props
    return (
      <h1>Hello {name}</h1>
    )
  }
}

export default class App extends React.Component {

constructor(props) {
    super(props);
    console.log(this.props.user.name)
}
  render() {
    return (
      <>
      <h1>App component</h1>
      <Greet user={{name: "Ajex Joshy", age: 18}}/>
    </>
    )
  }
}


```

why do we need constructor? 
we will initialize state variables in constructor 
also the constructor will be first called before render() so if you need to intialize anything before render we will give in constructor function

so lets see how to make state varables in class components

**State variables**

In class components we dont have hooks. So we implement it in a different way. lets see

```js
export default class App extends React.Component {
  constructor() {
    super() // to access this inside constructor
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <>
      <h1>count: {this.state.count} </h1>
      <button onClick={() => this.setState({count: this.state.count + 1})}>Increase</button>
      <button onClick={() => this.setState({count: 0})}>reset</button>
    </>
    )
  }
}

```

now lets see lifecycle methods

### lifecycle methods


Lifecycle methods are special methods in class components that are automatically called by React at specific moments during a component's life. These moments are categorized into three main phases: Mounting, Updating, and Unmounting.


**1. Mounting Phase** 
This is the phase where an instance of the component is created and inserted into the DOM. The methods are called in this order:

constructor(): This is the very first method called. It's used for two things: initializing the local state (this.state) and binding event handler methods to the component instance.

render(): The only mandatory method in a class component. It's responsible for returning the JSX elements to be rendered to the DOM.

componentDidMount(): This method runs immediately after the component has been rendered to the DOM for the first time. It is the ideal place for:

Making API calls to fetch initial data.
Setting up subscriptions or timers.
Manually interacting with the DOM.


**2. Updating Phase** 
This phase begins when a component's state or props change. The methods are called in this order:

render(): React calls render() again to determine what changes need to be made to the DOM based on the new state or props.

componentDidUpdate(prevProps, prevState): This method runs immediately after an update occurs. It's a great place to perform side effects in response to a state or prop change, such as fetching data based on a new prop value.


Lifecycle methods are special methods in class components that are automatically called by React at specific moments during a component's life. These moments are categorized into three main phases: Mounting, Updating, and Unmounting.

1. Mounting Phase 🚀
This is the phase where an instance of the component is created and inserted into the DOM. The methods are called in this order:

constructor(): This is the very first method called. It's used for two things: initializing the local state (this.state) and binding event handler methods to the component instance.

render(): The only mandatory method in a class component. It's responsible for returning the JSX elements to be rendered to the DOM.

componentDidMount(): This method runs immediately after the component has been rendered to the DOM for the first time. It is the ideal place for:

Making API calls to fetch initial data.

Setting up subscriptions or timers.

Manually interacting with the DOM.

**2. Updating Phase** 
This phase begins when a component's state or props change. The methods are called in this order:

render(): React calls render() again to determine what changes need to be made to the DOM based on the new state or props.

componentDidUpdate(prevProps, prevState): This method runs immediately after an update occurs. It's a great place to perform side effects in response to a state or prop change, such as fetching data based on a new prop value.

**3. Unmounting Phase**
This is the final phase when a component is about to be removed from the DOM.

componentWillUnmount(): This method is called just before a component is completely destroyed and unmounted from the DOM. It's the perfect place to perform any necessary cleanup, such as:

Canceling any ongoing network requests.

Clearing timers or intervals.

Removing event listeners.
Performing cleanup is crucial for preventing memory leaks.

![React Lifecycle Methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)

**The Modern Alternative: `useEffect Hook`**
Functional components and the useEffect Hook have replaced the need for class components and their lifecycle methods. useEffect consolidates the functionality of componentDidMount, componentDidUpdate, and componentWillUnmount into a single, more intuitive API.

Class Method	useEffect Hook Equivalent
`componentDidMount()`	useEffect(() => { ... }, [])
`componentDidUpdate()`	useEffect(() => { ... }, [dependencies])
`componentWillUnmount()`	useEffect(() => { return () => { ... } }, [])


