import './App.css'
import { createContext, useEffect, useState, lazy, Suspense } from 'react'
import ReactSwitch from 'react-switch'
import { LoadingOutlined } from '@ant-design/icons'
import NavBarOffCanvas from './components/NavBarOffCanvas.js'
import { Routes, Route, Navigate } from 'react-router-dom'
import Footer from '../src/components/Footer'

//using lazy
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Units = lazy(() => import('./pages/Units'))
const Projects = lazy(() => import('./pages/Projects'))
const Partners = lazy(() => import('./pages/Partners'))
const Contact = lazy(() => import('./pages/Contact'))
const Givings = lazy(() => import('./pages/Givings'))
const Membership = lazy(() => import('./pages/Membership'))
const ResponseForm = lazy(() => import('./pages/ResponseForm'))
const BibleStudy = lazy(() => import('./pages/BibleStudy'))
const Prayer = lazy(() => import('./pages/Prayer'))
const ChildrenUnit = lazy(() => import('./pages/ChildrenUnit'))
const Alumni = lazy(() => import('./pages/Alumni'))
const AlumniMembership = lazy(() => import('./pages/AlumniMembership'))
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Dashboard = lazy(() => import('./admin/Dashboard'))
const AlumniMembershipAdmin = lazy(() =>
  import('./admin/pages/AlumniMemberships')
)
const AlumniAnnouncementAdmin = lazy(() =>
  import('./admin/pages/AlumniAnnouncement')
)
const BibleStoryAdmin = lazy(() => import('./admin/pages/BibleStory'))
const BibleStudyAdmin = lazy(() => import('./admin/pages/BibleStudy'))
const BibleStudyScheduleAdmin = lazy(() => import('./admin/pages/BibleStudySchedule'))
const ChildrenSongAdmin = lazy(() => import('./admin/pages/ChildrenSong'))
const ContactUsAdmin = lazy(() => import('./admin/pages/ContactUs'))
const DonationsAdmin = lazy(() => import('./admin/pages/Donations'))
const MeditationAdmin = lazy(() => import('./admin/pages/Meditation'))
const MembershipAdmin = lazy(() => import('./admin/pages/Membership'))
const MembersOfCouncilAdmin = lazy(() => import('./admin/pages/MembersOfCouncil'))
const MemoryVerseAdmin = lazy(() => import('./admin/pages/MemoryVerse'))
const PartnersAdmin = lazy(() => import('./admin/pages/Partners'))
const PostsAdmin = lazy(() => import('./admin/pages/Posts'))
const PrayerMeetingAdmin = lazy(() => import('./admin/pages/PrayerMeeting'))
const PrayerRequestAdmin = lazy(() => import('./admin/pages/PrayerRequest'))
const ResponseFormAdmin = lazy(() => import('./admin/pages/ResponseForm'))
const ServicesAdmin = lazy(() => import('./admin/pages/Services'))
const SlidersAdmin = lazy(() => import('./admin/pages/Sliders'))

export const ThemeContext = createContext(null)

function App () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <Suspense
      fallback={
        <div className='col text-center p-5'>
          <LoadingOutlined style={{ fontSize: 50, color: 'blue' }} spin />
        </div>
      }
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='App' id={theme}>
          <NavBarOffCanvas />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/units' element={<Units />} />
              <Route path='/partners' element={<Partners />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/givings' element={<Givings />} />
              <Route path='/membership' element={<Membership />} />
              <Route path='/response-form' element={<ResponseForm />} />
              <Route path='/bible-study' element={<BibleStudy />} />
              <Route path='/prayer' element={<Prayer />} />
              <Route path='/children-unit' element={<ChildrenUnit />} />
              <Route path='/alumni' element={<Alumni />} />
              <Route path='/alumni-membership' element={<AlumniMembership />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<SignUp />} />
              <Route path='/cp-admin' element={<Dashboard />} />
              <Route
                path='/alumni-membership-admin'
                element={<AlumniMembershipAdmin />}
              />
              <Route
                path='/alumni-announcement-admin'
                element={<AlumniAnnouncementAdmin />}
              />
              <Route path='/bible-story-admin' element={<BibleStoryAdmin />} />
              <Route path='/bible-study-admin' element={<BibleStudyAdmin />} />
              <Route path='/bible-study-schedule-admin' element={<BibleStudyScheduleAdmin />} />
              <Route path='/children-song-admin' element={<ChildrenSongAdmin />} />
              <Route path='/contact-us-admin' element={<ContactUsAdmin />} />
              <Route path='/donations-admin' element={<DonationsAdmin />} />
              <Route path='/meditation-admin' element={<MeditationAdmin />} />
              <Route path='/membership-admin' element={<MembershipAdmin />} />
              <Route path='/members-of-council-admin' element={<MembersOfCouncilAdmin />} />
              <Route path='/memory-verse-admin' element={<MemoryVerseAdmin />} />
              <Route path='/partners-admin' element={<PartnersAdmin />} />
              <Route path='/posts-admin' element={<PostsAdmin />} />
              <Route path='/prayer-meeting-admin' element={<PrayerMeetingAdmin />} />
              <Route path='/prayer-request-admin' element={<PrayerRequestAdmin />} />
              <Route path='/response-form-admin' element={<ResponseFormAdmin />} />
              <Route path='/services-admin' element={<ServicesAdmin />} />
              <Route path='/sliders-admin' element={<SlidersAdmin />} />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </main>
          <div className='switch'>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
          </div>
        </div>
        <Footer />
      </ThemeContext.Provider>
    </Suspense>
  )
}

export default App
