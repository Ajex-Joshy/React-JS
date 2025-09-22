// now we will start writing integration test cases
// so here we will test the flow of search functionality
// so first lets render the body component

import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
/*
it("should render Body compoent with search badr", () => {
  render(<Body />);
});
*/

// you will get [ReferenceError: fetch is not defined], this is because
// we are rendering our Component inside our js-dom not in the browser.
// and we know that fetch is a function that is given to us by browser an not by javascript
// so the js dom does not has the fetch function
// so what we will do in the sense we will implement our own fetch which will behave exactly as original fetch function

// so the fetch function returns us a promise and the data will be inside json which again returns a promise and when it is
// resolved we get the data
// this data will contain the actual fetch data, so we will give it as mock data

// lets implement it

import { FETCH_DATA } from "../mocks/fetchData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(FETCH_DATA);
    },
  });
});

// jest.fn() is a Jest utility function used to create a mock function (also called a spy).
// It lets you track how a function is called and optionally define what it should return.

// Think of it as a fake function that:
// 	•	Records information about calls (arguments, return values, instances).
// 	•	Can replace real implementations during tests.
// 	•	Can simulate responses for functions you don’t want to run for real (like API calls, DB queries, or timeouts).

// 1.	global.fetch
// •	In tests, you attach a fake fetch function to the global object (like window in browser).
// •	This ensures that whenever your component calls fetch(...), it actually uses your mocked function.
// 	2.	Return a Promise
// •	The real fetch returns a Promise.
// •	So your mock also returns a Promise.resolve(...).
// 3.	Inside the Promise
// •	Normally, fetch resolves to a Response object, which has methods like .json().
// •	That’s why you return an object { json: () => ... }.
// 4.	json() method
// •	The .json() method itself also returns a Promise.
// •	So, you mock it with another Promise.resolve(FETCH_DATA).
// •	This way, when your component calls:

/*
it("should render Body compoent with search badr", () => {
  render(<Body />);
});
*/

// When your component has custom state changes, timers, async code, or side effects, you often need to wrap those updates
// inside act() in your tests.

// This is because React batches updates asynchronously, and without act() your assertions might run before React finishes
// applying state updates, leading to warnings or flaky tests.

import { act } from "react";
// it("should render Body compoent with search bar", async () => {
//   await act(async () => render(<Body />));

//   const searchBtn = screen.getByRole("button", { name: "Search" });
//   expect(searchBtn).toBeInTheDocument();

//   const inputBox = screen.getByTestId("search-box");
//   expect(inputBox).toBeInTheDocument();

// fireEvent.change(inputBox, { target: { value: "burger" } });
// fireEvent.click(searchBtn);

//   const resCards = screen.getAllByTestId("res-cards");
//   console.log(resCards);
//expect(resCards.length).toBe(1);
// });

import { render, screen } from "@testing-library/react";
import ResCard from "../components/ResCard";

const mockRes = {
  info: {
    id: "1",
    name: "Test Restaurant",
    cuisines: ["Italian", "Pizza"],
    avgRating: "4.5",
    costForTwo: "₹500",
    cloudinaryImageId: "abc123",
  },
};

test("renders ResCard", () => {
  render(<ResCard resData={mockRes} />);
  const card = screen.getByTestId("res-card");
  expect(card).toBeInTheDocument();
});
