import React, { useEffect, useState } from 'react'
import Input from '@mui/material/Input'
import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import { Country, State, City } from 'country-state-city'
import { MuiTelInput } from 'mui-tel-input'
import { FileUploader } from 'react-drag-drop-files'

function AlumniMembership () {
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
  const handleYearOfGraduationDateChange = () => {}

  const handleCountryInput = code => {
    try {
      setCountryCode(code)
      const filterCountry = filterCountries.find(c => c.isoCode === code)
      setCountry(filterCountry.name)
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
        <strong>ALUMNI MEMBERSHIP</strong>
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{padding:"10px"}}
      >
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
              <Checkbox />
              <label class='form-check-label' for='male'>
                Male
              </label>
            </Grid>
            <Grid item>
              <Checkbox />
              <label class='form-check-label' for='female'>
                Female
              </label>
            </Grid>
          </Grid>

          <label className='mt-3'>Marital Status:</label>
          <Grid container direction='row' spacing={4}>
            <Grid item>
              <Checkbox />
              <label class='form-check-label' for='single'>
                Single
              </label>
            </Grid>
            <Grid item>
              <Checkbox />
              <label class='form-check-label' for='married'>
                Married
              </label>
            </Grid>
            <Grid item>
              <Checkbox />
              <label class='form-check-label' for='widowed'>
                Widowed
              </label>
            </Grid>
            <Grid item>
              <Checkbox />
              <label class='form-check-label' for='divorced'>
                Divorced
              </label>
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
              <label className='mt-4'>State of Origin:</label>

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
              <label className='mt-4'>LGA:</label>

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

          <label className='mt-4'>Type of Membership:</label>
          <Grid container direction='row' spacing={3}>
            <Grid item>
              <Checkbox />
              <label class='form-check-label' for='student'>
                Student
              </label>
            </Grid>
            <Grid item>
              <Checkbox />
              <label class='form-check-label' for='staff'>
                Staff
              </label>
            </Grid>

            <Grid item>
              <Checkbox />
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
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Faculty:</label>
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

          <label className='mt-4'>Year of Graduation:</label>
          <Grid container direction='row'>
            <Grid>
              <Space direction='vertical'>
                <DatePicker onChange={handleYearOfGraduationDateChange} />
              </Space>
            </Grid>
          </Grid>

          <label className='mt-4'>Service Unit Served In:</label>
          <select className='form-control required'>
            <option>Service Unit </option>
          </select>

          <label className='mt-4'>Comment/Prayer Request:</label>
          <Grid container direction='row'>
            <Grid>
              <Input
                type='text'
                label='Comment/Prayer Request'
                id='commentPrayerRequest'
                name='commentPrayerRequest'
                className='bordered form-control'
                placeholder='Comment/Prayer Request'
                style={{ height: '100px', width: '100%' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <FileUploader
            multiple={true}
            handleChange={handleUploadFileChange}
            name='file'
            className='form-control'
            types={fileTypes}
          />
        </Grid>
      </Grid>
      ;<Button variant='contained' size='small' color='warning' className='mt-4 mb-4'>
  Submit
</Button>

    </>
  )
}

export default AlumniMembership
