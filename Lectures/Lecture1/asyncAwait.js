// refactored using async / await to fix callback hell
//use try catch and async await

async function login(req, res, callback) {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        const isMatch = await user.comparePassword(req.body.password)

        if (!isMatch) return res.status(401).send("Wrong Password")

        const payload = {
            id: user._id,
            email: user.email
        }
        const token = await jwt.sign(payload, config.secret, {})

        user.token = token

        const success = await user.save()

        res.json({
            token
        })
    } catch (err) {
        callback(err)
    }
}

