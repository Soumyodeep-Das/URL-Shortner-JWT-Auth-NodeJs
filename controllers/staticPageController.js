const URL = require("../models/url")

async function handleStaticHomePage(req, res){
    // if(!req.user) return res.redirect("/login")
    const allUrls = await URL.find({createdBy: req.user._id})
    return res.render("home", {
        urls: allUrls,
    })
}

async function handleSignUpPage(req, res){
    return res.render("signup")
}

async function handleLoginPage(req, res){
    return res.render("login")
}

async function handleAdminUrlsPage(req, res){
    const allUrls = await URL.find({})
    return res.render("home", {
        urls: allUrls,
    })
}

module.exports = {
    handleStaticHomePage,
    handleSignUpPage,
    handleLoginPage,
    handleAdminUrlsPage,
}