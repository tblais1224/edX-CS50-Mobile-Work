//login auth callback hell
function login(req, res, callback) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) return callback(err)

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return callback(err)
            if (!isMatch) return res.status(401).send("Wrong Password")

            //add data to token
            const payload = {
                id: user._id,
                email: user.email
            }

            jwt.sign(payload, config.secret, {}, function (err, token) {
                if (err) return callback(err)

                user.token = token
                user.save((err) => {
                    if (err) return callback(err)
                    res.json({
                        token
                    })
                })
            })
        })
    })
}


// refactored using Promises to fix callback hell

function login(req, res, callback) {
    User.findOne({
            email: req.body.email
        })
        .then((user) => {
            return user.comparePassword(req.body.password)
        })
        .then((isMatch) => {
            if (!isMatch) return res.status(401).send("Wrong Password")
            else {
                //add data to token
                const payload = {
                    id: user._id,
                    email: user.email
                }
                return jwt.sign(payload, config.secret, {})
            }
        })
        .then((token) => {
            user.token = token
            return user.save()
        })
        .then(() => res.json({
            token
        }))
        .catch((err) => callback(err))
}

