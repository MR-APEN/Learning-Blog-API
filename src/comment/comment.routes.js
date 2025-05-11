import { Router } from "express"
import { addComment, getCommentsByPublication } from "./comment.controller.js"
import { addCommentValidator, getCommentsByPublicationValidator } from "../middlewares/comment-validator.js"

const router = Router()

router.post("/add", addCommentValidator, addComment)
router.get("/:postId", getCommentsByPublicationValidator, getCommentsByPublication)

export default router