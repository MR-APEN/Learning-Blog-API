import { Router } from "express"
import { addComment } from "./comment.controller.js"
import { addCommentValidator } from "../middlewares/comment-validator.js"

const router = Router()

router.post("/add", addCommentValidator, addComment)

export default router