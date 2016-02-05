import React from "react"
import ReactDOMServer from "react-dom-stream/server"
import LRURenderCache from "react-dom-stream/lru-render-cache"
import RecursiveDivs from "./RecursiveDivs"
import TimingStream from "./TimingStream"

const depth = 4, breadth = 11;

const cache1 = new LRURenderCache(), cache2 = new LRURenderCache();

const render1 = (deferred) => {
  const stream = ReactDOMServer.renderToString(<RecursiveDivs depth={depth} breadth={breadth}/>, {cache: cache1});
  stream.pipe(new TimingStream())
  	.on("start", () => {
  		deferred.resolve();
  		stream.unpipe();
  	});
}

const render2 = (deferred) => {
  const stream = ReactDOMServer.renderToString(<RecursiveDivs depth={depth} breadth={breadth}/>, {cache: cache2});
  stream.pipe(new TimingStream())
  	.on("finish", () => {
  		deferred.resolve();
  		stream.unpipe();
  	});
}

export default [
	{name: "Streaming TTFB with cache", defer: true, fn:render1},
	{name: "Streaming TTLB with cache", defer: true, fn:render2}
];
