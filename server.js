import express from "express"
import dotenv from "dotenv"
import httpLogger from "./logger/httplogger.js";
import morgan from "morgan";
import shortenRoute from "./routes/shortenRoute.js";
import { connect } from "./database/schema/connection.js"



dotenv.config()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


const app = express();
app.use(express.json())
//app.use(httpLogger)
app.use(morgan('dev'))


app.use("/shorten", shortenRoute)

//catch other routes
app.all("*", (req, res )=>{
    res.status(404);
    res.json({
        message: "Not Found"
    })
})

//connect to Database
connect(MONGODB_URI)
    .then(()=>{
        console.log("Connected to DB")
        app.listen(PORT, _ =>{
            console.log("URL Shorten API is running on PORT", PORT)
        })
    })

export default app    