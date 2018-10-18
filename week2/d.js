function makeFunctionArray() {
    const arr = []
    
    // creates closure
    for (var i = 0; i < 5; i++) {
        arr.push((function(x) {
            return function() { console.log(x) }
            
        })(i))
    // let to end of the code block
    // it does not exist
    return arr
}
}

const functionArr = makeFunctionArray()
functionArr[0]()
// returns 0 as expected



