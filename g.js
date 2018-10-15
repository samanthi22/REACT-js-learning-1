    const o = {
        a: 'a',
        b: 'b',
        obj: {
            key: 'key',
        },
    }
    
    const o2 = o
    
    
    o2.a = 'new value'
    
    console.log(o.a)

// o2 is o3
    const o3 = Object.assign({}, o)
    o3.a = 'new 2 value'
    console.log(o3.a)
    
    
    