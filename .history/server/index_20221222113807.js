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
const donationsRoute = require('./routes/donations.route')
const meditationsRoute = require('./routes/meditations.route')
const membershipsRoute = require('./routes/memberships.route')
const membersOfCouncilRoute = require('./routes/membersOfCouncil.route')
const memoryVerseRoute = require('./routes/memoryVerse.route')
const partnerRoute = require('./routes/partner.route')
const postRoute = require('./routes/post.route')
const prayerMeetingBulletinRoute = require('./routes/prayerMeetingBulletin.route')
const prayerRequestRoute = require('./routes/prayerRequest.route')
const responseRoute = require('./routes/response.route')
const servicesRoute = require('./routes/services.route')
const sliderRoute = require('./routes/slider.route')
const testimonialRoute = require('./routes/testimonial.route')
const unitRoute = require('./routes/unit.route')
const { port, origin } = require("./config");
const dbRoute = require('./routes/db.route');
 
// console.log(userRoute)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin, credentials: true }))
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
app.use('/api', donationsRoute)
app.use('/api', meditationsRoute)
app.use('/api', membershipsRoute)
app.use('/api', membersOfCouncilRoute)
app.use('/api', memoryVerseRoute)
app.use('/api', partnerRoute)
app.use('/api', postRoute)
app.use('/api', prayerMeetingBulletinRoute)
app.use('/api', prayerRequestRoute)
app.use('/api', responseRoute)
app.use('/api', servicesRoute)
app.use('/api', sliderRoute)
app.use('/api', testimonialRoute)
app.use('/api', unitRoute)
app.use('/api', dbRoute)

const server = http.createServer(app);
server.listen(port, function () {
    console.log("Server listening on port 5000");
})