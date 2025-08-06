import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Component Tests", () => {
  it("Should render Contact component with correct heading text", () => {
    render(<Contact />);
    const headingElement = screen.getByRole("heading");
    const headingElementText = screen.getByText("Contact Us Page 📃");
    expect(headingElement).toBeInTheDocument();
    expect(headingElementText).toBeInTheDocument();
  });

  it("Should render Contact form with input fields and submit button", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Your Name");
    const messageInput = screen.getByPlaceholderText("Your Message");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    expect(nameInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Should load 2 input fields in Contact form", () => {
    render(<Contact />);
    const inputFields = screen.getAllByRole("textbox");
    expect(inputFields.length).toBe(2);
  });
});
