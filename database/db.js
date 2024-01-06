const mongoose = require("mongoose")

async function conectionDB (){
    try {
        await mongoose.connect(process.env.URI)
        console.log("DB connect")
    } catch (error) {
        console.log(error)        
    }
}

conectionDB()

module.exports = conectionDB