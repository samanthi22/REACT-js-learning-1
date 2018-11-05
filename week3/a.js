class MySet extends Set {
    constructor(arr) {
        super(arr)
        this.originalArray = arr
    }
    
    add(val) {
        super.add(val)
        console.log(`added ${val} to the set!`)
    }
    
    delete(val) {
        this.arr = this.arr.filter(x => x !== val)
    }
    has(val) {
        return this.arr.includes(val)
    }
    
    get size() {
        return this.arr.length
    }
    
    
}

const s = new Set([1,2,3,4,5])
s.add(1)
s.add(1)