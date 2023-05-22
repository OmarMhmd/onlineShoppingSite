const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
const multer = require('multer')

const controllers = require('../controllers/controllers')

const products = require('../router/products.json')
const users = require('../router/users.json')
const about = require('../router/about.json')

const jwt = require('jsonwebtoken')
PRIVATE_KEY = "finalProjectPrivateKey";
const bcrypt = require('bcrypt')
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public')
    },
    filename: (req, file, callback) => {
        // console.log('file',file)
        callback(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })
const validateToken = (req, res, next) => {
    const authheader = req.headers.authorization;
    // console.log(authheader)
    if (!authheader) {
        next(new Error('the authorization token is not found'))
    }
    else {
        const arr = authheader.split(' ');
        if (arr.length != 2) {
            next(new Error('It is necessary to use Bearer scheme'))
        }
        const token = arr[1]
        // console.log(token)
        const receivedToken = jwt.verify(token, PRIVATE_KEY)
        const { email, type } = receivedToken;
        if (type != "admin") {
            res.send('user')
        }
        next()
    }
}
validateEmail = async (req, res, next) => {

    var result
    try {
        result = await controllers.emailValidation(req.body.email)
    }
    catch (e) {
        console.log(e)
    }
    if (!result) {
        next()
    }
    else {
        next(new Error('This email is already used'))
    }
}

signin = async (req, res, next) => {
    var result = await controllers.emailValidation(req.body.email)
    if (result) {
        const checking = bcrypt.compareSync(req.body.password, result.password)
        if (checking) {
            let token = jwt.sign({ email: result.email, type: result.type },
                PRIVATE_KEY)
            res.send(token)
        }
        else {
            next(new Error('Password is uncorrect'))
        }
    }
    else {
        next(new Error('There is no registered user with this information'))
    }
    return result
}




router.get('/', controllers.showAllItems)
router.post('/add-item', validateToken, upload.single('image'), controllers.addNewItem)

router.get('/modify-items', validateToken,(req, res) => {
    res.send('success')
})

router.delete('/modify-items/:id', controllers.deleteItem)
router.put('/update-item', controllers.updateItem)
router.post('/Signup', validateEmail, controllers.addNewUserAdmin)
router.post('/Signin', signin)

const validateUserToken = (req, res, next) => {
    const authheader = req.headers.authorization;
    // console.log(authheader)
    if (!authheader) {
        next(new Error('the authorization token is not found'))
    }
    else {
        const arr = authheader.split(' ');
        if (arr.length != 2) {
            next(new Error('It is necessary to use Bearer scheme'))
        }
        const token = arr[1]

        const receivedToken = jwt.verify(token, PRIVATE_KEY)
        const { email, type } = receivedToken;
        const find = controllers.findUser(email,type)
        if (!find) {
            next(new Error('No such user in the database'))
        }
        next()
    }
}
router.get('/sucessfull-purchase', validateUserToken, (req, res) => {

    res.send('sucessfully implemented')
})




router.get('/about', (req, res) => {
    res.send(about.about)
})

module.exports = router