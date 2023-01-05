import React from 'react'
import Sidebar from './components/Sidebar'
import Title from './components/Title'
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'

const AlumniAnnouncement = () => {
  function createData (title, description, action) {
    return {
      title,
      description,
      action
    }
  }

  const rows = [
    createData(
      'Title Test',
      'Description Test',
      <Stack align='center'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='inherit' color='error' />
        </IconButton>
        <IconButton aria-label='delete' size='small'>
          <CreateIcon fontSize='inherit' />
        </IconButton>
      </Stack>
    ),
    createData(
      'Title Test',
      'Description Test',
      <Stack align='center'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='inherit' color='error' />
        </IconButton>
        <IconButton aria-label='delete' size='small'>
          <CreateIcon fontSize='inherit' />
        </IconButton>
      </Stack>
    ),
    createData(
      'Title Test',
      'Description Test',
      <Stack align='center'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='inherit' color='error' />
        </IconButton>
        <IconButton aria-label='delete' size='small'>
          <CreateIcon fontSize='inherit' />
        </IconButton>
      </Stack>
    ),
    createData(
      'Title Test',
      'Description Test',
      <Stack align='center'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='inherit' color='error' />
        </IconButton>
        <IconButton aria-label='delete' size='small'>
          <CreateIcon fontSize='inherit' />
        </IconButton>
      </Stack>
    ),
    createData(
      'Title Test',
      'Description Test',
      <Stack align='center'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='inherit' color='error' />
        </IconButton>
        <IconButton aria-label='delete' size='small'>
          <CreateIcon fontSize='inherit' />
        </IconButton>
      </Stack>
    )
  ]

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
                  <Title>Alumni Membership</Title>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>S/N</TableCell>
                          <TableCell>Title</TableCell>
                          <TableCell align='right'>Sex</TableCell>
                          <TableCell align='right'>Marital Status</TableCell>
                          <TableCell align='right'>No. of Children</TableCell>
                          <TableCell align='right'>Date of Birth</TableCell>
                          <TableCell align='right'>Country</TableCell>
                          <TableCell align='right'>State</TableCell>
                          <TableCell align='right'>City</TableCell>
                          <TableCell align='right'>Email</TableCell>
                          <TableCell align='right'>Phone Number</TableCell>
                          <TableCell align='right'>Contact Address</TableCell>
                          <TableCell align='right'>
                            Residential Address
                          </TableCell>
                          <TableCell align='right'>
                            Type of Membership
                          </TableCell>
                          <TableCell align='right'>Department</TableCell>
                          <TableCell align='right'>Faculty</TableCell>
                          <TableCell align='right'>Permanent Address</TableCell>
                          <TableCell align='right'>
                            Year of Graduation
                          </TableCell>
                          <TableCell align='right'>Service Unit</TableCell>
                          <TableCell align='right'>Content</TableCell>
                          <TableCell align='right'>Photo</TableCell>
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
                            <TableCell align='right'>{row.title}</TableCell>
                            <TableCell align='right'>
                              {row.description}
                            </TableCell>
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

export default AlumniAnnouncement
