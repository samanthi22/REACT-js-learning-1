function recurse() {
    console.log('recursion')
    return recurse()
}

recurse()

// rabbit hole
// until we run out of stack
// maximum call size exceeded.

// run out of stack size

