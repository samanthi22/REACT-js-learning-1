function doSomething(callback) {
    console.log(callback(1))
}

// what type is that callback?
// function, if it's getting invoked.
doSomething(console.log)