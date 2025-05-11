import { Router } from "express"
import { addComment, getCommentsByPublication } from "./comment.controller.js"
import { addCommentValidator, getCommentsByPublicationValidator } from "../middlewares/comment-validator.js"

const router = Router()

/**
 * @swagger
 * /comment/add:
 *   post:
 *     summary: Añadir un nuevo comentario a una publicación
 *     tags:
 *       - Comentarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: string
 *                 description: ID de la publicación
 *               author:
 *                 type: string
 *                 description: Autor del comentario
 *               content:
 *                 type: string
 *                 description: Contenido del comentario
 *             required:
 *               - postId
 *               - author
 *               - content
 *     responses:
 *       201:
 *         description: Comentario creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post("/add", addCommentValidator, addComment)

/**
 * @swagger
 * /comment/{postId}:
 *   get:
 *     summary: Obtener comentarios por ID de publicación
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación
 *     responses:
 *       200:
 *         description: Lista de comentarios
 *       404:
 *         description: Publicación no encontrada
 */
router.get("/:postId", getCommentsByPublicationValidator, getCommentsByPublication)

export default router