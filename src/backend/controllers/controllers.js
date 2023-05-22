const model = require('../model/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
PRIVATE_KEY = "finalProjectPrivateKey";

var result
exports.showAllItems = async (req, res) => {

    result = await model.showAllItems();
    if (result) {
        res.send(result)
    }
}
exports.addNewItem = (req, res) => {
    const data = {
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        details: req.body.details,
        filename: req.file.filename,
        path: req.file.path
    }
    result = model.addNewItem(data)
    // res.status(200).json(req.body)
}

exports.deleteItem = (req, res) => {
    result = model.deleteItem(req.params['id'])
}

exports.updateItem = (req, res) => {
    result = model.updateItem(req.body)
}

exports.addNewUserAdmin = (req, res) => {
    result = model.addNewUserAdmin(req.body)
}

exports.emailValidation = async (email) => {
    result = await model.signin(email)
    return result
}


exports.findUser = async (email) => {

    result=model.findUser(email)
    return result
}