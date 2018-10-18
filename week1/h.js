// copy o
const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    },
}

// copy o
// Object.assign({}, o)

const o2 = Object.assign({}, o)
o2.a = 'new value'
console.log(o.a)

// prototype inheritance
// arr.push
// each object has a reference to it's prototype
// prototype chain

// array takes priority
// arr.__proto__
// large object with a bunch of different functions
// push

function deepCopy(obj) {
    // copy object obj
   const keys = Object.keys(obj)
   
   const newObject = {}
   
   for (let i =0; i < keys.length; i++) {
       const key = keys[i]
       if(typeof obj[keys[i]] == 'object') {
       }
       }
   
   return Object.assign({}, obj)
   //arr.__proto__.__proto__
}

// wrappers

