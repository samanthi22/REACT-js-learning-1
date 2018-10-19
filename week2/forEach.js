function map(arr, fn) {
    const newArr = []
    
    // every value in array runs it through a function and returns another array with return values
    arr.forEach(function(val) {
        
        newArr.push(fn(val))
    })
    
    return newArr
}

function addOne(num) { return num + 1 }

const x = [0,1,2,3]

console.log(map(x, addOne))
// [1,2,3,4]

//synchronous, async, single-threaded
function hang(secs) {
    const doneAt = Date.now() + (secs * 1000)
    while (Date.now() < doneAt) {}
}

// a function that takes a long time will cause a page to become unresponsive
hang(10)

function printOne() {
    console.log('one')
}


function printTwo() {
    console.log('two')
}

function printThree() {
    console.log('three')
}

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()

// stack
// appears on the top

function a() {
    console.log('hi')
}

function b() {
    a()
}

function c() {
    b()
}

c()
// prints "hi"