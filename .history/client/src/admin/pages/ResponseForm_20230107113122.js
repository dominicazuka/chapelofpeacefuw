import React from 'react'
import Sidebar from '../components/Sidebar'
import Title from '../components/Title'
import {
  Avatar,
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
import Add from '@mui/icons-material/Add'
import { styled } from '@mui/material/styles'

const ResponseForm = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  function createData (
    name,
    sex,
    marital_status,
    phone_no,
    status,
    department,
    level,
    hostel_name,
    room_number,
    residential_address,
    reason,
    prayer_point,
    action
  ) {
    return {
      name,
      sex,
      marital_status,
      phone_no,
      status,
      department,
      level,
      hostel_name,
      room_number,
      residential_address,
      reason,
      prayer_point,
      action
    }
  }

  const rows = [
    createData(
      'Test Name',
      'male',
      'single',
      '08032146321',
      'status test',
      'coding',
      '100l',
      'test hostel',
      'No. 39',
      'test address',
      'test reason',
      'test prayer point',
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
      'Test Name',
      'male',
      'single',
      '08032146321',
      'status test',
      'coding',
      '100l',
      'test hostel',
      'No. 39',
      'test address',
      'test reason',
      'test prayer point',
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
      'Test Name',
      'male',
      'single',
      '08032146321',
      'status test',
      'coding',
      '100l',
      'test hostel',
      'No. 39',
      'test address',
      'test reason',
      'test prayer point',
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
      'Test Name',
      'male',
      'single',
      '08032146321',
      'status test',
      'coding',
      '100l',
      'test hostel',
      'No. 39',
      'test address',
      'test reason',
      'test prayer point',
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
                  <Title>All Response</Title>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>S/N</TableCell>
                          <TableCell align='center'>Name</TableCell>
                          <TableCell align='center'>Sex</TableCell>
                          <TableCell align='center'>Marital Status</TableCell>
                          <TableCell align='center'>Department</TableCell>
                          <TableCell align='center'>Level</TableCell>
                          <TableCell align='center'>Hostel Name</TableCell>
                          <TableCell align='center'>Room Number</TableCell>
                          <TableCell align='center'>
                            Residential Address
                          </TableCell>
                          <TableCell align='center'>Reason</TableCell>
                          <TableCell align='center'>Prayer Point</TableCell>
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
                            <TableCell sx={{ width: '10px' }}>
                              {i + 1}
                            </TableCell>
                            <TableCell align='center'>{row.name}</TableCell>
                            <TableCell align='center'>{row.sex}</TableCell>
                            <TableCell align='center'>
                              {row.marital_status}
                            </TableCell>
                            <TableCell align='center'>{row.department}</TableCell>
                            <TableCell align='center'>{row.level}</TableCell>
                            <TableCell align='center'>{row.level}</TableCell>
                            <TableCell align='center'>
                              {row.hostel_name}
                            </TableCell>
                            <TableCell align='center'>
                              {row.room_number}
                            </TableCell>
                            <TableCell align='center'>
                              {row.residential_address}
                            </TableCell>
                            <TableCell align='center'>{row.reason}</TableCell>
                            <TableCell align='center'>
                              {row.prayer_point}
                            </TableCell>
                            <TableCell align='center'>{row.action}</TableCell>
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

export default ResponseForm
