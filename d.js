function deepCopy(obj) {
    const keys = Object.keys(obj)
    
    const newObject = {}
    
    for (let i =0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'a new value'
    },
}

const o3 = deepCopy(o)

o.obj.key = 'new key!'
console.log(o3.obj.key)

arr = []
arr.push('value')
arr