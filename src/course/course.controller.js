import Course from "./course.model.js"

export const createCourse = async () => {
    const taller = {
        "title": "Taller III",
        "description": "El curso de Taller III pretende implementar proyectos y actividades que enfoquen al alumno a un ambiente práctico de la programación",
        "teacher": "Braulio Echeverria",
    }

    const tecnologia = {
        "title": "Tecnología III",
        "description": "El curso de Tecnología III pretende llevarlo por la teoría de cada tema a aplicar durante la clase de taller",
        "teacher": "Braulio Echeverria",
    }

    const practica = {
        "title": "Practica Supervisada",
        "description": "El curso de Práctica supervisada pretende conjutar las areas de Taller III y Tecnología III, dándole un enfoque más externo, y acercando a la realidad de la industria de la tecnología",
        "teacher": "Braulio Echeverria",
    }

    const courseTaller = await Course.findOne({ title: taller.title })
    const courseTecnologia = await Course.findOne({ title: tecnologia.title })
    const coursePractica = await Course.findOne({ title: practica.title })

    if(!courseTaller) {
        await Course.create(taller)
        console.log("Taller III course created")
    }

    if(!courseTecnologia) {
        await Course.create(tecnologia)
        console.log("Tecnología III course created")
    }

    if(!coursePractica) {
        await Course.create(practica)
        console.log("Practica Supervisada course created")
    }

}