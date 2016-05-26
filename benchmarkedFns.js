// import React from "react"
// import ReactDOMServer from "react-dom/server"
import React from "react/dist/react.min"
const ReactDOMServer = React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
import RecursiveDivs from "./RecursiveDivs"
import RecursiveDivsNoAttrsNoEscape from "./RecursiveDivsNoAttrsNoEscape"
import RecursiveDivsNoAttrsEscape from "./RecursiveDivsNoAttrsEscape"
import RecursiveDivsAttrsNoEscape from "./RecursiveDivsAttrsNoEscape"
import RecursiveDivsAttrsEscape from "./RecursiveDivsAttrsEscape"
import TimingStream from "./TimingStream"

const depth = 4, breadth = 11;

let nodeCount = 0;

for (let i = 0; i <= depth; i++) {
  nodeCount += Math.pow(breadth, i);
}
// console.log(`Depth: ${depth}`);
// console.log(`Breadth: ${breadth}`);
// console.log(`Node count: ${nodeCount}`);
// const stringLength = ReactDOMServer.renderToString(<RecursiveDivs depth={depth} breadth={breadth}/>).length
// console.log(`String count: ${stringLength} bytes` + '\n');

// const render1 = (deferred) => {
//   const stream = ReactDOMServer.renderToStream(<RecursiveDivs depth={depth} breadth={breadth}/>);
//   stream.pipe(new TimingStream())
//   	.on("start", () => {
//   		deferred.resolve();
//   		stream.unpipe();
//   	});
// }
//
// const render2 = (deferred) => {
//   const stream = ReactDOMServer.renderToStream(<RecursiveDivs depth={depth} breadth={breadth}/>);
//   stream.pipe(new TimingStream())
//   	.on("finish", () => {
//   		deferred.resolve();
//   		stream.unpipe();
//   	});
// }

const render3 = () => {
  ReactDOMServer.renderToString(<RecursiveDivsNoAttrsNoEscape depth={depth} breadth={breadth}/>);
}

const render4 = () => {
  ReactDOMServer.renderToString(<RecursiveDivsNoAttrsEscape depth={depth} breadth={breadth}/>);
}

const render5 = () => {
  ReactDOMServer.renderToString(<RecursiveDivsAttrsNoEscape depth={depth} breadth={breadth}/>);
}

const render6 = () => {
  ReactDOMServer.renderToString(<RecursiveDivsAttrsEscape depth={depth} breadth={breadth}/>);
}

export default [
	// {name: "Streaming TTFB", defer: true, fn:render1},
  // {name: "Streaming TTLB", defer: true, fn:render2},
  {name: "No Attr No Escape", fn:render3},
  {name: "No Attr Escape", fn:render4},
  {name: "Attr No Escape", fn:render5},
  {name: "Attr Escape", fn:render6},
];
