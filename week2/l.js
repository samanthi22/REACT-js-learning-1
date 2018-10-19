function doSomethingAsync(callback) {
    setTimeout(function() { callback(1) }, 1000)
}

// what type is that callback?
// function, if it's getting invoked.
doSomethingAsync(console.log)

// one sec later it console.log's
// returns 1
// how do we control what we do with value
// pass in function

// callback hell
// node.js
// because asynchronous

// promise
// alleviate callback hell
// line 15
// line 8
// if error handle.
// with promises does not need to handle error in every callback
// do it once and we are done with promises



