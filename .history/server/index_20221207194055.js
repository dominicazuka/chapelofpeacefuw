require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const http = require("http");
const helmet = require("helmet");
const userRoute = require("./routes/user.route"); 
const alumniAnnouncementsRoute = require('./routes/alumniAnnouncements.route')
const alumniMembershipsRoute = require('./routes/alumniMemberships.route')
const bibleStoriesRoute = require('./routes/bibleStories.route')
const bibleStudiesRoute = require('./routes/bibleStudies.route')
const bibleStudySchedulesRoute = require('./routes/bibleStudySchedules.route')
const childrenSongsRoute = require('./routes/childrenSongs.route')
const contactUsRoute = require('./routes/contactUs.route')
const { port } = require("./config/index");
const dbRoute = require('./routes/db.route');

// console.log(userRoute)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(compression())
app.use(helmet())

app.use("/api", userRoute)
app.use('/api', alumniAnnouncementsRoute)
app.use('/api', alumniMembershipsRoute)
app.use('/api', bibleStoriesRoute)
app.use('/api', bibleStudiesRoute)
app.use('/api', bibleStudySchedulesRoute)
app.use('/api', childrenSongsRoute)
app.use('/api', contactUsRoute)
app.use('/api', dbRoute)

const server = http.createServer(app);
server.listen(port, function () {
    console.log("Server listening on port 5000");
})