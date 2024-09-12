const { getUser } = require("../service/auth")

function checkForAuthentication( req, res, next ){
    const authorizationHeaderValue = req.headers["authorization"]
    req.user = null;
    if (
        !authorizationHeaderValue ||
        !authorizationHeaderValue.startsWith("Bearer")
    )
    return next()

    const token = authorizationHeaderValue.split("Bearer ")[1]
    const user = getUser(token)

    req.user = user;
    return next()

}

function restrictTo(roles){
    return function (req, res, next){
        if(!req.user) return res.redirect("/login");
        if(!roles.includes(req.user.role)) return res.end("UnAuthorized")
        
        return next()
    }
}
// async function restrictToLoggedInUserOnly(req, res, next) {
//     const userUid = req.cookies.uid
//     if (!userUid) return res.redirect("/login")
//     const user = getUser(userUid)
//     if (!user) return res.redirect("/login")
//     req.user = user
//     next()
// }

// async function checkAuth(req, res, next) {
//     const userUid = req.cookies.uid
//     const user = getUser(userUid)
//     req.user = user
//     next()
// }

module.exports = {
    // restrictToLoggedInUserOnly,
    // checkAuth
    checkForAuthentication,
    restrictTo,
}