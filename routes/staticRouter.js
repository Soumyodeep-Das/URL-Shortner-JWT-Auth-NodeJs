const express = require("express")
const router = express.Router()

const { handleStaticHomePage, handleSignUpPage, handleLoginPage, handleAdminUrlsPage } = require('../controllers/staticPageController')
const { restrictTo } = require("../middlewares/auth")
router.get('/', restrictTo(["NORMAL", "ADMIN"]), handleStaticHomePage)
router.get('/signup', handleSignUpPage)
router.get('/login', handleLoginPage)
router.get('/admin/urls', restrictTo(["ADMIN"]), handleAdminUrlsPage)

module.exports = router