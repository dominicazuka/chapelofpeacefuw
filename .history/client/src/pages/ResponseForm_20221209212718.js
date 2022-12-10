import React, { useEffect, useState } from 'react'
import Input from '@mui/material/Input'
import { Button, Grid, TextField, Typography, Checkbox } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'

function ResponseForm () {
  const [phone_no, setPhone] = useState('')
  const [sex, setSex] = useState('male')
  const [marital_status, setMaritalStatus] = useState('single')
  const [status, setStatus] = useState('student')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [level, setLevel] = useState('')
  const [hostel_name, setHostelName] = useState('')
  const [room_number, setRoomNumber] = useState('')
  const [residential_address, setResidentialAddress] = useState('')
  const [reason, setReason] = useState('')
  const [prayer_point, setPrayerPoint] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleFirstNameInput = e => {
    e.preventDefault()
    setFirstName(e.target.value)
    console.log(firstName)
  }

  const handleLastNameInput = e => {
    e.preventDefault()
    setLastName(e.target.value)
    console.log(lastName)
  }

  const handlePhoneChange = e => {
    e.preventDefault()
    setPhone(e)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const fullName = `${firstName}` + `${lastName}`
      console.log('full Name', fullName)
      setName(fullName)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{ marginTop: '100px' }}
      >
        <strong>RESPONSE FORM</strong>
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{ padding: '10px' }}
      >
        <Grid item xs={12} sm={12} md={5}>
          <Typography
            variant='h5'
            className='text-center mb-5 allTitles'
            style={{
              background: `linear-gradient(rgba(0, 72, 6, 0.8), rgb(192, 72, 72, 0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg")`,
              color: 'white',
              height: '550px',
              paddingTop: '250px',
              paddingLeft: '20px',
              paddingRight: '20px'
            }}
          >
            <strong>
              Jesus said, "I am the way the truth and the life, no one goes to
              the Father except through me
            </strong>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <label>Full Name:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <TextField
                fullWidth
                required
                id='firstName'
                label='First Name'
                name='firstName'
                margin='normal'
                value={firstName}
                onChange={handleFirstNameInput}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                required
                id='surname'
                label='Surname'
                name='surname'
                className='mb-3'
                margin='normal'
                value={lastName}
                onChange={handleLastNameInput}
              />
            </Grid>
          </Grid>

          <label>Sex:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <Checkbox
                checked={sex === 'male'}
                onChange={() => setSex('male')}
              />
              <label class='form-check-label' for='male'>
                Male
              </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={sex === 'female'}
                onChange={() => setSex('female')}
              />
              <label class='form-check-label' for='female'>
                Female
              </label>
            </Grid>
          </Grid>

          <label className='mt-3'>Marital Status:</label>
          <Grid container direction='row' spacing={4}>
            <Grid item>
              <Checkbox
                checked={marital_status === 'single'}
                onChange={() => setMaritalStatus('single')}
              />
              <label class='form-check-label' for='single'>
                Single
              </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={marital_status === 'married'}
                onChange={() => setMaritalStatus('married')}
              />
              <label class='form-check-label' for='married'>
                Married
              </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={marital_status === 'widowed'}
                onChange={() => setMaritalStatus('widowed')}
              />
              <label class='form-check-label' for='widowed'>
                Widowed
              </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={marital_status === 'divorced'}
                onChange={() => setMaritalStatus('divorced')}
              />
              <label class='form-check-label' for='divorced'>
                Divorced
              </label>
            </Grid>
          </Grid>
          <label className='mt-3'>Phone Number:</label>
          <MuiTelInput
            value={phone_no}
            onChange={handlePhoneChange}
            className='form-control mt-3'
            placeholder='Phone Number (+234)'
          />

          <label className='mt-3'>What best describes you?:</label>
          <Grid container direction='row' spacing={3}>
            <Grid item>
              <Checkbox
                checked={status === 'student'}
                onChange={() => setStatus('student')}
              />
              <label class='form-check-label' for='student'>
                Student
              </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={status === 'staff'}
                onChange={() => setStatus('staff')}
              />
              <label class='form-check-label' for='staff'>
                Staff
              </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={status === 'other'}
                onChange={() => setStatus('other')}
              />
              <label class='form-check-label' for='other'>
                Other
              </label>
            </Grid>
          </Grid>

          <label className='mt-4'>Department:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Department'
                id='department'
                name='department'
                className='bordered form-control'
                placeholder='Department'
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Level:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Level'
                id='level'
                name='level'
                className='bordered form-control'
                placeholder='Level'
              />
            </Grid>
          </Grid>

          <label className='mt-4'>If in hostel, hostel name?:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Hostel Name'
                id='hostelName'
                name='hostelName'
                className='bordered form-control'
                placeholder='Hostel Name'
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Room Number:</label>

          <Input
            type='number'
            required
            id='roomNumber'
            label='Room Number'
            name='roomNumber'
            margin='normal'
            className='bordered form-control mt-4'
            inputProps={{ maxLength: 12 }}
            placeholder='Room Number'
          />

          <label className='mt-4'>
            If off campus, your residential address?:
          </label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Residential Address'
                id='residentialAddress'
                name='residentialAddress'
                className='bordered form-control'
                placeholder='Residential Address'
                style={{ height: '150px' }}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Reason(s) for your response:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Reason for your response'
                id='reasonForResponse'
                name='reasonForResponse'
                className='bordered form-control'
                placeholder='Reason for your response'
                style={{ height: '100px', width: '100%' }}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Prayer Point(s):</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Prayer Point(s)'
                id='prayerPoints'
                name='prayerPoints'
                className='bordered form-control'
                placeholder='Prayer Point(s)'
                style={{ height: '100px', width: '100%' }}
              />
            </Grid>
          </Grid>
          <Button
            variant='contained'
            size='small'
            color='primary'
            className='mt-4 mb-4'
            onChange={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default ResponseForm
