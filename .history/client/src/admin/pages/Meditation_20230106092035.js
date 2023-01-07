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

function createData (title, date, time, venue, content, photo, action) {
  return { title, date, time, venue, content, photo, action }
}

const rows = [
  createData(
    'Meditation test',
    '10-2-23',
    '10:24AM',
    'test venue',
    'test content',
    <Avatar
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
    'Meditation test',
    '10-2-23',
    '10:24AM',
    'test venue',
    'test content',
    <Avatar
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
    'Meditation test',
    '10-2-23',
    '10:24AM',
    'test venue',
    'test content',
    <Avatar
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
    'Meditation test',
    '10-2-23',
    '10:24AM',
    'test venue',
    'test content',
    <Avatar
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
    'Meditation test',
    '10-2-23',
    '10:24AM',
    'test venue',
    'test content',
    <Avatar
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
    'Meditation test',
    '10-2-23',
    '10:24AM',
    'test venue',
    'test content',
    <Avatar
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

export default function Meditation () {
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
                  <Title>All Meditation</Title>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>S/N</TableCell>
                          <TableCell>Title</TableCell>
                          <TableCell align='center'>Date</TableCell>
                          <TableCell align='center'>Time</TableCell>
                          <TableCell align='center'>Venue</TableCell>
                          <TableCell align='center'>Content</TableCell>
                          <TableCell align='center'>Photo</TableCell>
                          <TableCell align='center'>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, i) => (
                          <TableRow
                            key={row.title}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 }
                            }}
                          >
                            <TableCell>{i + 1}</TableCell>
                            <TableCell align='center'>{row.title}</TableCell>
                            <TableCell align='center'>{row.date}</TableCell>
                            <TableCell align='center'>{row.time}</TableCell>
                            <TableCell align='center'>{row.venue}</TableCell>
                            <TableCell align='center'>{row.content}</TableCell>
                            <TableCell component='th' scope='row'>
                              {row.photo}
                            </TableCell>
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
