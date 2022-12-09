import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid' // Grid version 1
import Button from '@mui/material/Button'
import { Input, TextField, Typography } from '@mui/material'
import Axios from '../config'
import Swal from 'sweetalert2'

function Contact () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [comment, setComment] = useState('')
  const [nameError, setNameError] = useState('')
  const [loading, setLoading] = useState(false)

  const clearInput = () => {
    setName('')
    setEmail('')
    setSubject('')
    setComment('')
  }

  const handleNameInput = e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let isError = false
      if (name.trim() === '') {
        Swal.fire({
          text: 'Please enter your full name',
          customClass: {
            container: 'position-absolute'
          },
          toast: true,
          position: 'top-right'
        })
        isError = true
      }

      // if (isError) return false
      // setLoading(true)
      // const body = {
      //   country,
      //   countryCode,
      //   name,
      //   address,
      //   phone,
      //   location,
      //   email,
      //   time: fromTime + '-' + toTime,
      //   days: 'Mon, Tues, Wed, Thur, Fri'
      // }
      // await Axios.post('/centers/createcenter', body)
      // clearInput()
      // setLoading(false)
      // swal("Success", "Center added succesfully!", "info");
    } catch (error) {
      setLoading(false)
      // setMessage(error.message)
    }
  }

  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{ marginTop: '140px' }}
      >
        GET IN TOUCH
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        align='center'
      >
        {/**1st**/}

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          justifyContent='center'
          alignItems='center'
          align='center'
        >
          <i class='fa fa-map-marker fa-6 fa-5x' aria-hidden='true' />
          <Typography variant='h3' className='mb-2 mt-5'>
            <b>Address</b>
          </Typography>
          <br />
          <Typography variant='h5' style={{ color: 'white' }}>
            Chapel of Peace
          </Typography>
          <br />
          <Typography variant='h6'>
            Federal University Wukari, P.M.B 1020 Katsina-Ala Road Wukari,
            Taraba State, Nigeria
          </Typography>
        </Grid>

        {/**2nd**/}

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <i class='fa fa-phone fa-6 fa-5x' aria-hidden='true' />
          <Typography variant='h3' className='mb-2 mt-5'>
            <b>Phone</b>
          </Typography>
          <br />
          <Typography variant='h5'>
            <b>Secretary</b>
          </Typography>
          <Typography variant='h6'>+2348030000000</Typography>
          <Typography variant='h5'>
            <b>Chairman</b>
          </Typography>
          <Typography variant='h6'>+2348030000000</Typography>
          <Typography variant='h5'>
            <b>Chaplain</b>
          </Typography>
          <Typography variant='h6'>+2348030000000</Typography>
        </Grid>

        {/**3rd**/}

        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          xs={12}
          sm={12}
          md={4}
        >
          <i class='fa fa-envelope-o fa-6 fa-5x' aria-hidden='true' />
          <Typography variant='h3' className='mb-2 mt-5'>
            <b>Email</b>
          </Typography>
          <br />
          <Typography variant='h5'>
            <b>Secretary</b>
          </Typography>
          <Typography variant='h6'>info@chapelofpeace.org</Typography>
          <Typography variant='h5'>
            <b>Chairman</b>
          </Typography>
          <Typography variant='h6'>chairman@chapelofpeace.org</Typography>
          <Typography variant='h5'>
            <b>Chaplain</b>
          </Typography>
          <Typography variant='h6'>chaplain@chapelofpeace.org</Typography>
        </Grid>
      </Grid>

      <Grid
        spacing={1}
        columns={12}
        justifyContent='center'
        align='center'
        sx={{ padding: '20px' }}
      >
        <Grid item xs={12} sm={12} md={3}>
          <Typography variant='h3' className='mb-2 mt-5'>
            <b>Message Us:</b>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          align='center'
          sx={{ mb: 3, padding: '20px' }}
          direction='column'
          justify='center'
          alignItems='center'
        >
          <TextField
            fullWidth
            required
            id='fullName'
            label='Full Name'
            name='fullName'
            className=''
            margin='normal'
            value={name}
            onChange={handleNameInput}
          />

          <TextField
            fullWidth
            required
            id='email'
            label='Email'
            name='email'
            className=''
            margin='normal'
          />

          <TextField
            fullWidth
            required
            id='subject'
            label='Subject'
            name='subject'
            className=''
            margin='normal'
          />

          <Input
            fullWidth
            required
            id='comments'
            label='Comments'
            name='comments'
            className='bordered form-control mt-3'
            margin='normal'
            multiline
            style={{ height: '100px', width: '100%' }}
            placeholder='Comments'
          />

          <Grid container direction='row' spacing={2} style={{ marginTop: 20 }}>
            <Grid item>
              <Button variant='contained' size='small' color='warning'>
                Reset
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' size='small' color='success' onClick={handleSubmit}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
