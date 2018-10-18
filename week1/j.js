// set an anonymous function to a constant
// that constant is not created.

const thisIsAConst = 50

thisIsAConst++

// type error: assignment to constant variable

const constObj = {}
constObj.a = 'a'

// different errors

let thisIsALet = 51

// not defined

var thisIsAConst = 51
// type error not hoisted.

// declared but not initialized.
// not set equal to anything until later

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 'new value!'

console.log(thisIsAVar)

// global object
// keys or methods on the global object
// window


// const let, 

// closure
// explicit wrap it with the type that I want
// implicit rely on javascript

const val = 42
const arr = [
    'string',
    42,
    function() { console.log('hi!')
    ]
