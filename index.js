const express = require("express")
const { connectMongoDb } = require("./connections/url")
const path = require("path")
const URL = require("./models/url")
const cookieParser = require("cookie-parser")
const { checkForAuthentication, restrictTo } = require("./middlewares/auth")

const DB_URL = 'mongodb://127.0.0.1:27017/url-shortner'
connectMongoDb(DB_URL)

const app = express()
const PORT = 8000

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use(checkForAuthentication)


const staticRoute = require("./routes/staticRouter")
app.use("/", staticRoute)

const urlRoute = require("./routes/url")
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute)

const userRoute = require('./routes/user')
app.use("/user", userRoute)


app.listen(PORT, () => console.log(`Server has started on PORT: ${PORT}`))