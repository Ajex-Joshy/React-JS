There are different types of testing but here we are going to study

### Developer Testing / DevTest

1. Mannual testing
   not efficient
   one line of code can make bugs anywhere in our app bcz all are dependent each other
   we should be carefull while writting each line of code

2. we can write code to test our app

- There are 3 types of testing
  - Unit Testing
  - Integration Testing
  - End to End Testing (e2e)

lets deep dive

**1. Unit Testing**
It means we test our react componenet in isolation
we will check each component by component

**2. Integration Testing**
Integration testing is a type of software testing where you test how different units (functions, modules, or components) work together as a group.

**3. End to End Testing**
End-to-End (E2E) testing is a type of software testing that checks the entire flow of an application from start to finish, just like a real user would use it.

we will use tools like Cypress, selenium etc..

Now our App to be tested we need to setup our app for testing and install libraries

To write testcases we use
React Testing Library (it uses jest)
`npm i -D @testing-library/react`

we also need to install jest
`npm i -D jest`

The jest uses babel and for that we have to install
`npm install -D babel-jest @babel/core @babel/preset-env`

now we have to configure babel
for that create this file in the root of the application

babel.config.js

```js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

but here an another problem occurs
The parcel already uses babel for transpiling and it has its babel configuration this will conflict with the configuration we set up

parcel by default has its own babel configuration
and suppose if we have to work our custom configuration we should make parcel ignore our custom babel.config.js. so that it wont conflict. To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript

we will create a new file  
.parcelrc

```js
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

now when we do this configuration the babel.config.js will not conflict with the parcel

now we have setup jest configuration
`npx create-jest@latest`
it will ask some questions answer it
I will give the hints of answers
we are not using typescript
test environment - jsdom
so this means our code will be tested in jsdom which is browser like environment
we can also test in node environment
we need the coverage reports
we will choose babel as provider
automaticaly clear everything before test - yes

now install jsdom library
`npm install -D jest-environment-jsdom`

so after completing this we have setup our app to work with test cases
To run test case we will write a script
`"test": "jest"`

and then hit
`npm run test`

if it show no testcases found you have successfully setup your project to run test cases

Now its time to write testcases
for that we will write all test cases in
`__test__` folder
so all the files in this folder is considered as test cases
we write file with extension .test.js or .spec.js
eg: Header.test.js, Body.spec.js

also just for information
`__name__ ` is know as dunder (name is just a demo )
which are basically reserved keywords

so now we actually make our first test case
let make it simple
first we will create a js function to find sum
then we will write testcase for it

`sum.js`

```js
export function sum(a, b) {
  return a + b;
}
```

`__test__/sum.test.js`

```js
import { sum } from "src/sum.js";

// test("", () => {})
// this is the syntax for writing test case
// it will take description as the first argument
// and a callback function as the 2nd argument

test("sum function should calculate the sum of two number", () => {
  const result = sum(3, 4);

  // assertion
  expect(result).toBe(7); // This validate the result
  // if the result is not 7 the test case would fail
});
```




