const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const router = require('express').Router()
const User = require('../models/users.model')
const bcrypt = require('bcrypt')

router.route('/signup').post(async (req, res) => {
  try {
  // Destructuring the fields in the objects
    const { username, password, passwordCheck } = req.body

    // Setting up basic validation for sign up process
    if (!username || !password || !passwordCheck) { return res.status(404).json({ message: 'Not all field have been entered' }) }

    // This line makes sure tht the password is of a certain length
    if (password.length < 5) {
      return res.status(400).json({ message: 'Password has to be at least 5 characters' })
    }

    // This line checks the password again for verification
    if (password !== passwordCheck) {
      res.status(400).json({ message: 'Enter password again for verification' })
    }
    // This will check our mongo database and find if there is an existing email(username in this case) in the database and return a message to the user saying so.
    const existingUser = await User.findOne({ username: username })
    if (existingUser) {
      return res.status(400).json({ message: 'An account with this email already exists' })
    }

    // Did not bother to set salting rounds as the default is set to 10 which is sufficient any higher would just be problematic as it would take forever to save user data.
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      password: passwordHash
    })
    /// This saves our form data to the database
    const savedUser = await newUser.save()

    // This return the user info to the Front-End
    res.json(savedUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// handles the Login Route
router.route('/login').post(async (req, res) => {
  res.send('Logged in')
})

module.exports = router
