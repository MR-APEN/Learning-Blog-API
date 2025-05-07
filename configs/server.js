import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import apiLimiter from "../src/middlewares/request-validator.js"
import { dbConnection } from "./mongo.js"


const middlewares = (app) => {
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }))
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", `http://localhost:${process.env.PORT}`],
                connectSrc: ["'self'", `http://localhost:${process.env.PORT}`],
                imgSrc: ["'self'", "data:"],
                styleSrc: ["'self'", "'unsafe-inline'"],
            },
        },
    }));
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const routes = (app) => {

}

const connectDB = async () => {
    try {
        await dbConnection()
    } catch (error) {
        console.log(`Error connecting to database: ${error}`)
        process.exit(1)
    }
}

export const initServer = async () => {
    const app = express()
    try {
        middlewares(app)
        connectDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(`Error initializing server: ${error}`)
    }
}