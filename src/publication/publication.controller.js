import Publication from "./publication.model.js"
import Course from "../course/course.model.js"
import publicationModel from "./publication.model.js"

export const createPublication = async (req, res) => {
    const data = req.body
    try {
        const publi = await Publication.create(data)
        
        return res.status(201).json({
            success: true,
            message: "Publication created successfully",
            publication: publi
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            messge: "Error creating publication",
            error: error.message
        })
    }
}

export const getPublications = async (req, res) => {
    try {
        const publications = await Publication.find({status:true}).populate("course", "teacher").populate("course","name")

        if (!publications || publications.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No publications found"
            })
        }
        
        return res.status(200).json({
            success: true,
            message: "Publications retrieved successfully",
            publications: publications
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting publications",
            error: error.message
        })
    }
}

export const getPublicationsByDateRecent = async (req, res) => {
    try {
        const publications = await Publication.find({status:true}).populate("course", "teacher").populate("course","name").sort({ createdAt: -1 })

        if (!publications || publications.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No publications found"
            })
        }
        
        return res.status(200).json({
            success: true,
            message: "Publications retrieved successfully",
            publications: publications
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting publications",
            error: error.message
        })
    }
}

export const getPublicationsOld = async (req, res) => {
    try {
        const publications = await Publication.find({status:true}).populate("course", "teacher").populate("course","name").sort({ createdAt: 1 })
        if (!publications || publications.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No publications found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Publications retrieved successfully",
            publications: publications
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting publications",
            error: error.message
        })
    }
}

export const getPublicationsByCourse = async (req, res) => {
    const { name } = req.params
    try {
        const courses = await Course.find({ name })

        if (!courses || courses.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No courses found with the provided name"
            })
        }

        const courseIds = courses.map(course => course._id)
        const publications = await Publication.find({ status: true, course: { $in: courseIds } }).populate("course", "teacher name")

        if (!publications || publications.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No publications found for the provided course name"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Publications retrieved successfully",
            publications: publications
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting publications",
            error: error.message
        })
    }
}

export const updatePublication = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        const publication = await Publication.findByIdAndUpdate(id, data, { new: true })

        return res.status(200).json({
            success: true,
            message: "Publication updated successfully",
            publication: publication
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating publication",
            error: error.message
        })
    }
}

export const deletePublication = async (req, res) => {
    const { id } = req.params
    try {
        const publication = await Publication.findByIdAndUpdate(id, { status: false }, { new: true })

        return res.status(200).json({
            success: true,
            message: "Publication deleted successfully",
            publication: publication
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting publication",
            error: error.message
        })
    }
}

