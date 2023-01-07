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

const PrayerRequest = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  function createData (name, phone_no, email, content, action) {
    return {
      name,
      phone_no,
      email,
      content,
      action
    }
  }

  const rows = [
    createData(
      'Test Name',
      '08032146321',
      'test@gmail.com',
      'test content',
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
      '08032146321',
      'test@gmail.com',
      'test content',
      <Stack align='center'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='inherit' color='error' />
        </IconButton>
        <IconButton aria-label='create' size='small'>
          <CreateIcon fontSize='inherit' />
        </IconButton>
      </Stack>
    ),createData(
      'Test Name',
      '08032146321',
      'test@gmail.com',
      'test content',
      <Stack align='center'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='inherit' color='error' />
        </IconButton>
        <IconButton aria-label='create' size='small'>
          <CreateIcon fontSize='inherit' />
        </IconButton>
      </Stack>
    ),createData(
      'Test Name',
      '08032146321',
      'test@gmail.com',
      'test content',
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
                  <Title>All Prayer Requests</Title>

                  <Stack spacing={2}>
                    <Item></Item>
                    <Item>
                      <Button variant='contained' startIcon={<Add />}>
                        Add Prayer Requests
                      </Button>
                    </Item>
                  </Stack>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>S/N</TableCell>
                          <TableCell align='center'>Name</TableCell>
                          <TableCell align='center'>Phone Number</TableCell>
                          <TableCell align='center'>Email</TableCell>
                          <TableCell align='center'>Content</TableCell>
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
                            <TableCell align='center'>{row.phone_no}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                            <TableCell align='center'>{row.content}</TableCell>
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

export default PrayerRequest
