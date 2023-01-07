import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Title from '../components/Title'
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import Sidebar from '../components/Sidebar'
import Add from '@mui/icons-material/Add'
import { styled } from '@mui/material/styles'

function createData (
  name,
  photo,
  facebook,
  instagram,
  linkedIn,
  twitter,
  action
) {
  return { name, photo, facebook, instagram, linkedIn, twitter, action }
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const rows = [
  createData(
    'Test Name',
    <Avatar
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    'facebook test',
    'instagram test',
    'linkedin test',
    'twitter test',
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
    <Avatar
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    'facebook test',
    'instagram test',
    'linkedin test',
    'twitter test',
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
    <Avatar
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    'facebook test',
    'instagram test',
    'linkedin test',
    'twitter test',
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
    <Avatar
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    'facebook test',
    'instagram test',
    'linkedin test',
    'twitter test',
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
    <Avatar
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    'facebook test',
    'instagram test',
    'linkedin test',
    'twitter test',
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
    <Avatar
      src={
        'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'
      }
    />,
    'facebook test',
    'instagram test',
    'linkedin test',
    'twitter test',
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

export default function MembersOfCouncil () {
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
                  <Title>All Members of Council</Title>
                  <Stack spacing={2}>
                    <Item></Item>
                    <Item>
                      <Button variant='contained' startIcon={<Add />}>
                        Add Member of Council
                      </Button>
                    </Item>
                  </Stack>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell>S/N</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell align='center'>Photo</TableCell>
                          <TableCell align='center'>Facebook</TableCell>
                          <TableCell align='center'>Instagram</TableCell>
                          <TableCell align='center'>LinkedIn</TableCell>
                          <TableCell align='center'>Twitter</TableCell>
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
                            <TableCell align='center'>{row.name}</TableCell>
                            <TableCell align='center'>{row.photo}</TableCell>
                            <TableCell align='center'>{row.facebook}</TableCell>
                            <TableCell align='center'>
                              {row.instagram}
                            </TableCell>
                            <TableCell align='center'>{row.linkedIn}</TableCell>
                            <TableCell align='center'>{row.twitter}</TableCell>
                            <TableCell component='th' scope='row'>
                              {row.action}
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
