import Benchmark from "benchmark"
import benchmarkedFns from "./benchmarkedFns"

// add tests
let benchmarkedFnsArray = Array.isArray(benchmarkedFns) ? benchmarkedFns : [benchmarkedFns];

benchmarkedFnsArray.forEach((benchmarkedSpec) => {
	const suite = new Benchmark.Suite();
	
	suite
		.add(benchmarkedSpec)
		.on("complete", function () {
			for (let index = 0; index < this.length; index++) {
				const benchmark = this[index];
				console.log(benchmark.name);
				console.log(`Mean:    ${Math.round(benchmark.stats.mean * 1000)} ms`);
				console.log(`Std Dev: ${Math.round(benchmark.stats.deviation * 1000)} ms`);
				console.log("");
			}
		})
		.run({ 'async': true });
	});