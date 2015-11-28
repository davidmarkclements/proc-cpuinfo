# proc-cpuinfo

Get /proc/cpuinfo as an object

Only relevant to Linux systems (probably, def not Win/OS X)

## Install

```sh
npm i --save proc-cpuinfo
```

## Usage

```js
var cpuinfo = require('proc-cpuinfo')()
```

If the system doesn't have /proc/cpuinfo an empty object will be returned.

## How it works

* Loads /proc/cpuinfo synchronously *at require time* 
  * Synchronous ops at initialisation time are best practice
* Exports function, when called, converts cpuinfo format into an object