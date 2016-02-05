import React from "react"
import ReactDOMServer from "react-dom-stream/server"
import RecursiveDivs from "./RecursiveDivs"
import TimingStream from "./TimingStream"

const depth = 4, breadth = 11;

const render1 = (deferred) => {
  const stream = ReactDOMServer.renderToString(<RecursiveDivs depth={depth} breadth={breadth}/>);
  stream.pipe(new TimingStream())
  	.on("start", () => {
  		deferred.resolve();
  		stream.unpipe();
  	});
}

const render2 = (deferred) => {
  const stream = ReactDOMServer.renderToString(<RecursiveDivs depth={depth} breadth={breadth}/>);
  stream.pipe(new TimingStream())
  	.on("finish", () => {
  		deferred.resolve();
  		stream.unpipe();
  	});
}

export default [
	{name: "Streaming TTFB", defer: true, fn:render1},
	{name: "Streaming TTLB", defer: true, fn:render2}
];
