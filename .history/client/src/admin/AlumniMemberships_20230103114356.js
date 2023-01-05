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
import { DataGrid } from '@mui/x-data-grid';

const AlumniMemberships = () => {
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
    contact_address,
    residential_address,
    type_of_membership,
    department,
    faculty,
    permanent_address,
    year_of_graduation,
    service_unit,
    content,
    photo
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
      contact_address,
      residential_address,
      type_of_membership,
      department,
      faculty,
      permanent_address,
      year_of_graduation,
      service_unit,
      content,
      photo
    }
  }

  const rows = [
    createData(
      'Spencer test',
      'male',
      'Single',
      '2-4-1998',
      'Nigeria',
      'Abuja',
      'Gwarimpa',
      'pencer@test.com',
      '08032146321',
      'mab global',
      'fynestone estate',
      'standard',
      'choir',
      'singing',
      'fynestone',
      '2020',
      'choir unit',
      'test',
      'test.jpg'
    ),
    createData(
      'Spencer test',
      'male',
      'Single',
      '2-4-1998',
      'Nigeria',
      'Abuja',
      'Gwarimpa',
      'pencer@test.com',
      '08032146321',
      'mab global',
      'fynestone estate',
      'standard',
      'choir',
      'singing',
      'fynestone',
      '2020',
      'choir unit',
      'test',
      'test.jpg'
    ),
    createData(
      'Spencer test',
      'male',
      'Single',
      '2-4-1998',
      'Nigeria',
      'Abuja',
      'Gwarimpa',
      'pencer@test.com',
      '08032146321',
      'mab global',
      'fynestone estate',
      'standard',
      'choir',
      'singing',
      'fynestone',
      '2020',
      'choir unit',
      'test',
      'test.jpg'
    ),
    createData(
      'Spencer test',
      'male',
      'Single',
      '2-4-1998',
      'Nigeria',
      'Abuja',
      'Gwarimpa',
      'pencer@test.com',
      '08032146321',
      'mab global',
      'fynestone estate',
      'standard',
      'choir',
      'singing',
      'fynestone',
      '2020',
      'choir unit',
      'test',
      'test.jpg'
    ),
    createData(
      'Spencer test',
      'male',
      'Single',
      '2-4-1998',
      'Nigeria',
      'Abuja',
      'Gwarimpa',
      'pencer@test.com',
      '08032146321',
      'mab global',
      'fynestone estate',
      'standard',
      'choir',
      'singing',
      'fynestone',
      '2020',
      'choir unit',
      'test',
      'test.jpg'
    )
  ]

  const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: params =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`
  }
]

const rows1 = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
] 


  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Container maxWidth='lg' sx={{ mt: 20, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Title>Alumni Membership</Title>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Full Name</TableCell>
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
                        <TableCell align='right'>Residential Address</TableCell>
                        <TableCell align='right'>Type of Membership</TableCell>
                        <TableCell align='right'>Department</TableCell>
                        <TableCell align='right'>Faculty</TableCell>
                        <TableCell align='right'>Permanent Address</TableCell>
                        <TableCell align='right'>Year of Graduation</TableCell>
                        <TableCell align='right'>Service Unit</TableCell>
                        <TableCell align='right'>Content</TableCell>
                        <TableCell align='right'>Photo</TableCell>
                        <TableCell align='center'>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow
                          key={row.name}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 }
                          }}
                        >
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
                            {row.contact_address}
                          </TableCell>
                          <TableCell align='right'>
                            {row.residential_address}
                          </TableCell>
                          <TableCell align='right'>
                            {row.type_of_membership}
                          </TableCell>
                          <TableCell align='right'>{row.department}</TableCell>
                          <TableCell align='right'>{row.faculty}</TableCell>
                          <TableCell align='right'>
                            {row.permanent_address}
                          </TableCell>
                          <TableCell align='right'>
                            {row.year_of_graduation}
                          </TableCell>
                          <TableCell align='right'>
                            {row.service_unit}
                          </TableCell>
                          <TableCell align='right'>{row.content}</TableCell>
                          <TableCell align='right'>{row.photo}</TableCell>
                          <TableCell align='center'>
                            <Stack align="center">
                              <IconButton aria-label='delete' size='small'>
                                <DeleteIcon fontSize='inherit' color='error' />
                              </IconButton>
                              <IconButton aria-label='delete' size='small'>
                                <CreateIcon fontSize='inherit' />
                              </IconButton>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <DataGrid
                  sx={{paddingTop: 100}}
        rows={rows1}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default AlumniMemberships
