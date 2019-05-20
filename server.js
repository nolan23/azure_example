require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const {PORT} = process.env
app.listen(PORT,()=> console.log(`Azure example happening on port ${PORT}`))