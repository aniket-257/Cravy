import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should render Contact component with correct heading text", () => {
  render(<Contact />);
  const headingElement = screen.getByText("Contact Us Page 📃");
  expect(headingElement).toBeInTheDocument();
});

test("Should render Contact form with input fields and submit button", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("Your Name");
  const messageInput = screen.getByPlaceholderText("Your Message");
  const submitButton = screen.getByRole("button", { name: "Submit" });

  expect(nameInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
