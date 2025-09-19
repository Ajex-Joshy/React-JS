import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact.jsx";
import "@testing-library/jest-dom";

// test("should load contact component", () => {
//   render(<Contact />);
//   const heading = screen.getByRole("heading");

//   expect(heading).toBeInTheDocument();
// });

// test("should load two input box", () => {
//   render(<Contact />); // render
//   const inputBoxes = screen.getAllByRole("textbox"); // query
//   console.log(inputBoxes); // this will be array of 2 fiber nodes of input boxes
//   expect(inputBoxes.length).toBe(2); // assertion
// });

// we can also group it using describe

describe("contact page testcases", () => {
  test("should load contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load two input box", () => {
    render(<Contact />); // render
    const inputBoxes = screen.getAllByRole("textbox"); // query
    // console.log(inputBoxes); // this will be array of 2 fiber nodes of input boxes
    expect(inputBoxes.length).toBe(2); // assertion
  });
});
