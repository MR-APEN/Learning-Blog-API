import Publication from "../publication/publication.model.js"

export const validatePublication = async (title= "") => {
    const exist = await Publication.findOne({title})
    if(exist) {
        throw new Error(`Publication with title ${title} already exists`)
    }
}

export const validatePublicationId = async (id= "") => {
    const exist = await Publication.findById(id)
    if(!exist) {
        throw new Error(`Publication with id ${id} does not exist`)
    }
}