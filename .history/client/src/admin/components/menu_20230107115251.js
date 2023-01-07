import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AssignmentIcon from '@mui/icons-material/Assignment'
import SchoolIcon from '@mui/icons-material/School'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import MemoryIcon from '@mui/icons-material/Memory'
import HandshakeIcon from '@mui/icons-material/Handshake'
import PostAddIcon from '@mui/icons-material/PostAdd'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes'
import DynamicFormIcon from '@mui/icons-material/DynamicForm'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel'
import ApartmentIcon from '@mui/icons-material/Apartment'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import { Link } from 'react-router-dom'

export const mainMenuItems = (
  <React.Fragment>
    <Link to='/cp-admin' style={{ textDecoration: 'none', color: 'black' }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>

        <ListItemText primary='Dashboard' />
      </ListItemButton>
    </Link>
    <Link
      to='/alumni-membership-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>

        <ListItemText primary='Alumni Memberships' />
      </ListItemButton>
    </Link>
    <Link
      to='/bible-study-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>

        <ListItemText primary='Bible Study' />
      </ListItemButton>
    </Link>

    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
      <ListItemButton>
        <ListItemIcon>
          <ChildCareIcon />
        </ListItemIcon>

        <ListItemText primary='Children Stories' />
      </ListItemButton>
    </Link>
    <Link
      to='/children-song-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <BedroomBabyIcon />
        </ListItemIcon>

        <ListItemText primary='Children Songs' />
      </ListItemButton>
    </Link>

    <ListItemButton>
      <ListItemIcon>
        <EmojiEventsIcon />
      </ListItemIcon>
      <ListItemText primary='Events' />
    </ListItemButton>

    <Link
      to='/donations-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>

        <ListItemText primary='Givings & Donations' />
      </ListItemButton>
    </Link>

    <Link
      to='/memory-verse-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <MemoryIcon />
        </ListItemIcon>
        <ListItemText primary='Memory Verse' />
      </ListItemButton>
    </Link>

    <Link
      to='/partners-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <HandshakeIcon />
        </ListItemIcon>
        <ListItemText primary='Partners' />
      </ListItemButton>
    </Link>
    <Link to='/posts-admin' style={{ textDecoration: 'none', color: 'black' }}>
      <ListItemButton>
        <ListItemIcon>
          <PostAddIcon />
        </ListItemIcon>
        <ListItemText primary='Posts' />
      </ListItemButton>
    </Link>
    <Link to='/testimonials-admin' style={{ textDecoration: 'none', color: 'black' }}>
    <ListItemButton>
      <ListItemIcon>
        <RecordVoiceOverIcon />
      </ListItemIcon>
      <ListItemText primary='Testimony' />
      </ListItemButton>
      </Link>
    <ListItemButton>
      <ListItemIcon>
        <ManageAccountsIcon />
      </ListItemIcon>
      <ListItemText primary='Admin Users' />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryMenuItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Additional Menu
    </ListSubheader>
    <Link
      to='/alumni-announcement-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <AnnouncementIcon />
        </ListItemIcon>

        <ListItemText primary='Alumni Announcement' />
      </ListItemButton>
    </Link>
    <Link
      to='/bible-story-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <AutoStoriesIcon />
        </ListItemIcon>

        <ListItemText primary='Bible Story' />
      </ListItemButton>
    </Link>
    <Link
      to='/bible-study-schedule-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <MoreTimeIcon />
        </ListItemIcon>

        <ListItemText primary='Bible Study Schedule' />
      </ListItemButton>
    </Link>
    <Link
      to='/contact-us-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>

        <ListItemText primary='Contact Us Form' />
      </ListItemButton>
    </Link>
    <Link
      to='/meditation-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <ConnectWithoutContactIcon />
        </ListItemIcon>

        <ListItemText primary='Meditation' />
      </ListItemButton>
    </Link>
    <Link
      to='/membership-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>

        <ListItemText primary='Memberhips' />
      </ListItemButton>
    </Link>

    <Link
      to='/members-of-council-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <SwitchAccountIcon />
        </ListItemIcon>

        <ListItemText primary='Members of Council' />
      </ListItemButton>
    </Link>
    <Link
      to='/prayer-meeting-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <MeetingRoomIcon />
        </ListItemIcon>
        <ListItemText primary='Prayer Meeting' />
      </ListItemButton>
    </Link>
    <Link
      to='/prayer-request-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <RequestQuoteIcon />
        </ListItemIcon>
        <ListItemText primary='Prayer Requests' />
      </ListItemButton>
    </Link>
    <Link
      to='/response-form-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
    <ListItemButton>
      <ListItemIcon>
        <HelpOutlineIcon />
      </ListItemIcon>
      <ListItemText primary='Response Form' />
      </ListItemButton>
    </Link>
    <Link
      to='/services-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
    <ListItemButton>
      <ListItemIcon>
        <MiscellaneousServicesIcon />
      </ListItemIcon>
      <ListItemText primary='Services' />
      </ListItemButton>
    </Link>
    <Link
      to='/sliders-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
    <ListItemButton>
      <ListItemIcon>
        <ViewCarouselIcon />
      </ListItemIcon>
      <ListItemText primary='Sliders' />
      </ListItemButton>
    </Link>
    <Link
      to='/units-admin'
      style={{ textDecoration: 'none', color: 'black' }}
    >
    <ListItemButton>
      <ListItemIcon>
        <ApartmentIcon />
      </ListItemIcon>
      <ListItemText primary='Units' />
      </ListItemButton>
      </Link>
  </React.Fragment>
)
