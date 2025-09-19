### React Testcases

now we will start writing unit testcases for react component

lets start with basic 
we will write a testcase to check whether a component has rendered or not 
we will check for the contact page  

but to make react testcase we have to setup some more libraries 

To render JSX we should install a library
`npm i -D @babel/preset-react `

Now we have to include @babel/preset-react inside babel.config.js to handle JSX syntax

```js
export default {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], // already we setuped
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

```

now we have to install 
`npm i -D @testing-library/jest-dom`

- By default, Jest only gives you basic matchers like toBe, toEqual, etc.
- When testing React components, we often want to assert things about the DOM (like whether an element is visible, has text, has a class, etc.).

for that we have to install 
`npm i -D @testing-library/jest-dom`
- @testing-library/jest-dom extends Jest with custom DOM matchers such as:
- toBeInTheDocument() → checks if an element is present.
- toHaveTextContent() → checks text inside an element.
- toHaveClass() → checks CSS classes.
- toBeVisible() → checks if an element is visible.

then import it
`Import “@testing-library/jest-dom”` in the document


now its time to write our first react test case
```js
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact.jsx";
import "@testing-library/jest-dom";

test("should load contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
```



### Code Breakdown

* `render`: A function used to render a React component into a virtual DOM (Document Object Model) for testing.
* `screen`: An object that provides methods for querying elements rendered by the `render` function.

* `import "@testing-library/jest-dom";`: This line imports custom Jest matchers (like `.toBeInTheDocument()`) that make it easier to write assertions about the DOM.
* `test("should load contact component", () => { ... });`: This is a test block.
    * `test(...)`: A Jest function that defines a test case. The first argument is a descriptive name for the test.
    * The arrow function `() => { ... }` contains the actual test logic.
* `render(<Contact />);`: This line renders the `Contact` component, making its elements available for querying.
* `const heading = screen.getByRole("heading");`: This line queries for an element.
    * `screen.getByRole("heading")`: This method searches the rendered component for any element that has the **ARIA role** of a "heading" (e.g., `<h1>`, `<h2>`, etc.). It will throw an error if no such element is found.
* `expect(heading).toBeInTheDocument();`: This is the **assertion**. It checks if the `heading` element found in the previous step exists within the rendered document. If it does, the test passes. If not, the test fails.


now lets test if there are two input boxes are present
```js
test("should load two input box", () => {
  render(<Contact />); // render
  const inputBoxes = screen.getAllByRole("textbox"); // query
  console.log(inputBoxes); // this will be array of 2 fiber nodes of input boxes
  expect(inputBoxes.length).toBe(2); // assertion
});
```

now if we have multiple test cases we can group it using describe

```js
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact.jsx";
import "@testing-library/jest-dom";

describe("contact page testcases", () => {
    test("should load contact component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    }); 

    test("should load two input box", () => {
        render(<Contact />); // render
        const inputBoxes = screen.getAllByRole("textbox"); // query
        console.log(inputBoxes); // this will be array of 2 fiber nodes of input boxes
        expect(inputBoxes.length).toBe(2); // assertion
    });
})
```

we can also write nested describe or multiple describe also

also instead of test we can write it 

```js
 it("should load contact component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    }); 
```

no difference in working. it is just an alias for test.