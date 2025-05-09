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