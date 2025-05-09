import { Router } from "express"
import { createPublication, getPublications, updatePublication, deletePublication } from "./publication.controller.js"
import { createPublicationValidator, updatePublicationValidator, deletePublicationValidator } from "../middlewares/publication-validator.js"

const router = Router()

router.post("/add", createPublicationValidator, createPublication)
router.get("/all", getPublications)
router.put("/update/:id", updatePublicationValidator, updatePublication)
router.delete("/delete/:id", deletePublicationValidator, deletePublication)

export default router