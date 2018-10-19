
function addOne(num) {
    throw new Error('oh no, an error')
    
}

function getNum() {
    return addOne(10)
}

function c() {
    console.log(getNum() + getNum())
}

c()

// keeps track of call stack
// can see error
// dumps call stack to error
