import UserFunc from "./UserFunc";
import UserClass from "./UserClass";
import { Component, useEffect } from "react";

// const About = () => {
//   return (
//     <div>

//       <h1>About Us</h1>
//       <UserFunc
//         type={"Funtional Component"}
//         name={"Ajex Joshy"}
//         place={"Thrissur"}
//       />
//       <UserClass
//         type={"Class Component"}
//         name={"Ajex Joshy"}
//         place={"Thrissur"}
//       />
//     </div>
//   );
// };

class About extends Component {
  constructor() {
    super(); // this should be called (must)
    this.state = {
      name: "unknown",
      avatar_url: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ajex-Joshy");
    const json = await data.json();
    const { name, avatar_url } = json;
    this.setState({
      name: name,
      avatar_url: avatar_url,
    });
  }

  render() {
    const { name, avatar_url } = this.state;
    return (
      <div>
        <h1 className="text-center text-3xl font-bold p-4">About Us</h1>
        <UserFunc
          type={"Funtional Component"}
          name={"Elon Musk"}
          place={"USA"}
          avatar_url={"https://avatars.githubusercontent.com/u/47338871?v=4"}
        />
        <UserClass
          type={"Class Component"}
          name={name}
          avatar_url={avatar_url}
          place={"Thrissur"}
        />
        <UserClass
          type={"Class Component"}
          name={"Nikhil Kilivayil"}
          place={"Kochi"}
          avatar_url={"https://avatars.githubusercontent.com/u/2761616?v=4"}
        />
      </div>
    );
  }
}

export default About;

// componentDidMount() will called after the component is successfully rendered

// About.jsx:27 parent constructor called
// About.jsx:34 parent render called
// UserClass.jsx:5 child constructor called
// UserClass.jsx:17 child render called
// UserClass.jsx:14 childDidMount called
// About.jsx:31 parent componentDidMount

// in react will we load data in the following method
// first we will render the component (loads shimmer UI immediately)
// then we make an api call
// after that we will fill the component with the data from the api

// in function component to achieve this we will use useEffect() hook
// in class component we will use componentDidMounted() to call api so that it will call api after the
// component is rendered

// so what will happen if we have multiple child components
// so the what will happen in the sense
// it will work in two phases rendering phase and then commit phase
// so first it will run the render phase of all the child component and create vdom and compare
// then it will find the minimal change
// react is doing in this fashion is to optimise the performance
// dom manipulation is the most expensive thing while updating a component
// so if we do the render and commit phase separate for each component then it will be very very expensive
// so to optimise it react will render all child component find difference then commit to dom
// this makes react faster
// so all the componentDidMount will work after the render phase (of all component)

// parent constructor called
// About.jsx:34 parent render called
// UserClass.jsx:6 Ajex Joshy child constructor called
// UserClass.jsx:17 Ajex Joshy child render called
// UserClass.jsx:6 Elon Musk child constructor called
// UserClass.jsx:17 Elon Musk child render called
// UserClass.jsx:14 Ajex Joshy childDidMount called
// UserClass.jsx:14 Elon Musk childDidMount called
// About.jsx:31 parent componentDidMount

// And when the commit phase starts react will update dom
// DOM manipulation is the most expensive thing while updating a component
// So the render phase (making vdom ) takes place in one go and commit once instead of committing individual
// component separately.

// so now lets see the component life cycles
// we have 3 life cycle
// 1. mounting
// 2. updating
// 3. unmounting

// so in mounting lifecycle
// first it will call the constructor function
// then it executes render phase of all components
// then it will commit it to dom
// then it will call componentDidMounted

// now if we add new props or update state variables setState() or forceUpdate() then it will be updating lifecycle
// here it will render
// then commit the changes
// then it will call componentDidUpdate()

// Disclaimer!
// Never ever compare react life cycle method to function component
// Don’t compare useEffect() with componentDidMount()

// if we remove or unmount a component from the dom it will execute unmounting cycle
// so just before a component unmounts componentWillUnmount() will execute
// we use this to clean up before we leave the page
// for eg if we set a setTimeout or setInterval to a particular component, we need to stop this
// while we route to other components so we use clearTimeout or clearInterval inside componentWillUnmount()

// so what we will do if we have to clean up or execute a function when the component unmounts in a
// functional component
// we can return a callback function from useEffect() hook
// useEffect(() => {
//   return () => {
//     console.log("this will be printed when the component unmounts");
//   };
// }, []);

// Why we use super(props)
// In JavaScript classes, super calls the constructor of the parent class.
// Since React.Component is the parent, calling super(props) runs the parent’s constructor with the
// props you pass.

// Why super(props) is needed in React

// When you define a constructor in a child class:
// •	If you don’t call super(props), this.props will be undefined inside the constructor.
// •	React passes props to the base React.Component class, which then assigns them to this.props.

// ✅ Rule of thumb:
// 	•	Always use super(props) when you define a constructor in a React class component.
// 	•	If you don’t need a constructor, you can skip it entirely.

// Why we can’t write async function in useEffect()
// We can’t directly make the callback of useEffect an async function because:

// 1. What React expects
// 	•	useEffect expects the callback to either return nothing or a cleanup function.
// 	•	If you write async () => { ... }, the function automatically returns a Promise.
// 	•	React would then think you’re returning a cleanup function, but it actually gets a Promise
// → which is not valid.

// . Correct way to handle async inside useEffect

// You define an inner async function and call it:

// useEffect(() => {
//   let isMounted = true;

//   const fetchData = async () => {
//     const res = await fetch("/api");
//     const data = await res.json();
//     if (isMounted) {
//       console.log(data);
//     }
//   };

//   fetchData();

//   return () => {
//     isMounted = false; // cleanup
//   };
// }, []);
