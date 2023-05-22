
const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://algburi89:0000@cluster0.ljfghqe.mongodb.net/";
const client = new MongoClient(uri)
const bcrypt = require('bcrypt')
var ObjectId = require('mongodb').ObjectId;
async function run() {

    try {
        await client.connect()

    }
    catch (e) {
        console.log(e)
    }
    // finally {
    //   await client.close()
    // }
}
run().catch(console.error)

// (1) add new item
exports.addNewItem = async (data) => {
    var add
    try {
        add = await client.db('onlineShoppingSite').collection('items')
            .insertOne({ name: data.name, type: data.type, price: data.price, details: data.details, filename: data.filename, path: data.path, date: new Date() })
    }
    catch (e) {
        console.log(e)
    }
    return add
}

//(2) shows all items

exports.showAllItems = async () => {

    var result
    try {
        result = await client.db('onlineShoppingSite').collection('items').find({}).toArray()
    }

    catch (e) {
        console.log(e)
    }
    return result
}

// (3) delete specific item
exports.deleteItem = async (id) => {

    var result
    try {

        result = await client.db('onlineShoppingSite').collection('items').deleteOne({ "_id": new ObjectId(`${id}`) })
    }

    catch (e) {
        console.log(e)
    }
    return result
}
//(4) update specific item 
exports.updateItem = async (body) => {
    console.log(body)
    var result
    try {
        result = await client.db('onlineShoppingSite').collection('items').updateOne(
            { _id: new ObjectId(`${body._id}`) },
            { $set: { name: body.name, type: body.type, price: body.price, details: body.details, filename: body.filename, path: body.path, date: new Date() } })

    }
    catch (e) {
        console.log(e)
    }
    return result
}

//(5) add new user/admin
exports.addNewUserAdmin = async (body) => {

    var result
    let hashedPassword = bcrypt.hashSync(body.password, 8)
    try {

        result = await client.db('onlineShoppingSite').collection('users').insertOne({
            fname: body.fname, lname: body.lname,
            email: body.email, password: hashedPassword, state: body.state, street: body.street, zip: body.zip, type: body.type
        })

    }
    catch (e) {
        console.log(e)
    }
    return result
}

//(5) signin
exports.signin = async (email) => {
    var result
    try {

        result = await client.db('onlineShoppingSite').collection('users').findOne({ email }, { _id: 0, email: 1, password: 1 })

    }
    catch (e) {
        console.log(e)
    }
    console.log(result)
    return result
}

//validate email of the signer
exports.signin = async (email) => {
    var result
    try {

        result = await client.db('onlineShoppingSite').collection('users').findOne({ email })
    }
    catch (e) {
        console.log(e)
    }
    return result
}

//find a user in database

exports.findUser = async (email) => {

    var result
    try {
        result = await client.db('onlineShoppingSite').collection('users').findOne({ email })
    }
    catch (e) {
        console.log(e)
    }
    return result

}


