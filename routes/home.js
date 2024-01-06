const { Router } = require("express")
const router = Router()
const {leerURL,agregarURL, eliminarURL, editarURLFORM, editarURL, redireccionamiento} = require("../controllers/homeControllers.js")
const urlValidation = require("../middlewares/urlValidation.js")
//

router.get("/", leerURL )
router.post("/", urlValidation ,agregarURL)
router.get("/eliminar/:id", eliminarURL)
router.get("/editar/:id", editarURLFORM)
router.post("/editar/:id", urlValidation, editarURL)

router.get("/:shortUrl", redireccionamiento)

module.exports = router


