import React, { useEffect, useState } from 'react'
import Input from '@mui/material/Input'
import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import { Country, State, City } from 'country-state-city'
import { MuiTelInput } from 'mui-tel-input'
import { FileUploader } from 'react-drag-drop-files'
import Axios from '../config'
import Swal from 'sweetalert2'
import { validateEmail } from '../utils'

function Membership () {
  const [date_of_birth, setDate] = useState(null)
  const [country, setCountry] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])
  const [state, setState] = useState('')
  const [states, setStates] = useState([])
  const [phone_no, setPhone] = useState('') 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const [sex, setSex] = useState('male')
  const [marital_status, setMaritalStatus] = useState('single')
  const [no_of_children, setChildrenNo] = useState("")
  const [email, setEmail] = useState('')
  const [type_of_membership, setMembershipType] = useState('student')
  const [department, setDepartment] = useState('')
  const [level, setLevel] = useState('')
  const [permanent_address, setPermanentAddress] = useState('')
  const [contact_address, setContactAddress] = useState('')
  const [residential_address, setResidentialAddress] = useState('')
  const [next_of_kin_name, setNextOfKinName] = useState('')
  const [next_of_kin_phone_no, setNextOfKinPhoneNo] = useState('')
  const [next_of_kin_address, setNextOfKinAddress] = useState('')
  const [born_again, setBornAgain] = useState('yes')
  const [baptized, setBaptized] = useState('yes')
  const [baptism_method, setBaptismMethod] = useState('immersion')
  const [holy_ghost_baptism, setHolyGhostBaptism] = useState('yes')
  const [speaking_in_tongues, setSpeakingInTongues] = useState('yes')
  const [service_unit, setServiceUnit] = useState('')
  const [content, setContent] = useState('')
  const [photo, setPhoto] = useState('')
  const fileTypes = ['JPEG', 'PNG', 'GIF']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleUploadFileChange = file => {
    setPhoto(file)
  }

  const filterCountries = Country.getAllCountries()
  const handleCountryInput = code => {
    try {
      setCountryCode(code)
      const filterCountry = filterCountries.find(c => c.isoCode === code)
      setCountry(filterCountry.name)
      const _states = State.getAllStates()
      let filterStates = _states.filter(s => s.countryCode === code)
      if (code === 'GB') {
        const _allowedStates = [
          'England',
          'Wales',
          'Scotland',
          'Northern Ireland'
        ]
        filterStates = filterStates.filter(s => _allowedStates.includes(s.name))
      }
      filterStates = filterStates.sort(
        (a, b) => a.name.toLowerCase() - b.name.toLowerCase()
      )
      setStates(filterStates)
      setCities([])
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

  const handlePhoneChange = e => {
    setPhone(e)
  }
  
  const handleNextOfKinPhoneChange = e => {
    setNextOfKinPhoneNo(e)
  }

const clearInput = () => {
    setLastName('')
    setPhone('')
    setMaritalStatus('')
    setLevel('')
    setSex('')
    setDepartment('')
    setBaptismMethod('')
    setResidentialAddress('')
    setBaptized('')
    setHolyGhostBaptism('')
    setDepartment('')
    setFirstName('')
  setChildrenNo('')
  setContent('')
  setServiceUnit('')
  setSpeakingInTongues('')
  setBornAgain('')
  setNextOfKinAddress('')

  }

   const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (firstName.trim() === '' || lastName.trim() === ''){
        return Swal.fire({
          text: 'Please enter your full name',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (sex.trim() === ''){
        return Swal.fire({
          text: 'Please select your Gender',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (marital_status.trim() === ''){
        return Swal.fire({
          text: 'Please select your Marital Status',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (no_of_children.trim() === ''){
        return Swal.fire({
          text: 'Please enter your level',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (date_of_birth.trim() === ''){
        return Swal.fire({
          text: 'Please enter your date of birth',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (!validateEmail(email.trim())){
        return Swal.fire({
          text: 'Please enter your room number',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (phone_no.trim() === ''){
        return Swal.fire({
          text: 'Please enter your phone number',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (type_of_membership.trim() === '') {
        return Swal.fire({
          text: 'Please enter your prayer point',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }
      
      if (department.trim() === '') {
        return Swal.fire({
          text: 'Please enter your department',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (level.trim() === '') {
        return Swal.fire({
          text: 'Please enter your level',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }


      if (permanent_address.trim() === '') {
        return Swal.fire({
          text: 'Please enter your prayer point',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (contact_address.trim() === '') {
        return Swal.fire({
          text: 'Please enter your prayer point',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (residential_address.trim() === '') {
        return Swal.fire({
          text: 'Please enter your prayer point',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      if (next_of_kin_name.trim() === '') {
        return Swal.fire({
          text: 'Please enter your next of kin name',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

       if (next_of_kin_phone_no.trim() === '') {
        return Swal.fire({
          text: 'Please enter your next of kin phone number',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

       if (next_of_kin_address.trim() === '') {
        return Swal.fire({
          text: 'Please enter your next of kin address',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

       if (born_again.trim() === '') {
        return Swal.fire({
          text: 'Please select your baptism status',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

       if (baptized.trim() === '') {
        return Swal.fire({
          text: 'Please select an option if you were baptized by water',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

       if (baptism_method.trim() === '') {
        return Swal.fire({
          text: 'Please select your baptism method',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

       if (holy_ghost_baptism.trim() === '') {
        return Swal.fire({
          text: `Please select if you've been Baptized`,
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

       if (speaking_in_tongues.trim() === '') {
        return Swal.fire({
          text: 'Please select if you believe in speaking in tongues',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }

      // if (service_unit.trim() === '') {
      //   return Swal.fire({
      //     text: 'Please select your service unit',
      //     toast: true,
      //     confirmButtonColor: '#0000FF'
      //   })
      // }

      if (content.trim() === '') {
        return Swal.fire({
          text: 'Please specify your comments',
          toast: true,
          confirmButtonColor: '#0000FF'
        })
      }
      
      const fullName = `${firstName} ` + `${lastName}`
      setName(fullName)
      const body = {
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
        type_of_membership,
        department,
        level,
        permanent_address,
        contact_address,
        residential_address,
        next_of_kin_name,
        next_of_kin_phone_no,
        next_of_kin_address,
        born_again,
        baptized,
        baptism_method,
        holy_ghost_baptism,
        speaking_in_tongues,
        service_unit:"test",
        content,
        photo: "test.jpg"
      }
      await Axios.post('/memberships', body)
      clearInput()
      Swal.fire({
        text: 'Membership data sent successfully',
        icon: 'success',
        animation: true,
        confirmButtonColor: '#0000FF'
      })
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error)
    }
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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
                value={no_of_children}
                onChange={(e) => setChildrenNo(e.target.value)}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Date of Birth:</label>
          <Grid container direction='row'>
            <Grid>
              <Space direction='vertical'>
                <DatePicker onChange={(e) => setDate(moment(e).format('DD-MM-YYYY'))} />
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
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <label className='mt-3'>Phone Number:</label>
          <MuiTelInput
            value={phone_no}
            onChange={handlePhoneChange}
            className='form-control mt-3'
            placeholder='Phone Number (+234)'
          />

          <label className='mt-4'>Type of Membership:</label>
          <Grid container direction='row' spacing={3}>
            <Grid item>
              <Checkbox
                checked={type_of_membership === 'student'}
                onChange={() => setMembershipType('student')}
              />
                <label class='form-check-label' for='student'>
                  Student
                </label>
            </Grid>
            <Grid item>
                <Checkbox
                checked={type_of_membership === 'graduate'}
                onChange={() => setMembershipType('graduate')}
              />
                <label class='form-check-label' for='staff'>
                  Staff
                </label>
            </Grid>

            <Grid item>
                <Checkbox
                checked={type_of_membership === 'parent'}
                onChange={() => setMembershipType('parent')}
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
                onChange={e => setDepartment(e.target.value)}
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
                value={level}
                onChange={e => setLevel(e.target.value)}
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
                value={permanent_address}
                onChange={e => setPermanentAddress(e.target.value)}
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
                value={contact_address}
                onChange={e => setContactAddress(e.target.value)}
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
                value={residential_address}
                onChange={e => setResidentialAddress(e.target.value)}
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
                value={next_of_kin_name}
                onChange={e => setNextOfKinName(e.target.value)}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Next of Kin Phone No.:</label>
          <Grid container direction='row'>
            <Grid>
             <MuiTelInput
                className='form-control mt-3'
                placeholder='Phone Number (+234)'
                value={next_of_kin_phone_no}
                onChange={handleNextOfKinPhoneChange}
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
                value={next_of_kin_address}
                onChange={e => setNextOfKinAddress(e.target.value)}
              />
            </Grid>
          </Grid>

          <label className='mt-4'>Are you Born Again:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <Checkbox
                checked={born_again === 'yes'}
                onChange={() => setBornAgain('yes')}
              />
                <label class='form-check-label' for='yesBornAgain'>
                  Yes
                </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={born_again === 'no'}
                onChange={() => setBornAgain('no')}
              />
                <label class='form-check-label' for='noBornAgain'>
                  No
                </label>
            </Grid>
          </Grid>

          <label className='mt-4'>Have you been Baptized by water?:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <Checkbox
                checked={baptized === 'yes'}
                onChange={() => setBaptized('yes')}
              />
                <label class='form-check-label' for='yesBaptized'>
                  Yes
                </label>

            </Grid>
            <Grid item>
              <Checkbox
                checked={baptized === 'no'}
                onChange={() => setBaptized('no')}
              />
                <label class='form-check-label' for='noBaptized'>
                  No
                </label>
            </Grid>
          </Grid>

          <label className='mt-4'>Method of Water Baptism?:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <Checkbox
                checked={baptism_method === 'immersion'}
                onChange={() => setBaptismMethod('immersion')}
              />
                <label class='form-check-label' for='yesWaterBaptism'>
                  Immersion
                </label>
            </Grid>
            <Grid item>
              <Checkbox 
                checked={baptism_method === 'sprinkling'}
                onChange={() => setBaptismMethod('sprinkling')}
              />
                <label class='form-check-label' for='noWaterBaptism'>
                  Sprinkling
                </label>
            </Grid>
          </Grid>

          <label className='mt-4'>Have you had Holy Ghost Baptism?:</label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
              <Checkbox
                checked={holy_ghost_baptism === 'yes'}
                onChange={() => setHolyGhostBaptism('yes')}
              />
                <label class='form-check-label' for='yesHolyGhostBaptism'>
                  Yes
                </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={holy_ghost_baptism === 'no'}
                onChange={() => setHolyGhostBaptism('no')}
              />
                <label class='form-check-label' for='noHolyGhostBaptism'>
                  No
                </label>
            </Grid>
          </Grid>

          <label className='mt-4'>
            Do you Believe in Speaking in Tongues?:
          </label>
          <Grid container direction='row' spacing={2}>
            <Grid item>
                  <Checkbox
                checked={speaking_in_tongues === 'yes'}
                onChange={() => setSpeakingInTongues('yes')}
              />
                <label class='form-check-label' for='yesSpeakinInTongues'>
                  Yes
                </label>
            </Grid>
            <Grid item>
              <Checkbox
                checked={speaking_in_tongues === 'no'}
                onChange={() => setSpeakingInTongues('no')}
              />
                <label class='form-check-label' for='noSpeakinInTongues'>
                  No
                </label>
            </Grid>
          </Grid>

          <label className='mt-4'>
            Chapel Service Unit (or intended unit):
          </label>
          <Grid container direction='row'>
            <Grid>
              <select className='form-control required'>
                <option value=''>Service Unit</option>
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant='contained'
            size='small'
            color='warning'
            className='mt-4 mb-4'
            onClick={handleSubmit}
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
