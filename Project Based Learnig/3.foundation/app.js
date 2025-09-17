import React from "react";
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
    "h1", 
    {id: "heading"}, 
    "Hello World"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
// This is how we create react element using core react

const heading2 = <h1 id="heading">Hello World from JSX</h1>

// This is how we create react element using JSX

// JSX is not react is not HTML
// It is HTML like syntax
// JSX is just a syntax sugar for React.createElement(). React will convert JSX into 
// React.createElement() under the hood.

console.log(heading1);
// {
//     "type": "h1",
//     "key": null,
//     "props": {
//         "id": "heading",
//         "children": "Hello World"
//     },
//     "_owner": null,
//     "_store": {}
// }
console.log(heading2);
// {
//     "type": "h1",
//     "key": null,
//     "props": {
//         "id": "heading",
//         "children": "Hello World"
//     },
//     "_owner": null,
//     "_store": {}
// }
console.log(heading1 == heading2);
// false

// why this is false even though both are same
// in JS two objects are never equal unless they reference the exact same object (memory location)


// •	Browsers cannot understand JSX.
// •	JSX is not valid JavaScript.
// •	Babel is a transpiler: it converts modern JS + JSX into plain JavaScript the browser
//      understands.


// React + JSX code 
//    ↓ (Babel transpiles JSX to JS)
//    ↓ (Parcel bundles JS + dependencies)
//    ↓ (Browser executes JS)
//    ↓ (ReactDOM renders React elements into actual DOM)

// so babel transpiles JSX to react (here parcel automatically calls )
// Parcel automatically runs Babel to transpile JSX and modern JS syntax.

const para = <p className="para" tabIndex="1">This is a paragraph.</p>
// Note 
// if we have to give attributes to elemnts in JSX give it in camel case

// if we are writing JSX in multiple lines it is mandatory to write inside ()

const paras = (
    <p className="para" tabIndex="1">This is a paragraph.</p>,
    <p className="para" tabIndex="1">This is a paragraph.</p>
)
