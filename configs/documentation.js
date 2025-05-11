import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const swaggerOptions = {
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title:"Learning Blog API",
            version:"1.0.0",
            description:"Blog de Aprendizaje API Javier Apen",
            contact:{
                name:"Javier Apen",
                email:"japen-2023128@kinal.edu.gt"
            }
        },
        servers:[
            {
                url:"http://127.0.0.1:3030/blog/v1"
            }
        ]
    },
    apis:[
        "./src/comment/*.js",
        "./src/publication/*.js",
    ]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

export {swaggerDocs, swaggerUi}