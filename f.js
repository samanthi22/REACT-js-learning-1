// overview javascript
// javascript, es6
// react, JSX
// Components, Props, State, Style
// Components, Views, User Input
// Debugging
// Data
// Navigation
// Expo components
// redux
// performance
// shipping, testing

// semicolon optional
// primitive types, boolean, number, no floats, 0, 0.1 is type Number
// string 

const firstName = "Samanthi"
const lastName = "Jinadasa"

const x = 42
// change value to a string
// explicit, implicit. "exactly what I want"
// wrap it with capital string

const val = 42

const arr = [
    'string',
    42,
    function() { console.log('hi') }
    
    ]
    
    // == coerces the types
    // === checks if types match
    
    arr[2]()
    // prints out function() { console.log('hi') }
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    
    // what does it output??
    // hi
    // string
    // 42
    // [Function]
    
    // ==
    // empty array == to false
    // typecasting? coercion
    const x1 = 42
    const explicit = String(x)
    const implicit = x + "";
    
    // empty array is truthy
    // falsey 
    
    // prototype inheritance
    // primities, null, undefined, string, boolean, number
    
    console.log(typeof x)
    
    console.log(typeof null) 
    
    typeof x
    
    // everything is cast to a string
    
    // o3.address.number 
    // didn't know exactly what we wanted out of it
    
    const o = new Object() 
    
    o.firstName = "Samanthi"
    o.lastIndex = "Jinadasa"
    o.isTeaching = true
    o.greet = function() {
        console.log('hi!')
    }
    console.log(o.firstName)
    
    console.log(o.greet[0])
    // undefined
    const o2 = {}
    
    o.firstName = "Samanthi"
    o['lastName'] = 'Jinadasa'
    const key = 'isTeaching'
    o[key] = true
    o['greet'] = function() {
        console.log('hi!')
    }
    
    const o3 = {
        1: 'test',
        firstName: 'Samanthi',
        lastName: 'Jinadasa',
        isTeaching: true, 
        greet: function() {
            console.log('hi!')
        },
        address: {
            street: 'Main St.',
            number: 123,
        },
    }
    
    console.log(o3.address)
    console.log(o3.address.number)
    // merging into a new object
    o3.address['number']
    o3.address.number
    o3.address[key]
    
    
    
    
    
    
    // still referencing that object in memory
    
    
    
    
    
    
    
    
    
