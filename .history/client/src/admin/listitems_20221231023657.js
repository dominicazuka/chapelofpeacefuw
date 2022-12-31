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
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MemoryIcon from '@mui/icons-material/Memory'
import HandshakeIcon from '@mui/icons-material/Handshake';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes'
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { Link } from 'react-router-dom'

export const mainListItems = (
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
      <Link to='/alumni-membership-admin' style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemText primary='Alumni Memberships' />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LocalLibraryIcon />
      </ListItemIcon>
      <ListItemText primary='Bible Study' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ChildCareIcon />
      </ListItemIcon>
      <ListItemText primary='Children Stories' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BedroomBabyIcon />
      </ListItemIcon>
      <ListItemText primary='Children Songs' />
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
      <ListItemText primary='Givings & Donations' />
    </ListItemButton>
  <ListItemButton>
      <ListItemIcon>
        <MemoryIcon />
      </ListItemIcon>
      <ListItemText primary='Memory Verse' />
    </ListItemButton>
     <ListItemButton>
      <ListItemIcon>
        <HandshakeIcon />
      </ListItemIcon>
      <ListItemText primary='Partners' />
    </ListItemButton>
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
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Additional Menu
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AnnouncementIcon />
      </ListItemIcon>
      <ListItemText primary='Alumni Announcement' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItemButton>
  </React.Fragment>
)
