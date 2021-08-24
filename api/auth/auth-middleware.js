const Users = require('./auth-model')


const checkCredentials = (req, res, next) => {
const { username , password } = req.body
    if(username && password) {
next()
} else { res.status(422).json({ message: 'enter credentials' })
}}

const checkUsernameExists = async (req, res, next) => {
const { username } = req.body
    await Users.findBy({username})
     .then((user) => {
         if(user.username){
        res.json({message: "username is taken"})
} else {
     next()
}
})
.catch( err => console.log(err) )
}

module.exports = { checkCredentials,
checkUsernameExists
}