function login(req, res, callback) {
    User.findOne({email: req.body.email })
    .then(function(user) {
        // refactor code to use .then
        return user.comparePassword(req.body.password)
            
        })
    .then(function(isMatch) {
         if (!isMatch) res.status(401).send('Incorrect password')
         else {
             const payload = {id: user._id, email: user.email }
             return jwt.sign(payload, config.secret, {})
         }
    })
    .then(function(token) {
        user.token = token
        return user.save() 
        })
    .then(function() {
        res.json({token})
    })
    .catch(function(err) {
        return callback(err)
    })
    
    // what do we do with that user
    
}

// new login function with promises instead of callbacks
// EC2017 async/await

