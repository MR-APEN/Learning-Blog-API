import { Schema, model } from "mongoose"

const publicationSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true
    }
})

export default model("Publication", publicationSchema)