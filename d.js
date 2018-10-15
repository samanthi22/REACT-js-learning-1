function deepCopy(obj) {
    const keys = Object.keys(obj)
    
    const newObject = {}
    
    for (let i =0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'a new value'
    },
}

const o3 = deepCopy(o)

o.obj.key = 'new key!'
console.log(o3.obj.key)

arr = [2, 3, 4, 5]
arr.push('value')
arr
console.log(arr)
console.log(arr.__proto__)

// 42.toString() - error
const x = 42;
x.toString()
x.__proto__ // [Number: 0]
x instanceof Number
console.log(x.__proto__)

Number.prototype.toString = function() { return "100" }
num = 42
num.toString()
num.toString()
console.log(num)

function thisIsHoisted() {
    console.log('hoisted')
}

const thisIsNotHoisted = function() {
    console.log('not hoisted')
}

// closure

