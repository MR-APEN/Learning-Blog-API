import { Schema, model } from "mongoose"

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    }
    ,
    status: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timestamps: true
})

export default model("Course", courseSchema)
