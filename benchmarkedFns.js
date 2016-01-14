import React from "react"
import ReactDOMServer from "react-dom/server"
import RecursiveDivs from "./RecursiveDivs"

const depth = 4, breadth = 11;

console.log(ReactDOMServer.renderToString(<RecursiveDivs depth={depth} breadth={breadth}/>).length);

const render = () => {
  ReactDOMServer.renderToString(<RecursiveDivs depth={depth} breadth={breadth}/>);
}

export default [{name: "Baseline", fn:render}];