
const router = require('express').Router()
const Nomination = require('../models/nominations.model')

router.route('/addnomination').post((req, res) => {
  const nomination = new Nomination({
    movieid: req.body.id,
    movieTitle: req.body.title,
    movieYear: req.body.year
  })

  nomination.save(function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Movie Nominated')
    }
  })
})

module.exports = router
