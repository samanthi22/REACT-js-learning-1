const url = ''

fetch(url)
// handle an error
// promise 
.then(function(res) {
    return res.json()
})
.then(function(json) {
    return ({ importantData: json.importantData,
    
        
    })
})
.then(function(data) {
    
})
// chain .then a callback within a callback within a callback
// handle an error
.catch(function(err) {
    // handle error
})

