require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const http = require("http");
const helmet = require("helmet");
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