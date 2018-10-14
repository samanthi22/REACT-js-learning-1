const firstName = "Samanthi";
const lastName = "Jinadasa";

const val = 42

const arr = [
    'string',
    42,
    function() { console.log('hi')},
    ]
    
    // function gets executed first
    // then string
    // then 42
    // inner then outer
    
    // false, NAN, undefined, null, falsey values
    
    // typecasting? coercion
    const x = 42;
    const explicit = String(x);
    const implicit = x
    typeof x
    
    // == vs. ===
    // coerces the types
    // requires equivalent types
    
    console.log(typeof x);
    console.log(typeof null)
    const o = new Object()
    o.firstName = 'Jordan'
    o.lastName = 'Hayashi'
    o.isTeaching = true
    o.greet = function() { console.log('hi!') }
    
    const o2 = {}
    o.firstName = 'Jordan'
    o['lastName'] = 'Hayashi'
    const key = 'isTeaching'
    o[key] = true
    o['greet'] = function() {
        console.log('hi!');
    }
    
    const o3 = {
        1: 'test',
        firstName: 'Jordan',
        lastName: 'Hayashi',
        isTeaching: true,
        greet: function() {
            console.log('hi!');
        },
        address: {
            street: 'Main St.',
            number: 123,
        },
    }
    
    console.log(o3.address.number);
    o3.address['number']
    
    
    
    
    arr[2]()
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    // what should it output??
    // hi
    // string
    // 42
    
    const o37 = {
        a: 'a',
        b: 'b', 
        obj: {
            key: 'key', 
        },
    }
    
    console.log(o37);
    
    const o4 = o37;
    
    o37.a = 'new value'
    
    console.log(o37.a);
    
    const o38 = Object.assign({}, o)
    
    o38.a = 'new value'
    
    console.log(o38.a)
    
    
    function deepCopy(obj) {
        // check if vals are objects
        // if so, copy that object (deep copy)
        // else return the value
        
        const keys = Object.keys(obj)
        const newObject = {}
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            if(typeof obj[keys[i]] == 'object') {
                newObject[key] = deepCopy(obj[key])
            } else {
                newObject[key] = obj[key]
            }
        }
        return Object.assign({}, obj)
    }

const str = 'string'
str.toUpperCase()
arr
arr.__proto__

    
    
    

// JS will automatically "box" (wrap) primitive values so you have access to methods
// 42.toString();
// errors
const x1 = 42;
x1.toString();
x1.__proto__;
x1 instanceof Number;
// the variable is designed by the line that it was created.
num = 42;
num.toString()
Number.prototype.toString = function() { return "100" }
num.toString()
console.log(num)

// const thisIsAConst = 50
// thisIsAConst = 51
// thisIsAConst++
// let thisIsALet = 51

// reference object not defined
// obj.a = 'a'

const thisIsAConst = 50
// thisIsAConst++ // error
const constObj = {}
constObj.a = 'a'

let thisIsALet = 51
let thisIsALet2 = 50

// thisIsALet = 51 
// errors!

// const or let variable does not exist
// var variable exists

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAWar = 51
var thisIsAVar = 'new value!'

console.log

// creates variable globally
const thisIsNotHoisted = function() {
    console.log('should this be hoisted')
}

// closure,

var thisIsNotHoisted2 = function() {
    console.log('should this be hoisted')
}

window
const x99 = 'this is a new variable'
window.x

var y = 'this is a new variable'
window.y
'this is a new variable'


