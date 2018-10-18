// creates a closure
// immediately invoked nameless function expression
// if-y
// doesn't add or modify the global object

// closure
// wraps var message in a closure
// instead declare an anonmynous function that gets invoked immediately at line 4
const sayHello = (function () {
    const arr = []
    
    for (var i = 0; i < 5; i++) {
        arr.push(function() { console.log(i) })
    }
    // console.log(i)
    // let to end of the code block
    // it does not exist
    return arr
})()

const functionArr = makeFunctionArray()

functionArr[0]()