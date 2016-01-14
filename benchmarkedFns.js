import React from "react"
import ReactDOMServer from "react-dom/server"
import RecursiveDivs from "./RecursiveDivs"

const depth = 4, breadth = 11;

const render = () => {
  ReactDOMServer.renderToString(<RecursiveDivs depth={depth} breadth={breadth}/>);
}

export default [{name: "Production Mode", fn:render}];