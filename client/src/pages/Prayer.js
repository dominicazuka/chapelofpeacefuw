import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography
} from '@mui/material'
import Input from '@mui/material/Input'
import { TextField } from '@mui/material'
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import { Country, State, City } from 'country-state-city'
import { MuiTelInput } from 'mui-tel-input'
import { FileUploader } from 'react-drag-drop-files'

function Prayer () {
  const [phone, setPhone] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handlePhoneChange = newPhone => {
    setPhone(newPhone)
  }

  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{ marginTop: '130px' }}
      >
        <strong>PRAYER</strong>
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{padding:"10px"}}
      >
        <Grid item xs={12} sm={12} md={5}>
          <Typography variant='h4' className='text-center mb-3 allTitles'>
            <strong>Meditation</strong>
            <br />
          </Typography>
          <Typography variant='h6' className='text-center mb-4'>
            The bible encourages us to ...pray without ceasing. 1 Thes 5:17
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={5}>
          <Typography variant='h6' style={{ color: 'white' }}>
            Prayer Meetings:
          </Typography>
          <Grid
            justifyContent='center'
            alignItems='center'
            style={{ marginTop: 20 }}
          >
            <Card>
              <CardMedia
                component='img'
                height='140'
                image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                alt='green iguana'
              />
              <CardContent>
                <Typography variant='h6'>Regular Prayer Meeting</Typography>
                <Typography variant='h6'>Date: Every Fridays</Typography>
                <Typography variant='h6'>Time: 5 - 6pm</Typography>
                <Typography variant='h6'>
                  Venue: Chapel Permanent Site
                </Typography>
              </CardContent>
              <CardActions align='center'>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  align='center'
                >
                  <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    align='center'
                  >
                    Zoom Link - Prayer
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        variant='h4'
        className='text-center mb-3 allTitles'
        style={{ marginTop: '30px' }}
      >
        <strong>Special Prayer Meetings & Bulletin:</strong>
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{padding:"10px"}}

      >
        <Grid item xs={12} sm={12} md={5}>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              alt='green iguana'
            />
            <CardContent>
              <Typography variant='h6'>Regular Prayer Meeting</Typography>
              <Typography variant='h6'>Date: Every Fridays</Typography>
              <Typography variant='h6'>Time: 5 - 6pm</Typography>
              <Typography variant='h6'>Venue: Chapel Permanent Site</Typography>
            </CardContent>
          </Card>
          <Button
            variant='contained'
            size='medium'
            color='primary'
            sx={{ mt: 3 }}
          >
            All Prayer Bulletins
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={5} sx={{mt:3}}>
          <Typography className='text-center mb-5 allTitles'>
            <strong>Prayer Requests:</strong>
          </Typography>
          <Typography>
            Do you have an issue you would like us to pray along with you?
            Please fill the request form:
          </Typography>
          <div className='col-lg-12 mb-3'>
            <label>Full Name:</label>
            <Grid container direction='row' spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  id='firstName'
                  label='First Name'
                  name='firstName'
                  className=''
                  margin='normal'
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
                />
              </Grid>
            </Grid>

            <label className='mt-3'>Phone Number:</label>
            <MuiTelInput
              value={phone}
              onChange={handlePhoneChange}
              className='form-control mt-3'
              placeholder='Phone Number (+234)'
            />

            <label className='mt-4'>Email:</label>
            <Grid container direction='row'>
              <Grid>
                <Input
                  type='email'
                  label='Email'
                  id='email'
                  name='email'
                  className='bordered form-control'
                  placeholder='Email Address'
                />
              </Grid>
            </Grid>
            <label className='mt-4'>Comments:</label>
            <Grid container direction='row'>
              <Grid>
                <Input
                  type='text'
                  label='Comments'
                  id='comments'
                  name='comments'
                  className='bordered form-control'
                  placeholder='Comments'
                  style={{ height: '100px', width: '100%' }}
                />
              </Grid>
            </Grid>
            <Button
              variant='contained'
              size='small'
              color='primary'
              className='mt-4 mb-4'
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Prayer
