const express = require("express");
const morgan = require("morgan");
const app = express()
require('dotenv').config()
require("./database/db.js") // database
// imports routers
const homeRouters = require("./routes/home.js")
const authRouters = require("./routes/auth.js")

//handlebar
const {create} = require("express-handlebars")

const hbs = create({
    extname: ".hbs"
})

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

//middleware
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true})) // parser


//router
app.use(homeRouters)
app.use("/auth",authRouters)








app.use(express.static(__dirname + "/public")) //archivos estaticos

//server
const PORT = process.env.PORT || 3000
app.listen(PORT)
