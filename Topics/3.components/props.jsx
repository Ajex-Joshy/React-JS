// Props (short for properties) are a fundamental mechanism in React for passing data from a parent component to a child
// component. They are the communication channel that allows components to be dynamic and reusable. Think of props as
// arguments you pass to a JavaScript function, but for a React component.

const Greet = (props) => {
  return <h1>Welcome {props.user.name}</h1>;
};

// we can also destructure on the fly

const Thank = ({ user }) => {
  // This is same as const {user} = props
  const { name, age } = user;
  return <h1>Thankyou {name}</h1>;
};

const App = () => {
  let loggedUser = { name: "Ajex Joshy", age: 18 };
  return (
    <>
      <Greet user={loggedUser} />
      <Thank user={loggedUser} />
    </>
  );
};

// The data passed via props is immutable from the child's perspective.

// Forwarding Props

// Prop forwarding is the pattern of passing props from one component to another deeper in the component tree. It's often
// used to pass props to a child component without having to explicitly name each one. This is commonly done using the
// JavaScript spread syntax

const parent = (props) => {
  return (
    <>
      <Child {...props} />
    </>
  );
};

// Children prop
// The children prop is a special prop that automatically collects all the content passed between a component's opening
// and closing tags. It's incredibly useful for creating flexible "wrapper" components.

// For example, a Card component can be used to wrap any content you want.

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

// children will contain

// <h1>Card heading</h1>
// <p>This is card body</p>

const Main = () => {
  return (
    <Card>
      <h1>Card heading</h1>
      <p>This is card body</p>
    </Card>
  );
};
