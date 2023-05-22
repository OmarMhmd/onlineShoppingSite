const express=require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
const router=require('./router/router')
const cors=require('cors')
app.use(cors())

app.use('/',router)
app.use((error, req, res, next) => {
    res.status(501).send(error.message)
})

app.listen(4000,()=>console.log('Listen to port 4000'))