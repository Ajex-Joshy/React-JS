import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header.jsx";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const looginButton = screen.getByRole("button", { name: "Login" });
  expect(looginButton).toBeInTheDocument();
});

it("should render Header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});

it("should change Login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Login = screen.getByRole("button", { name: "Login" });
  fireEvent.click(Login);
  const Logout = screen.getByRole("button", { name: "Logout" });

  expect(Logout).toBeInTheDocument();
});
