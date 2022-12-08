import { Button, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'

function Alumni () {
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
        <strong>CHILDREN UNIT</strong>
      </Typography>
       <Grid
          item
          xs={12}
          sm={12}
          md={12}
          align='center'
          className='unitHeader
'
          
        >
          <Typography
            variant='h4'
            className='mb-5 mt-3 '
            style={{ color: 'white' }}
          >
            The Purpose of our Lord and Saviour must be established. The vision
            never dies!
          </Typography>
          <Button variant='contained' size='small' color='primary'>
            REGISTER HERE
          </Button>
          <Typography
            variant='h4'
            className='mb-2 mt-4 allTitles'
            // style={{ marginTop: '100px' }}
            style={{ color: 'white' }}
          >
            <strong>Alumni Corner</strong>
          </Typography>
          <Typography
            variant='h5'
            className='mb-5 mt- 3 allTitles'
            style={{ color: 'white' }}
          >
            EVENTS AND ANNOUNCEMENT
          </Typography>
        </Grid>
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{ padding: '20px' }}
        // align='center'
      >
       

        {/**1**/}
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant='h5'
            className='mb-3'
            style={{ marginTop: '10px' }}
          >
            Announcement 1
          </Typography>
          <Typography variant='h6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptatum veritatis itaque, veniam doloribus fuga laborum, autem ad
            nihil, corrupti ipsum sint pariatur quia! Nulla accusamus voluptates
            nemo consectetur architecto.
          </Typography>
        </Grid>

        {/**2**/}
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant='h5'
            className='mb-3'
            style={{ marginTop: '10px' }}
          >
            Announcement 2
          </Typography>
          <Typography variant='h6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptatum veritatis itaque, veniam doloribus fuga laborum, autem ad
            nihil, corrupti ipsum sint pariatur quia! Nulla accusamus voluptates
            nemo consectetur architecto.
          </Typography>
        </Grid>

        {/**2**/}
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant='h5'
            className='mb-3'
            style={{ marginTop: '10px' }}
          >
            Announcement 3
          </Typography>
          <Typography variant='h6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            voluptatum veritatis itaque, veniam doloribus fuga laborum, autem ad
            nihil, corrupti ipsum sint pariatur quia! Nulla accusamus voluptates
            nemo consectetur architecto.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button variant='contained' size='small' color='primary'>
            REGISTER HERE
          </Button>
        </Grid>

        {/**Testimonies**/}
        <Typography
          variant='h4'
          className='mb-2 allTitles'
          style={{ marginTop: '100px' }}
        >
          <strong>Testimonies</strong>
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{padding:"20px"}}
      >
        <Grid item xs={12} sm={12} md={3} className='unitHeader'>
          <Typography
            variant='h3'
            className='mb-5 mt-5'
            style={{ color: 'white' }}
          >
            Bible Study Unit
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Typography variant='h6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            doloribus illum ducimus sunt dolorum eum accusamus adipisci,
            perspiciatis ipsum error alias, temporibus accusantium aliquam
            beatae quis maxime minus. Inventore, dolores. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sunt in officia quia porro itaque
            qui laudantium, fugiat placeat, vitae eius aliquid non sint
            reprehenderit enim consectetur corporis totam omnis optio.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <div class='card justify-content-center'>
            <div class='card-body justify-content-center'>
              <h5 class='card-title'>Testimony Video</h5>
            </div>

            <div
              class='bg-image hover-overlay ripple mb-3'
              data-mdb-ripple-color='light'
            >
              <CardMedia>
                <iframe
                  style={{ maxWidth: '100%' }}
                  src='https://www.youtube.com/embed/_v_TF8t3uOw'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                />
              </CardMedia>
              <a href='#'>
                <div
                  class='mask '
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                />
              </a>
            </div>
          </div>

          <div class='card justify-content-center mt-3'>
            <div class='card-body justify-content-center'>
              <h5 class='card-title'>Testimony Video</h5>
            </div>

            <div
              class='bg-image hover-overlay ripple mb-3'
              data-mdb-ripple-color='light'
            >
              <CardMedia>
                <iframe
                  style={{ maxWidth: '100%' }}
                  src='https://www.youtube.com/embed/_v_TF8t3uOw'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                />
              </CardMedia>
              <a href='#'>
                <div
                  class='mask '
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                />
              </a>
            </div>
          </div>
        </Grid>

        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Button variant='contained' size='small' color='primary' className="mb-3 mt-3">
            VIEW ALL TESTIMONIALS
          </Button>
        </Grid>
      </Grid>
      <Grid xs={12} sm={12} md={12} className='unitHeader'>
          <Typography
            variant='h3'
            className='mb-5 mt-5'
            style={{ color: 'white', padding: '10px' }}
          >
            We are stronger together. Join and be part of the drive to support
            one another and advance the kingdom of our God
          </Typography>
        </Grid>
    </>
  )
}

export default Alumni
