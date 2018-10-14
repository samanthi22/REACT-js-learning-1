// 
const firstName = 'Jordan';
const lastName = 'Hayashi';


const val = 42;

const arr = [
    'string', 
    42, 
    function() { console.log("hi") }
]

arr[2]()

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// get type of null
// goes from inner to outer
// implicit, explicit coersion


// 0 is truthy

//typecasting? coercion

// if it's not a primitive value it's an object

// == coerces the types
// === requires equivalent types
const x = 42;

console.log(typeof x)
console.log(typeof null)

// falsey
// undefined
// null
// false
// NaN

// truthy 
// {}
// []
// everything else


const o = new Object();
o.firstName = "Jordan"
o.lastName = 'Hayashi'
o.isTeaching = true
o.greet = function() {
    console.log('hiiiii!')
}

const o2 = {}
o.firstName = 'Jordan';
o['lastName'] = 'Hayashi';
console.log(o2)
const key = 'isTeaching'
o[key] = true
o['greet'] = function() {
    console.log('hi!')
}
const o3 = {
    firstName: 'Jordan',
    lastName: 'Hayashi'
}

console.log(o3)

const o = {
    a: 'a',
    b: 'b',
}

const o42 = o
o.a = 'new value'

console.log(o42.a)