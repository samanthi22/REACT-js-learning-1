const x = [0,1,2,3]

function addOne(number) { return number + 1}
console.log(addOne(1))

// map function to each value returns array 
console.log(x.map(addOne))

// filter

function isGreaterThanOne(num) { returns num > 1 }

console.log(isGreaterThanOne(100))
console.log(isGreaterThanOne(1))

// filter is greater than
// then 2,3 we get back
console.log(x.filter(isGreaterThanOne))