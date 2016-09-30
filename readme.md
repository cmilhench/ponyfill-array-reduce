# ponyfill-array-reduce 
[![Build Status](https://travis-ci.org/cmilhench/ponyfill-array-reduce.svg?branch=master)](https://travis-ci.org/cmilhench/ponyfill-array-reduce)

> ES6 [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install ponyfill-array-reduce --save
```


## Usage

```js
var reduce = require('ponyfill-array-reduce');
[4, 6, 7, 12].reduce(function(a, b) {
  return a + b;
});
//=> 29
```

```js
var reduce = require('ponyfill-array-reduce');
[[4, 6], [7, 12]].reduce(function(a, b) {
  return a.concat(b);
});
//=> [4, 6, 7, 12]
```


## License

MIT © [Colin Milhench](http://milhen.ch)
