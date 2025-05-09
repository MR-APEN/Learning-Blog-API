import Comment from "./comment.model.js"

export const addComment = async (req, res) => {
    const data = req.body
    try {
        const comment = await Comment.create(data)

        return res.status(201).json({
            success: true,
            message: "Comment added successfully",
            data: comment
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Eror adding comment",
            error: error.message
        })
    }
}