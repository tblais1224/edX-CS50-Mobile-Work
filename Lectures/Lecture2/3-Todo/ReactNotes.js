class Todo {
  constructor(configuration) {
    this.text = configuration.text || 'New TODO'
    this.checked = false
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.checked} />
        <span>{this.text}</span>
      </li>
    )
  }
}

//REACT 
//allows for declarative views that "react" to changes in data

//imperative vs declarative
//How vs What
// Imperative programming outlines a series of steps to get to what you want for example building a guitar step by step

// Declarative programming just declares what you want for example creating external components and then added them to app.js in react is a declarative program

//react works through Reconciliation: the process which react syncs app state changes to the DOM
      //reconstructs virtual DOM, compares it to the DOM, changes only whats different


// JSX   :   an XML-like syntax JS ExtensionScriptApis, transpiles javascript
//lowercase tags are html, uppercase are custom components (components are functions that return a node)


//Props
//object passed to component, can be any JS value unlike HTML where it must be a string
//prop changes causes recomputation of returned node ("render"), setTimeout count++ in props
// http://codesandbox.io         lets you write react and render it live

import React from "react";
import {render}from "react-dom";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{props.count}</h2>
    </div>
  );
}

let count = 0
const rootElement = document.getElementById("root");
//every second add 1 to the count. this shows how changed props re renders the html
setInterval(() => render(<App count={count++} />, rootElement), 1000);


//State
//this.state is a class property on component instance
//adds internally managed configuration
// updated by this.setState()
//state changes cause rerender
