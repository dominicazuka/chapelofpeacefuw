import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import Title from '../admin/components/Title'

function Login () {
  return (
    <>
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
        style={{ padding: '200px', marginTop: '100px' }}
      >
        <Title>Login</Title>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextField id='standard-basic' label='Email' variant='standard' sx={{width:"100%"}} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextField
            id='outlined-password-input'
            type='password'
            label='Password'
            variant='standard'
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button variant='contained'>Login</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
