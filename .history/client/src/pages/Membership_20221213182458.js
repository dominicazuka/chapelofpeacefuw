import React, { useEffect, useState } from 'react'
import Input from '@mui/material/Input'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import { Country, State, City } from 'country-state-city'
import { MuiTelInput } from 'mui-tel-input'
import { FileUploader } from 'react-drag-drop-files'

function Membership () {
  const [date, setDate] = useState(null)
  const [country, setCountry] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])
  const [state, setState] = useState('')
  const [states, setStates] = useState([])
  const [phone, setPhone] = useState('')
  const [file, setFile] = useState(null)
  const fileTypes = ['JPEG', 'PNG', 'GIF']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleUploadFileChange = file => {
    setFile(file)
  }

  const filterCountries = Country.getAllCountries()

  const handleDateChange = () => {}

  const handleCountryInput = code => {
    try {
      setCountryCode(code)
      const filterCountry = filterCountries.find(c => c.isoCode === code)
      setCountry(filterCountry.name)
      console.log(filterCountry.name)
    } catch (error) {}
  }

  const handleStateInput = code => {
    const _states = State.getAllStates()
    let filterState = _states.find(
      s => s.isoCode === code && s.countryCode === countryCode
    )
    setState(filterState.name)
    const _cities = City.getCitiesOfState(countryCode, code)
    setCities(_cities)
  }

  const handleCityInput = e => {
    setCity(e.target.value)
  }

  const handlePhoneChange = newPhone => {
    setPhone(newPhone)
  }

  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{ marginTop: '140px' }}
      >
        <strong>MEMBERSHIP</strong>
      </Typography>
      <Typography
        variant='h5'
        className='text-center mb-5 allTitles'
        style={{
          marginTop: '40px',
          background: `linear-gradient(rgba(0, 72, 6, 0.8), rgb(192, 72, 72, 0.8)), url("https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg")`,
          color: 'white',
          height: '250px',
          paddingTop: '70px',
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >
        <strong>
          We are pleased to have you join us and be a part of this great vision.
          God bless you!
          <br />
          Please fill the form below as accurately as possible
        </strong>
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{padding:"20px"}}
      >
        <Grid item xs={12} sm={12} md={8}>
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

          <label>Sex:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='male' />
                <label class='form-check-label' for='male'>
                  Male
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='female' />
                <label class='form-check-label' for='female'>
                  Female
                </label>
              </div>
            </Grid>
          </Grid>

          <label className='mt-3'>Marital Status:</label>
          <Grid container direction='row' spacing={4}>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='single' />
                <label class='form-check-label' for='single'>
                  Single
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='married' />
                <label class='form-check-label' for='married'>
                  Married
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='widowed' />
                <label class='form-check-label' for='widowed'>
                  Widowed
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='divorced' />
                <label class='form-check-label' for='divorced'>
                  Divorced
                </label>
              </div>
            </Grid>
          </Grid>

          <label className='mt-4'>No. Of Children:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='number'
                label='No. of Children'
                id='amount'
                name='amount'
                className='bordered form-control '
                inputProps={{ maxLength: 12 }}
                placeholder='No. of Children'
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Date of Birth:</label>
          <Grid container direction='row'>
            <Grid>
              <Space direction='vertical'>
                <DatePicker onChange={handleDateChange} />
              </Space>
            </Grid>
          </Grid>

          <label className='mt-4'>Nationality:</label>
          <Grid container direction='row'>
            <Grid>
              <select
                className='form-control required'
                onChange={e => handleCountryInput(e.target.value)}
              >
                <option value='None'>Select Country</option>
                {filterCountries.map(country => (
                  <option value={country.isoCode} key={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>

          <Grid container direction='row' spacing={2}>
            <Grid item>
              <select
                className='form-control mt-3 required'
                onChange={e => handleStateInput(e.target.value)}
              >
                <option value='None'>Select State</option>
                {states.map(s => (
                  <option value={s.isoCode} key={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid item>
              <select
                onChange={e => handleCityInput(e)}
                className='form-control mt-3 required'
              >
                <option value='None'>Select City</option>
                {cities.map(c => (
                  <option key={c.name}>{c.name}</option>
                ))}
              </select>
            </Grid>
          </Grid>
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
          <label className='mt-3'>Phone Number:</label>
          <MuiTelInput
            value={phone}
            onChange={handlePhoneChange}
            className='form-control mt-3'
            placeholder='Phone Number (+234)'
          />

          <label className='mt-4'>Type of Membership:</label>
          <Grid container direction='row' spacing={3}>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='student' />
                <label class='form-check-label' for='student'>
                  Student
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='staff' />
                <label class='form-check-label' for='staff'>
                  Staff
                </label>
              </div>
            </Grid>

            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input class='form-check-input' type='checkbox' id='other' />
                <label class='form-check-label' for='other'>
                  Other
                </label>
              </div>
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

          <label className='mt-4'>Permanent Address:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Permanent Address'
                id='permAddress'
                name='permAddress'
                className='bordered form-control'
                placeholder='Permanent Address'
                style={{ height: '100px', width: '100%' }}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Contact Address:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Contact Address'
                id='contactAddress'
                name='contactAddress'
                className='bordered form-control'
                placeholder='Contact Address'
                style={{ height: '100px', width: '100%' }}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Residential Address:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Residential Address'
                id='residentialAddress'
                name='residentialAddress'
                className='bordered form-control'
                placeholder='Residential Address'
                style={{ height: '100px', width: '100%' }}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Next of Kin Name:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Next of Kin'
                id='nextOfKin'
                name='nextOfKin'
                className='bordered form-control'
                placeholder='Next of Kin'
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Next of Kin Phone No.:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='number'
                label='Next of Kin Phone No.'
                id='nextOfKinPhoneNo'
                name='nextOfKinPhoneNo'
                className='bordered form-control '
                inputProps={{ maxLength: 12 }}
                placeholder='Next of Kin Phone No.'
              />
            </Grid>
          </Grid>
          <label className='mt-4'>Next of Kin Address:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Next of Kin Address'
                id='nextOfKinAddress'
                name='nextOfKinAddress'
                className='bordered form-control'
                placeholder='Next of Kin Address'
                style={{ height: '100px', width: '100%' }}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Are you Born Again:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='yesBornAgain'
                />
                <label class='form-check-label' for='yesBornAgain'>
                  Yes
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='noBornAgain'
                />
                <label class='form-check-label' for='noBornAgain'>
                  No
                </label>
              </div>
            </Grid>
          </Grid>

          <label className='mt-4'>Have you been Baptized by water?:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='yesBaptized'
                />
                <label class='form-check-label' for='yesBaptized'>
                  Yes
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='noBaptized'
                />
                <label class='form-check-label' for='noBaptized'>
                  No
                </label>
              </div>
            </Grid>
          </Grid>

          <label className='mt-4'>Method of Water Baptism?:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='yesWaterBaptism'
                />
                <label class='form-check-label' for='yesWaterBaptism'>
                  Immersion
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='noWaterBaptism'
                />
                <label class='form-check-label' for='noWaterBaptism'>
                  Sprinkling
                </label>
              </div>
            </Grid>
          </Grid>

          <label className='mt-4'>Have you had Holy Ghost Baptism?:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='yesHolyGhostBaptism'
                />
                <label class='form-check-label' for='yesHolyGhostBaptism'>
                  Yes
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='noHolyGhostBaptism'
                />
                <label class='form-check-label' for='noHolyGhostBaptism'>
                  No
                </label>
              </div>
            </Grid>
          </Grid>

          <label className='mt-4'>
            Do you Believe in Speaking in Tongues?:
          </label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='yesSpeakinInTongues'
                />
                <label class='form-check-label' for='yesSpeakinInTongues'>
                  Yes
                </label>
              </div>
            </Grid>
            <Grid item>
              <div class='form-check form-check-inline form-switch mt-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='noSpeakinInTongues'
                />
                <label class='form-check-label' for='noSpeakinInTongues'>
                  No
                </label>
              </div>
            </Grid>
          </Grid>

          <label className='mt-4'>
            Chapel Service Unit (or intended unit):
          </label>
          <Grid container direction='row'>
            <Grid>
              <select className='form-control required'>
                <option value='None'>Service Unit</option>
              </select>
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
            color='warning'
            className='mt-4 mb-4'
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <FileUploader
            multiple={true}
            handleChange={handleUploadFileChange}
            name='file'
            className='form-control'
            style={{ height: '300px' }}
            types={fileTypes}
          />
        </Grid>

        <Grid sx={{mb:3}} align='center' className='text-center'>
          Thank you for the time you took to fill the form. We will communicate
          with you shortly
        </Grid>
      </Grid>
    </>
  )
}

export default Membership
