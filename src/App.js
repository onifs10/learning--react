import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
const App = () => {
  return React.createElement(
    "div", // html-element  || component created with react
    { id: "test" }, // attributes
    React.createElement("h1", {}, "Testing"), // children of the component
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "sdsfs",
    }),
    React.createElement(Pet, {
      name: "luna2",
      animal: "snake",
      breed: "sdsfs",
    }),
    React.createElement(Pet, {
      name: "luna3",
      animal: "cat",
      breed: "mixed",
    })
  );
};
render(React.createElement(App), document.getElementById("root"));
