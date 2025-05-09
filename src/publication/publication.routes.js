import { Router } from "express"
import { createPublication, getPublications, updatePublication } from "./publication.controller.js"
import { createPublicationValidator, updatePublicationValidator } from "../middlewares/publication-validator.js"

const router = Router()

router.post("/add", createPublicationValidator, createPublication)
router.get("/all", getPublications)
router.put("/update/:id", updatePublicationValidator, updatePublication)

export default router