import { render, screen } from "@testing-library/react";
import ResCard from "../components/ResCard.jsx";
import { RES_DATA } from "../mocks/resData.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { withPromotedLabel } from "../components/ResCard.jsx";
const PromotedResCard = withPromotedLabel(ResCard);

// we will use the mock data to pass props
it("should load restaurant card with props data", () => {
  render(
    <BrowserRouter>
      <ResCard resData={RES_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText(/Chinese Wok/i);

  expect(name).toBeInTheDocument();
});

it("should load restaurant card with props data along with promoted label", () => {
  render(
    <BrowserRouter>
      <PromotedResCard resData={RES_DATA} />
    </BrowserRouter>
  );

  const lable = screen.getByText(/promoted/i);

  expect(lable).toBeInTheDocument();
});
