
x = [0,1,2,3]
function add(x,y) { return x + y }
// reduce function
console.log(add(1,2))
// array not changed
console.log(x)
console.log(x.reduce(add))
// 0 +1 =1
// 1 + 2 = 3
// 3 + 3 = 6
// returns 6