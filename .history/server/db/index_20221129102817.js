const { Sequelize, DataTypes } = require('sequelize')
const {
  db_name,
  db_password,
  db_username,
  db_host,
  user_default_image,
} = require('../config')

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(db_name, db_username, db_password, {
  host: db_host,
  dialect:
    'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
})

const UserModel = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true
  },
  name: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
  photo: {
    type: DataTypes.STRING,
    defaultValue: user_default_image
  }
})

const UnitModel = sequelize.define('Unit', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING
})

const PostModel = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING,
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  content: DataTypes.STRING,
  author_id: DataTypes.STRING,
   photo: DataTypes.STRING,

})

const ServiceModel = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  content: DataTypes.STRING,
  author_id: DataTypes.STRING,
    photo: DataTypes.STRING,

})

const PartnersModel = sequelize.define('Partners', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  content: DataTypes.STRING,
  author_id: DataTypes.STRING,
    photo: DataTypes.STRING,

})

const ContactUsModel = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  subject: DataTypes.STRING,
  comments: DataTypes.STRING
})

const DonationModel = sequelize.define('Donation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone_no: DataTypes.STRING,
  amount: DataTypes.FLOAT,
  purpose: DataTypes.STRING,
  gateway: DataTypes.STRING,
  details: DataTypes.JSON
})

const MembershipModel = sequelize.define('Membership', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING,
  sex: DataTypes.STRING,
  marital_status: DataTypes.STRING,
  no_of_children: DataTypes.FLOAT,
  date_of_birth: DataTypes.STRING,
  country: DataTypes.STRING,
  state: DataTypes.STRING,
  city: DataTypes.STRING,
  email: DataTypes.STRING,
  phone_no: DataTypes.STRING,
  type_of_membership: DataTypes.STRING,
  department: DataTypes.STRING,
  level: DataTypes.STRING,
  permanent_address: DataTypes.STRING,
  contact_address: DataTypes.STRING,
  residential_address: DataTypes.STRING,
  next_of_kin_name: DataTypes.STRING,
  next_of_kin_phone_no: DataTypes.STRING,
  next_of_kin_address: DataTypes.STRING,
  born_again: DataTypes.STRING,
  baptized: DataTypes.STRING,
  baptism_method: DataTypes.STRING,
  holy_ghost_baptism: DataTypes.STRING,
  speaking_in_tongues: DataTypes.STRING,
  service_unit: DataTypes.STRING,
  comments: DataTypes.STRING,
    photo: DataTypes.STRING,

})

const ResponseModel = sequelize.define('Response', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING,
  sex: DataTypes.STRING,
  marital_status: DataTypes.STRING,
  phone_no: DataTypes.STRING,
  date_of_birth: DataTypes.STRING,
  status: DataTypes.STRING,
  department: DataTypes.STRING,
  level: DataTypes.STRING,
  hostel_name: DataTypes.STRING,
  room_number: DataTypes.STRING,
  residential_address: DataTypes.STRING,
  reasons: DataTypes.STRING,
  prayer_points: DataTypes.STRING
})

const BibleStudyModel = sequelize.define('BibleStudy', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
    photo: DataTypes.STRING,

})

const BibleStudyScheduleModel = sequelize.define('BibleStudySchedule', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  date: DataTypes.STRING,
  time: DataTypes.STRING,
  venue: DataTypes.STRING,
  zoom_link: DataTypes.STRING,
    photo: DataTypes.STRING,

})

const PrayerRequestsModel = sequelize.define('PrayerRequests', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING,
  phone_no: DataTypes.STRING,
  email: DataTypes.STRING,
  comments: DataTypes.STRING
})

const PrayerMeetingBulletinModel = sequelize.define('PrayerMeetingBulletin', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  date: DataTypes.STRING,
  time: DataTypes.STRING,
  venue: DataTypes.STRING,
    photo: DataTypes.STRING,

})

const MeditationModel = sequelize.define('Meditation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  date: DataTypes.STRING,
  time: DataTypes.STRING,
  venue: DataTypes.STRING,
  comments: DataTypes.STRING,
    photo: DataTypes.STRING,

})

const SliderModel = sequelize.define('Slider', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  description: DataTypes.STRING,
  title: DataTypes.STRING,
  photo: DataTypes.STRING,
  page: DataTypes.STRING,
})

const BibleStoriesModel = sequelize.define('BibleStories', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
    photo: DataTypes.STRING,

})

const ChildrenSongsModel = sequelize.define('ChildrenSongs', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  url: DataTypes.STRING,
})

const MemoryVerseModel = sequelize.define('MemoryVerse', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  url: DataTypes.STRING
})


const AlumniAnnouncementModel = sequelize.define('AlumniAnnouncement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING
})


const TestimonialsModel = sequelize.define('Testimonials', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  url: DataTypes.STRING
})


const AlumniMembershipModel = sequelize.define('AlumniMembership', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  name: DataTypes.STRING,
  sex: DataTypes.STRING,
  marital_status: DataTypes.STRING,
  no_of_children: DataTypes.FLOAT,
  date_of_birth: DataTypes.STRING,
  country: DataTypes.STRING,
  state: DataTypes.STRING,
  city: DataTypes.STRING,
  email: DataTypes.STRING,
  phone_no: DataTypes.STRING,
  contact_address: DataTypes.STRING,
  residential_address: DataTypes.STRING,
  type_of_membership: DataTypes.STRING,
  department: DataTypes.STRING,
  faculty: DataTypes.STRING,
  permanent_address: DataTypes.STRING,
  year_of_graduation: DataTypes.STRING,
  service_unit: DataTypes.STRING,
  comments: DataTypes.STRING,
  photo: DataTypes.STRING,
})

const MembersOfCouncilModel = sequelize.define('MembersOfCouncil', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  title: DataTypes.STRING,
  name: DataTypes.STRING,
  photo: DataTypes.STRING,
  facebook: DataTypes.STRING,
  instagram: DataTypes.STRING,
  linkedin: DataTypes.STRING,
  twitter: DataTypes.STRING
})

module.exports = { sequelize, UserModel }