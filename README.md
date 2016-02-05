# react-server-perf-tricks

This repo contains the code for the benchmark used in my talk ["Speed Up Your React Server With These 6 Weird Tricks"](http://www.youtube.com/watch?feature=player_embedded&v=PnpfGy7q96U).

<a href="http://www.youtube.com/watch?feature=player_embedded&v=PnpfGy7q96U"><img src="http://img.youtube.com/vi/PnpfGy7q96U/0.jpg" alt="YouTube: Speed Up Your React Server With These 6 Weird Tricks" width="240" height="180" border="10"></a>

In the talk, I presented a small ReactJS benchmark, and I edited the code in stages to improve the benchmark performance. All 7 versions of the code are present in this repo as different branches, from stage-0 (no optimizations at all) to stage-6 (all optimizations from the talk applied). Note that each stage includes the tricks from the previous stages.

## How to install

```
git clone https://github.com/aickin/react-server-perf-tricks.git
npm install
```

## How to run

Checkout the stage you want to run and then type `npm run benchmark`. For example, if you want to run stage 3 (Babel Transforms):

```
git checkout stage-3
npm run benchmark
```
