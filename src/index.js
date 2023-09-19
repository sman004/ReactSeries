import React from "react";
import ReactDom from "react-dom";

//declaring full name  variables
const fName = "Suleiman";
const lName = "Ibrahim";
const fullName = fName + " " + lName;

//get current date for copyright
const d = new Date();
let currentYear = d.getFullYear();

//display to my screen
ReactDom.render(
  <div>
    <h1> List of Fruits I love </h1>
    <ul>
      <li>Pineapple </li>
      <li> Orange </li>
      <li> Mango</li>
    </ul>
  </div>,
  document.getElementById("rt")
);

ReactDom.render(
  <div>
    <p> This website is created by {fullName} </p>
    <p> Copywright {currentYear} </p>
  </div>,
  document.getElementById("root")
);
