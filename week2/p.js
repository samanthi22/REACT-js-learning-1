const person = {
    name: 'jordan',
    greet: function() { console.log('hello, ' + this.name) },
}

// person.greet is a function

person.greet()

// this person
// this.name is 'jordan'

const greet = person.greet

greet()

// what is this
// where is this function getting invoked, line 15
