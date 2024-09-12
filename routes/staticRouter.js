const express = require("express")
const router = express.Router()

const { handleStaticHomePage, handleSignUpPage, handleLoginPage } = require('../controllers/staticPageController')
router.get('/', handleStaticHomePage)
router.get('/signup', handleSignUpPage)
router.get('/login', handleLoginPage)

module.exports = router