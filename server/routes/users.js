const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const router = require('express').Router()
const User = require('../model/users.model')
const bcrypt = require('bcrypt')
const saltRounds = 10
const axios = require('axios')

router.route('/signup').post((req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    const newUser = new User({
      email: req.body.email,
      password: hash,
      nominations: []
    })
    console.log(err)
    newUser.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Saved User')
      }
    })
  })
})

router.route('/login').post((req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ email: email }, function (err, foundUser) {
    if (err) {
      console.log(err)
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (error, result) {
          if (result === true) {
            console.log('You are Loggedin')
          } else {
            console.log(`${error}password does not match`)
          }
        })
      }
    }
  })
})

router.route('/movielist').get((req, res) => {
  // const searchItem = req.body.searchItem
  const apiKey = process.env.API_KEY
  const fetchMovieList = async () => {
    const result = await axios.get(`http://www.omdbapi.com/?s=Batman&apikey=${apiKey}`)
    res.send(result.data)
  }
  fetchMovieList()
})


module.exports = router
