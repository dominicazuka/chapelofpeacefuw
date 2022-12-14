import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid' // Grid version 1
import Button from '@mui/material/Button'
import {
  Card,
  CardMedia,
  Checkbox,
  Input,
  TextField,
  Typography
} from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'
import Axios from '../config'
import Swal from 'sweetalert2'
import { validateEmail } from '../utils'

function Givings () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_no, setPhone] = useState('')
  const [amount, setAmount] = useState()
  const [purpose, setPurpose] = useState('offering')
  const [gateway, setGateway] = useState('')
  const [details, setDetails] = useState('')

  const handlePhoneChange = newPhone => {
    setPhone(newPhone)
  }
  const handleAmountChange = e => {
    const regex = /^[0-9\b]+$/
    if (e.target.value == '' || regex.test(e.target.value)) {
      setAmount(e.target.value)
    }
  }

  const clearInput = () => {
    setName('')
    setPhone('')
    setPurpose('')
    setAmount('')
    setGateway('')
    setDetails('')
    setEmail('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let isError = false
      if (name.trim() === '') {
        return Swal.fire({
          text: 'Please enter your full name',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }
      if (!validateEmail(email.trim())) {
        return Swal.fire({
          text: 'Please enter a valid email address',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }
      if (purpose.trim() === '') {
        return Swal.fire({
          text: 'Please enter a purpose',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }
      if (amount.trim() === '') {
        return Swal.fire({
          text: 'Please enter your desired amount',
          toast: true,
          confirmButtonColor: '#0000FF'
        })  
      }
      if (isError) return false
      const body = {
        name,
        email,
        purpose,
        amount,
        phone_no,
        gateway:"payPal",
        details:"test"
      }
      await Axios.post('/donations', body)
      clearInput()
      Swal.fire({
        text: 'Donations paid successfully',
        icon: 'success',
        animation: true,
        confirmButtonColor: '#0000FF'
      })
    } catch (error) {
      // setMessage(error.message)
    }
  }

  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{
          marginTop: '90px',
          background: `linear-gradient(rgba(0, 72, 6, 0.8), rgb(192, 72, 72, 0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg")`,
          color: 'white',
          height: '200px',
          paddingTop: '70px'
        }}
      >
        <strong>Givings and Donations</strong>
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        align='center'
        sx={{padding:"20px"}}
      >
        <Grid direction='column' justifyContent='center' alignItems='center'>
          <TextField
            fullWidth
            required
            id='fullName'
            label='Full Name'
            name='fullName'
            className=''
            margin='normal'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            fullWidth
            required
            id='email'
            label='Email'
            name='email'
            className=''
            margin='normal'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <MuiTelInput
            value={phone_no}
            onChange={handlePhoneChange}
            className='form-control mt-3'
            placeholder='Phone Number (+234)'
          />
          <Input
            type='number'
            required
            id='amount'
            label='Amount (NGN)'
            name='amount'
            margin='normal'
            onChange={e => setAmount(e.target.value)}
            defaultValue={amount}
            className='bordered form-control mt-4'
            inputProps={{ maxLength: 12 }}
            placeholder='Amount (NGN)'
          />
          <Typography variant='h4' sx={{ mt: 3 }}>
            Purpose of Giving:
          </Typography>
          <Grid
            align='center'
            container
            spacing={1}
            columns={12}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={6} sm={6} md={3}>
              <Checkbox
              checked={purpose === 'offering'}
                onChange={() => setPurpose('offering')}
              />
              <label class='form-check-label' for='offering'>
                Offering
              </label>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Checkbox
              checked={purpose === 'tithe'}
              onChange={() => setPurpose('tithe')}
              />
              <label class='form-check-label' for='tithe'>
                Tithe
              </label>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Checkbox
              checked={purpose === 'building project'}
              onChange={() => setPurpose('building project')}
              />
              <label class='form-check-label' for='biuildingProject'>
                Building Project
              </label>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Checkbox
              checked={purpose === 'welfare'}
              onChange={() => setPurpose('welfare')}
              />
              <label class='form-check-label' for='welfare'>
                Welfare
              </label>
            </Grid>
          </Grid>

          <Grid
            align='center'
            container
            spacing={1}
            columns={12}
            justifyContent='center'
            alignItems='center'
            className='row'
          >
            <Grid item xs={12} sm={12} md={12}>
              <CardMedia
                component='img'
                height='100'
                width="100"
                image='https://www.seekpng.com/png/detail/301-3017176_paypal-credit-card-png-png-secure-paypal-payment.png'
                alt='first slide'
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid
                container
                direction='row'
                spacing={2}
                style={{ marginTop: 20 }}
              >
                
                <Grid item align="center">
                  <Button variant='contained' size='small' color='warning' align="center"
                  onClick={clearInput}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' size='small' color='success' align="center"
                  onClick={handleSubmit}
                  >
                    Pay
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>        
      </Grid>
      <Typography
          variant="h4"
          className='text-center mt-5 mb-5 allTitles'
          style={{
            marginTop: '140px',
            background: `linear-gradient(rgba(0, 72, 6, 0.8), rgb(192, 72, 72, 0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg")`,
            color: 'white',
            height: '200px',
            width:"100%",
            paddingTop: '70px'
          }}
        >
          <strong>Thank you for giving!</strong>
        </Typography>
    </>
  )
}

export default Givings
