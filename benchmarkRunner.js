import Benchmark from "benchmark"
import benchmarkedFns from "./benchmarkedFns"

// add tests; can be a single test or an array of tests.
let benchmarkedFnsArray = Array.isArray(benchmarkedFns) ? benchmarkedFns : [benchmarkedFns];

const suite = new Benchmark.Suite();

benchmarkedFnsArray.forEach((benchmarkedSpec) => {
	suite.add(benchmarkedSpec);
})

suite
.on("complete", function () {
	for (let index = 0; index < this.length; index++) {
		const benchmark = this[index];
		console.log(benchmark.name);
		console.log(`Mean:    ${Math.round(benchmark.stats.mean * 10000) / 10} ms`);
		console.log(`Std Dev: ${Math.round(benchmark.stats.deviation * 10000) / 10} ms`);
		console.log("");
	}
})
.run({ 'async': true });
