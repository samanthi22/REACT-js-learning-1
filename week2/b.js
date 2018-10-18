function makeFunctionArray() {
    const arr = []
    
    for (var i = 0; i < 5; i++) {
        arr.push(function() { console.log(i) })
    }
    // console.log(i)
    // let to end of the code block
    // it does not exist
    return arr
}

const functionArr = makeFunctionArray()

functionArr[0]()

// scope, closures
// 5 as opposed to 0
