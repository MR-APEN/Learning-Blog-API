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

export const getCommentsByPublication = async (req, res) => {
    const { postId } = req.params
    try {
        const comments = await Comment.find({ postId }).sort({ date: -1 })
        return res.status(200).json({
            success: true,
            comments
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting comments",
            error: error.message
        })
    }
}