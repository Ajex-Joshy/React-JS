import React from "react"; // we are importing this from node_modules
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        React.createElement("h1", {id: "heading"}, "Hello World")
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

// if we are importing react from node_modules then should use a bundler to ignite our code, here we use 
// parcel which is a beast that do a lot of operations
// To ignite our app npx parcel index.html (dev build)