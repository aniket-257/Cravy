import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>React Element (JS Object) => Create HTML Element using Render method
let heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Aniket using core React 🚀"
);

// * JSX is a XML or HTML like struture inside JS
// * JSX is not a HTML inside JS
// * JSX also return a React Element Object
// * JSX is not a React
// * heading and jsxHeading objects are same
// * JSX is not a pure JS Syntax -> JS Engines can't understand JSX code
// * JSX (Transcompiled before it reaches to JS Engine) => PARCEL (BABEL) task
// * JSX => Babel transpiled it to React.createElement => React Element (JS Object) => Create HTML Element using Render Method
// * JSX attributes are in camelCase (in HTML we have tabindex but in JSX we write tabIndex)

// React Functional Component => Normal JS Which return JSX code
let Heading = () => {
  return <h3>I am Heading Component 🚀</h3>;
};

// React Element => JSX code
let jsxHeading = (
  <div id="heading">
    <Heading /> Hello Aniket using JSX 🚀
  </div>
);

// Component Composition => Component inside Component
// {JS inside curly braces}
let Title = () => (
  <div className="title">
    <h2>{10 * 200}</h2>
    <h2>{console.log("Javascript inside JSX")}</h2>
    <h1>I am Title Component ✨</h1>
    {Heading()}
    <Heading />
    <Heading></Heading>
    {jsxHeading}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // React Element Rendering Syntax
root.render(<Title />); // React Component Rendering Syntax
