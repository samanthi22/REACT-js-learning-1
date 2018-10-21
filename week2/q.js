const person = {
    name: 'jordan',
    greet: function() { console.log('hello, ' + this.name) },
}

// person.greet is a function

person.greet()

// this person
// this.name is 'jordan'
const friend = {
    name: 'david',
}

friend.greet = person.greet

friend.greet()
// invoked
// this is bound to friend
// friend.name
// is david
console.log(this.name = 'yowon')

const greet = person.greet.bind({name: 'this is a bound object'})
person.greet.call({name: 'this is a bound object'})
person.greet.apply({name: 'this is a bound object'})

greet()

// what is this
// where is this function getting invoked, line 15
person.greet()
// es6 arrow notation
// 

const newPerson = {
    name: 'newPerson',
    // arrow notation
    greet: () => { console.log('hi, ' + this.name) }
}

newPerson.greet()

newPerson.greet() 
this.name
// undefined
// DOM 
// html, head, body, title, 'This is a simple page'
// describe that as a tree
// Document, HTML, head, body
// (tree-like)
// create to-do app
// js DOM manipulation
