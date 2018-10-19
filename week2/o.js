// async/await

async function login(req, res, callback) {
    try {
        const user = await User.findOne({email: req.body.email })
        // wait for result to come back, but don't stop and wait
        const isMatch = await user.comparePassword(req.body.password)
    
        if (!isMatch) return res.status(401).send('Incorrect password')
    
        const payload = {id: user._id, email: user.email }
        const token = await jwt.sign(payload, config.secret, {})
    
   
        user.token = token
        user.save() 
    
        res.json({token})
    } catch(err) {
        callback(err)
    }
    // what do we do with that user
    
}