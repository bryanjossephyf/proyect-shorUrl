const Url = require("../models/urls.js")

//GET

const leerURL = async (req, res) => {
    try {
        const urls = await Url.find().lean()
        res.render("home.hbs", { urls: urls })
    } catch (err) {
        console.log(err)
    }
}


//POST
const agregarURL = async (req, res) => {
    const { origin } = req.body;

    try {
        const url = new Url({ origin })
        await url.save()
        res.redirect("/")

    } catch (err) {
        console.log(err)
        res.send("error: " + err)
    }
}

//delete
const eliminarURL = async (req, res) => { //se usto metodo GET 
    const { id } = req.params
    try {
        await Url.findByIdAndDelete(id)
        res.status(200).redirect("/")
    } catch (error) {
        console.log(error)
    }
}

//EDITFORM
const editarURLFORM = async (req, res) => {
    const { id } = req.params

    try {
        const urlEdit = await Url.findById(id).lean()
        res.render("home", { urlEdit })
    } catch (error) {
        console.log(error)
    }
}

//edit
const editarURL = async (req, res) => {
    const { id } = req.params
    const {origin} = req.body


    try {
        await Url.findByIdAndUpdate(id , {origin: origin})
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
}


//redireccionamiento de url final

const redireccionamiento = async (req,res)=>{
    const { shortUrl } = req.params
     
    try {
        const urlDB = await Url.findOne({ shortURL: shortUrl})
        res.redirect(urlDB.origin)
    } catch (error) {
        console.log("Redireccionamiento: "+ error)
        res.status(404).send("Ocurrio un error, vuelva a intentar")
    }
}


module.exports = {
    leerURL,
    agregarURL,
    eliminarURL,
    editarURLFORM,
    editarURL,
    redireccionamiento
}