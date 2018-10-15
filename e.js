// function declared at the very bottom of file available at top
// hoisting

// cannot change const
// cannot be hoisting if const
// defines as a function can be changed

// const are not available for use until declared.
// anoynomous function without a name is const then not created.

const thisIsAConst = 50
thisIsAConst++ // error!

thisIsAlsoAVariable = 'hello'


const constObj = {}
constObj.a = 'a'

let thisIsALet = 51
thisIsALet = 50

let thisIsALet = 51; // errors!

// let not declared at all, not hoisted. 
// does not assign a value
// undefined variable
// type error
// var then exists but undefined

// any function definitions just get saved in memory

var thisIsAVar = 50
// declared but not initialized until later
thisIsAVar = 51
var thisIsAVar = 'new value!'

// creates a variable 
// declare variable without let or const
// it creates is globally
thisIsHoisted()
// scope

// javascript feature?

// E6 supports const and let

function thisIsHoisted() {
    console.log('this is a function declared at the bottom of the file')
}

// final topic of the day

// var y
// is exact thing as window.y

var thisIsNotHoisted = function() {
    console.log('should this be hoisted?')
}

// semicolons optional

// lexical scoping (var) when they are declared until function ends
// block scoping const let until the next } is reached
// functions are hoisted but not lexically-scoped
// but how/why?

// closure


arr[2]()

