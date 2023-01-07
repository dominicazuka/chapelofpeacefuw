import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Title from '../components/Title'
import { Avatar, Box, Container, Grid, IconButton, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import Sidebar from '../components/Sidebar'

function createData (
  name,
  sex,
  marital_status,
  no_of_children,
  date_of_birth,
  country,
  state,
  city,
  email,
  phone_no,
  type_of_membership,
  department,
  level,
  permanent_address,
  contact_address,
  residential_address,
  next_of_kin_name,
  next_of_kin_phone_no,
  next_of_kin_address,
  born_again,
  baptized,
  baptism_method,
  holy_ghost_baptism,
  speaking_in_tongues,
  service_unit,
  content,
  photo,
  action
) {
  return {
    name,
    sex,
    marital_status,
    no_of_children,
    date_of_birth,
    country,
    state,
    city,
    email,
    phone_no,
    type_of_membership,
    department,
    level,
    permanent_address,
    contact_address,
    residential_address,
    next_of_kin_name,
    next_of_kin_phone_no,
    next_of_kin_address,
    born_again,
    baptized,
    baptism_method,
    holy_ghost_baptism,
    speaking_in_tongues,
    service_unit,
    content,
    photo,
    action
  }
}

const rows = [
  createData(
    'Spencer test',
    'male',
    'Single',
    4,
    '2-3-1998',
    'Nigeria',
    'Abuja',
    'Gwarinpa',
    'test@gmail.com',
    '08032146321',
    'basic',
    'choir',
    'level 1',
    'g.r.a',
    'wukari',
    'wapan',
    'promise',
    '09032146321',
    'lagos',
    'yes',
    'yes',
    'immersion',
    'yes',
    'yes',
    'music',
    'test',
    <Avatar
      align='center'
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    <Stack align='center'>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='inherit' color='error' />
      </IconButton>
      <IconButton aria-label='create' size='small'>
        <CreateIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  ),
  createData(
    'Spencer test',
    'male',
    'Single',
    4,
    '2-3-1998',
    'Nigeria',
    'Abuja',
    'Gwarinpa',
    'test@gmail.com',
    '08032146321',
    'basic',
    'choir',
    'level 1',
    'g.r.a',
    'wukari',
    'wapan',
    'promise',
    '09032146321',
    'lagos',
    'yes',
    'yes',
    'immersion',
    'yes',
    'yes',
    'music',
    'test',
    <Avatar
      align='center'
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    <Stack align='center'>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='inherit' color='error' />
      </IconButton>
      <IconButton aria-label='create' size='small'>
        <CreateIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  ),
  createData(
    'Spencer test',
    'male',
    'Single',
    4,
    '2-3-1998',
    'Nigeria',
    'Abuja',
    'Gwarinpa',
    'test@gmail.com',
    '08032146321',
    'basic',
    'choir',
    'level 1',
    'g.r.a',
    'wukari',
    'wapan',
    'promise',
    '09032146321',
    'lagos',
    'yes',
    'yes',
    'immersion',
    'yes',
    'yes',
    'music',
    'test',
    <Avatar
      align='center'
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    <Stack align='center'>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='inherit' color='error' />
      </IconButton>
      <IconButton aria-label='create' size='small'>
        <CreateIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  ),
  createData(
    'Spencer test',
    'male',
    'Single',
    4,
    '2-3-1998',
    'Nigeria',
    'Abuja',
    'Gwarinpa',
    'test@gmail.com',
    '08032146321',
    'basic',
    'choir',
    'level 1',
    'g.r.a',
    'wukari',
    'wapan',
    'promise',
    '09032146321',
    'lagos',
    'yes',
    'yes',
    'immersion',
    'yes',
    'yes',
    'music',
    'test',
    <Avatar
      align='center'
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    <Stack align='center'>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='inherit' color='error' />
      </IconButton>
      <IconButton aria-label='create' size='small'>
        <CreateIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  ),
  createData(
    'Spencer test',
    'male',
    'Single',
    4,
    '2-3-1998',
    'Nigeria',
    'Abuja',
    'Gwarinpa',
    'test@gmail.com',
    '08032146321',
    'basic',
    'choir',
    'level 1',
    'g.r.a',
    'wukari',
    'wapan',
    'promise',
    '09032146321',
    'lagos',
    'yes',
    'yes',
    'immersion',
    'yes',
    'yes',
    'music',
    'test',
    <Avatar
      align='center'
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    <Stack align='center'>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='inherit' color='error' />
      </IconButton>
      <IconButton aria-label='create' size='small'>
        <CreateIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  ),
  createData(
    'Spencer test',
    'male',
    'Single',
    4,
    '2-3-1998',
    'Nigeria',
    'Abuja',
    'Gwarinpa',
    'test@gmail.com',
    '08032146321',
    'basic',
    'choir',
    'level 1',
    'g.r.a',
    'wukari',
    'wapan',
    'promise',
    '09032146321',
    'lagos',
    'yes',
    'yes',
    'immersion',
    'yes',
    'yes',
    'music',
    'test',
    <Avatar
      align='center'
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    <Stack align='center'>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='inherit' color='error' />
      </IconButton>
      <IconButton aria-label='create' size='small'>
        <CreateIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  )
]

export default function Membership () {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component='main'
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Container maxWidth='lg' sx={{ mt: 25, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Title>All Membership</Title>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>S/N</TableCell>
                          <TableCell>Full Name</TableCell>
                          <TableCell align='center'>Name</TableCell>
                          <TableCell align='center'>Sex</TableCell>
                          <TableCell align='center'>Marital Status</TableCell>
                          <TableCell align='center'>No. of Children</TableCell>
                          <TableCell align='center'>Date of Birth</TableCell>
                          <TableCell align='center'>Country</TableCell>
                          <TableCell align='center'>State</TableCell>
                          <TableCell align='center'>City</TableCell>
                          <TableCell align='center'>Email</TableCell>
                          <TableCell align='center'>Phone Number</TableCell>
                          <TableCell align='center'>
                            Type of Membership
                          </TableCell>
                          <TableCell align='center'>Department</TableCell>
                          <TableCell align='center'>Level</TableCell>
                          <TableCell align='center'>
                            Permanent Address
                          </TableCell>
                          <TableCell align='center'>Contact Address</TableCell>
                          <TableCell align='center'>
                            Residential Address
                          </TableCell>
                          <TableCell align='center'>Next of Kin Name</TableCell>
                          <TableCell align='center'>
                            Next of Kin Phone Number
                          </TableCell>
                          <TableCell align='center'>
                            Next of Kin Address
                          </TableCell>
                          <TableCell align='center'>Born Again</TableCell>
                          <TableCell align='center'>Baptized</TableCell>
                          <TableCell align='center'>Baptism Method</TableCell>
                          <TableCell align='center'>
                            Holy Ghost Baptism
                          </TableCell>
                          <TableCell align='center'>
                            Speaking in Tongues
                          </TableCell>
                          <TableCell align='center'>Service Unit</TableCell>
                          <TableCell align='center'>Content</TableCell>
                          <TableCell align='center'>Photo</TableCell>
                          <TableCell align='center'>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, i) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 }
                            }}
                          >
                            <TableCell>{i + 1}</TableCell>
                            <TableCell component='th' scope='row'>
                              {row.name}
                            </TableCell>
                            <TableCell align='right'>{row.name}</TableCell>
                            <TableCell align='right'>{row.sex}</TableCell>
                            <TableCell align='right'>
                              {row.marital_status}
                            </TableCell>
                            <TableCell align='right'>
                              {row.no_of_children}
                            </TableCell>
                            <TableCell align='right'>
                              {row.date_of_birth}
                            </TableCell>
                            <TableCell align='right'>{row.country}</TableCell>
                            <TableCell align='right'>{row.state}</TableCell>
                            <TableCell align='right'>{row.city}</TableCell>
                            <TableCell align='right'>{row.email}</TableCell>
                            <TableCell align='right'>{row.phone_no}</TableCell>
                            <TableCell align='right'>
                              {row.type_of_membership}
                            </TableCell>
                            <TableCell align='right'>
                              {row.department}
                            </TableCell>
                            <TableCell align='right'>{row.level}</TableCell>
                            <TableCell align='right'>
                              {row.permanent_address}
                            </TableCell>
                            <TableCell align='right'>
                              {row.contact_address}
                            </TableCell>
                            <TableCell align='right'>
                              {row.residential_address}
                            </TableCell>
                            <TableCell align='right'>
                              {row.next_of_kin_name}
                            </TableCell>
                            <TableCell align='right'>
                              {row.next_of_kin_phone_no}
                            </TableCell>
                            <TableCell align='right'>
                              {row.next_of_kin_address}
                            </TableCell>
                            <TableCell align='right'>
                              {row.born_again}
                            </TableCell>
                            <TableCell align='right'>{row.baptized}</TableCell>
                            <TableCell align='right'>
                              {row.baptism_method}
                            </TableCell>
                            <TableCell align='right'>
                              {row.holy_ghost_baptism}
                            </TableCell>
                            <TableCell align='right'>
                              {row.speaking_in_tongues}
                            </TableCell>

                            <TableCell align='right'>
                              {row.service_unit}
                            </TableCell>
                            <TableCell align='right'>{row.content}</TableCell>
                            <TableCell align='right'>{row.photo}</TableCell>
                            <TableCell align='right'>{row.action}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}
