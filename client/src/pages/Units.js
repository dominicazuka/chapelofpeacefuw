import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid' // Grid version 1
import Button from '@mui/material/Button'
import { Paper, Stack, Typography } from '@mui/material'

function Units () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{ marginTop: '140px' }}
      >
        Service Units
      </Typography>
      
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        className='unitsContainer text-center'
        sx={{mb:4}}
      >
        {/**Service units**/}

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          // sx={{mb:2}}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '20px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Media and Technical Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '30px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align = 'center'
>Children Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '30px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align = 'center'
>Prayer Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '40px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Bible Study Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

         <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '30px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Ushering Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

         <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '40px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Counselling Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

 <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '40px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Women's Fellowship Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

         <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '40px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Choir Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>
        {/**2nd**/}
        

        {/**CTA**/}

        <Grid className='unitCTA mt-5'>
        <Typography className='mb-5 mt-4' style={{ color: 'white' }}>
          Join us...put your calling to use in building the body of Christ our
          Lord
        </Typography>
        <Button variant='contained' size='small' color='primary'>
          Learn more
        </Button>
      </Grid>

        {/**Worship Image**/}

        <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid className='unitBigImg mt-5'>
          <Typography
            variant='h3'
            className='mb-5 mt-5 unitBigText'
            style={{ color: 'white' }}
          >
            Worshipping in Spirit and in truth!!!
          </Typography>
        </Grid>
      </Grid>
      </Grid>
    </>
  )
}

export default Units
