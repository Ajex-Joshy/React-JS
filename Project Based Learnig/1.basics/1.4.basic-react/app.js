const heading = React.createElement("h1", {id: "heading"}, "Hello World") // {} is used to give attributes 
// here we given id attribute like wise we can give any attributes
// This is actually creating an object (React element)
const root = ReactDOM.createRoot(document.getElementById("root")); 
console.log(heading);
console.log(root);
root.render(heading);
// what this is doing in the sense first it will convert the object (heading) to html elements then it will 
// insert in the root

// Step-by-step explanation:
// 	1.	React.createElement(...)
//         •	Creates a React element (not a real DOM node).
//         •	In this case, it makes an object that represents:
//             <h1 id="heading">Hello World</h1>
//         •	This object contains:
//         •	type → "h1"
//         •	props → { id: "heading", children: "Hello World" }
//     2.	ReactDOM.createRoot(...)
//         •	Creates a root where React will control the DOM.
//         •	You pass document.getElementById("root"), which is the <div id="root"></div> in your index.html.
//         •	The root object is a special container React manages.

// so under the hood react is displaying content using javascript not using plain html
// This has many advantages that made react popular
// Dynamic content
// Html is static but React lets you render content based on data, conditions, and state changes. 
// and many other advantages which you will learn later

// Instead of writing static HTML, React allows us to generate, update, and manage the UI dynamically using 
// JavaScript and components. This makes it possible to build large, interactive apps that remain efficient 
// and maintainable.



