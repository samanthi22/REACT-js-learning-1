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

const greet = person.greet

greet()

// what is this
// where is this function getting invoked, line 15
person.greet()