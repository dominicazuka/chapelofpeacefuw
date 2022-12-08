import dotenv from "dotenv"
import express from "express";
import cors from "cors"
import compression from "compression"
import http from "http"
import helmet from "helmet"
const userRoute = require("./routes/user.route"); 

// console.log(userRoute)

dotenv.config()
const app = express()
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(compression())
app.use(helmet())

app.use("/api", userRoute)

const server = http.createServer(app);
server.listen(5000, function () {
    console.log("Server listening on port 5000");
})