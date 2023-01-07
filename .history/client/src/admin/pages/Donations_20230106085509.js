import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Title from '../components/Title'
import { Box, Container, Grid, IconButton, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import Sidebar from '../components/Sidebar'

function createData (name, email, phone_no, amount, purpose, action) {
  return { name, email, phone_no, amount, purpose, action }
}

const rows = [
  createData(
    'Spencer test',
    'spencer@gmail.com',
    '08023456789',
    24,
    'Offering',
    <Stack align='center'>
      <IconButton aria-label='delete' size='small'>
        <DeleteIcon fontSize='inherit' color='error' />
      </IconButton>
      <IconButton aria-label='create' size='small'>
        <CreateIcon fontSize='inherit' />
      </IconButton>
    </Stack>
  ),
  createData('Global test', 'global@gmail.com', '08023456789', 30, 'Tithe'),
  createData(
    'Man test',
    'man@gmail.com',
    '08023456789',
    49,
    'Building Project',
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
    'First test',
    'first@gmail.com',
    '08023456789',
    53,
    'Welfare',
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
    'Last test',
    'last@gmail.com',
    '08023456789',
    14,
    'Offering',
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

export default function Donations () {
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
                  <Title>All Donations</Title>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>S/N</TableCell>
                          <TableCell>Full Name</TableCell>
                          <TableCell align='center'>Email</TableCell>
                          <TableCell align='center'>Phone Number</TableCell>
                          <TableCell align='center'>Amount</TableCell>
                          <TableCell align='center'>
                            Purpose of Giving
                          </TableCell>
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
                            <TableCell align='right'>{row.email}</TableCell>
                            <TableCell align='right'>{row.phone_no}</TableCell>
                            <TableCell align='right'>{row.amount}</TableCell>
                            <TableCell align='right'>{row.purpose}</TableCell>
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
