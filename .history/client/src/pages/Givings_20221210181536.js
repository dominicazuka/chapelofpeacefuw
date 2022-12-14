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

function Givings () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState()
  const handlePhoneChange = newPhone => {
    setPhone(newPhone)
  }
  const handleAmountChange = e => {
    const regex = /^[0-9\b]+$/
    if (e.target.value == '' || regex.test(e.target.value)) {
      setAmount(e.target.value)
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
          <MuiTelInput
            value={phone}
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
            onChange={e => handleAmountChange(e)}
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
              <Checkbox />
              <label class='form-check-label' for='offering'>
                Offering
              </label>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Checkbox />
              <label class='form-check-label' for='tithe'>
                Tithe
              </label>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Checkbox />
              <label class='form-check-label' for='biuildingProject'>
                Building Project
              </label>
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Checkbox />
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
                  <Button variant='contained' size='small' color='warning' align="center">
                    Reset
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' size='small' color='success' align="center">
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
