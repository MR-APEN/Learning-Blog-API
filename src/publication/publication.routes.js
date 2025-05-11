import { Router } from "express"
import { createPublication, getPublications, updatePublication, deletePublication, getPublicationsByDateRecent, getPublicationsOld, getPublicationsByCourse } from "./publication.controller.js"
import { createPublicationValidator, updatePublicationValidator, deletePublicationValidator, getPublicationsByCourseValidator } from "../middlewares/publication-validator.js"

const router = Router()

/**
 * @swagger
 * /publication/add:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags:
 *       - Publicaciones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               course:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *               - author
 *               - course
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post("/add", createPublicationValidator, createPublication)

/**
 * @swagger
 * /publication/all:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags:
 *       - Publicaciones
 *     responses:
 *       200:
 *         description: Lista de publicaciones
 */
router.get("/all", getPublications)

/**
 * @swagger
 * /publication/update/{id}:
 *   put:
 *     summary: Actualizar una publicación existente
 *     tags:
 *       - Publicaciones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               course:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicación actualizada
 *       404:
 *         description: Publicación no encontrada
 */
router.put("/update/:id", updatePublicationValidator, updatePublication)

/**
 * @swagger
 * /publication/delete/{id}:
 *   delete:
 *     summary: Eliminar una publicación
 *     tags:
 *       - Publicaciones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación
 *     responses:
 *       200:
 *         description: Publicación eliminada
 *       404:
 *         description: Publicación no encontrada
 */
router.delete("/delete/:id", deletePublicationValidator, deletePublication)

/**
 * @swagger
 * /publication/recent:
 *   get:
 *     summary: Obtener publicaciones más recientes
 *     tags:
 *       - Publicaciones
 *     responses:
 *       200:
 *         description: Lista de publicaciones recientes
 */
router.get("/recent", getPublicationsByDateRecent)

/**
 * @swagger
 * /publication/old:
 *   get:
 *     summary: Obtener publicaciones más antiguas
 *     tags:
 *       - Publicaciones
 *     responses:
 *       200:
 *         description: Lista de publicaciones antiguas
 */
router.get("/old", getPublicationsOld)

/**
 * @swagger
 * /publication/course/{name}:
 *   get:
 *     summary: Obtener publicaciones por curso
 *     tags:
 *       - Publicaciones
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del curso
 *     responses:
 *       200:
 *         description: Lista de publicaciones del curso
 *       404:
 *         description: Curso no encontrado
 */
router.get("/course/:name", getPublicationsByCourseValidator, getPublicationsByCourse)

export default router