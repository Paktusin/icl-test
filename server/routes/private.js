const express = require('express')
const router = express.Router()

router.use(require('../middleware/auth'))
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router