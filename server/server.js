require('dotenv').config({ path: 'env' })
const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000

// Middle ware cors will allow us to share resources across origins or servers.This will help connect our server with our client
app.use(cors({ origin: true }))

// This middle ware will help in parsing data
var dir = path.join(__dirname, '/images');

app.use(express.static(dir));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// This line underneath sets up the database connection
const uri = 'mongodb://localhost:27017/shoppies'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongo DB succesfully set up')
})

app.get('/', (req, res) => {
  res.send('Hey Your Server works')
})

const usersRouter = require('./routes/users')

app.use('/users', usersRouter)


app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
