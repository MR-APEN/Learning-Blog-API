import Publication from "../publication/publication.model.js"

export const validatePublication = async (title= "") => {
    const exist = await Publication.findOne({title})
    if(exist) {
        throw new Error(`Publication with title ${title} already exists`)
    }
}