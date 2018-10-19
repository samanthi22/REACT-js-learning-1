
function addOne(num) {
    return num + 1
    
}

function getNum() {
    return addOne(10)
}

function c() {
    console.log(getNum() + getNum())
}

c()
// 10, 11
// 11 + 11 = 22

/* 
stack is:

--------
addOne(10)
------
getNum()
------
c()
*/

// after it is evaluated it gets erased from the stack
// c() console.logs 22

