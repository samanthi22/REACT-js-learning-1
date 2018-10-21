function map(arr, fn) {
    const newArr = []
    
    // every value in array runs it through a function and returns another array with return values
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        newArr.push(fn(val))
    }
    
    return newArr
}

function addOne(num) { return num + 1 }

const x = [0,1,2,3]

console.log(map(x, addOne))
// [1,2,3,4]

function isGreaterThanOne(num) { return num > 1 }
console.log(isGreaterThanOne(100))
console.log(isGreaterThanOne(1))