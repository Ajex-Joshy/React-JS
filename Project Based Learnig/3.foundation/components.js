import ReactDOM from "react-dom/client";
// Everything in react is a component
// There are two types of a components in react
// Class Based components - OLD
// Functional components - Modern
//      - Functional component is a function that returns a JSX code (react element)
// we should write the first letter of Component in capital
const Heading = () => {
    return <h1 className="head">This is a heading</h1>
}
// This is same as

const Heading2 = () => <h1 className="head">This is a heading</h1>
// bcz if we there is only one line it means it returns it (only in arrow function)

const Heading3 = () => (
    <h1 className="head">This is a heading</h1>
);
// This is also the same 

const heading4 = (
    <h1 className="head">This is a heading</h1>
);
// This is a React element not component


// To render a react component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)
