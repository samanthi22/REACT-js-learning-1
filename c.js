const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'a new value'
    },
}

const o2 = Object.assign({}, o)
o2.a = 'new value'
console.log(o.a)
o2.obj.key = 'new value'
console.log(o.obj.key)

function deepCopy(obj) {
    const keys = Object.keys(obj)

    const newObject = {}

    for(let i = 0; i < keys.length; i++) 
        if(typeof obj[keys] == 'object')
    
    return Object.assign({}, obj)
}