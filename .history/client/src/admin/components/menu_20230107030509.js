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
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to='/cp-admin' style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemText primary='Dashboard' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SchoolIcon />
      </ListItemIcon>
      <Link
        to='/alumni-membership-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Alumni Memberships' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalLibraryIcon />
      </ListItemIcon>
      <Link
        to='/bible-study-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Bible Study' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ChildCareIcon />
      </ListItemIcon>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemText primary='Children Stories' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BedroomBabyIcon />
      </ListItemIcon>
      <Link
        to='/children-song-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Children Songs' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EmojiEventsIcon />
      </ListItemIcon>
      <ListItemText primary='Events' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <Link
        to='/donations-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Givings & Donations' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MemoryIcon />
      </ListItemIcon>
      <Link
        to='/memory-verse-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Memory Verse' />
        </Link>
    </ListItemButton>
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
    <ListItemButton>
      <ListItemIcon>
        <PostAddIcon />
      </ListItemIcon>
      <ListItemText primary='Posts' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DynamicFormIcon />
      </ListItemIcon>
      <ListItemText primary='Response Form' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <RecordVoiceOverIcon />
      </ListItemIcon>
      <ListItemText primary='Testimony' />
    </ListItemButton>
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
    <ListItemButton>
      <ListItemIcon>
        <AnnouncementIcon />
      </ListItemIcon>
      <Link
        to='/alumni-announcement-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Alumni Announcement' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AutoStoriesIcon />
      </ListItemIcon>
      <Link
        to='/bible-story-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Bible Story' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MoreTimeIcon />
      </ListItemIcon>
      <Link
        to='/bible-study-schedule-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Bible Study Schedule' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ContactMailIcon />
      </ListItemIcon>
      <Link
        to='/contact-us-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Contact Us Form' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ConnectWithoutContactIcon />
      </ListItemIcon>
      <Link
        to='/meditation-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Meditation' />
        </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SupervisedUserCircleIcon />
      </ListItemIcon>
      <Link
        to='/membership-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Memberhips' />
        </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SwitchAccountIcon />
      </ListItemIcon>
      <Link
        to='/members-of-council-admin'
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ListItemText primary='Members of Council' />
        </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MeetingRoomIcon />
      </ListItemIcon>
      <ListItemText primary='Prayer Meeting' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <RequestQuoteIcon />
      </ListItemIcon>
      <ListItemText primary='Prayer Requests' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HelpOutlineIcon />
      </ListItemIcon>
      <ListItemText primary='Response Form' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MiscellaneousServicesIcon />
      </ListItemIcon>
      <ListItemText primary='Services' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MiscellaneousServicesIcon />
      </ListItemIcon>
      <ListItemText primary='Services' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ViewCarouselIcon />
      </ListItemIcon>
      <ListItemText primary='Sliders' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ApartmentIcon />
      </ListItemIcon>
      <ListItemText primary='Units' />
    </ListItemButton>
  </React.Fragment>
)
