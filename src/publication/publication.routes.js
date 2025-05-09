import { Router } from "express"
import { createPublication } from "./publication.controller.js"
import { createPublicationValidator } from "../middlewares/publication-validator.js"

const router = Router()

router.post("/add", createPublicationValidator, createPublication)

export default router