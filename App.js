import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => (
  <h1 className="namaste-heading" tabIndex="8">
    Namaste React using JSX
  </h1>
);
console.log(JsxHeading);

const HeadingComponent = () => (
  <div className="container">
    <JsxHeading />
    <h1> Namaste React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
