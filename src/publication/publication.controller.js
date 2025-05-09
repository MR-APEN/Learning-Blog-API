import Publication from "./publication.model.js"

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
        const publications = await Publication.find().populate("course", "teacher").populate("course","name")

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