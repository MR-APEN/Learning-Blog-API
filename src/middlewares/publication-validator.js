import { body } from "express-validator"
import { validatePublication } from "../helpers/db-validator.js"
import { validateField } from "./field-validator.js"
import { handleErrors } from "./handle-errors.js"

export const createPublicationValidator = [
    body("title", "Title is required").notEmpty(),
    body("title").custom(validatePublication),
    body("description", "Description is required").notEmpty(),
    body("course", "Course is required").notEmpty(),
    body("course", "Course must be a valid ObjectId").isMongoId(),
    validateField,
    handleErrors
]