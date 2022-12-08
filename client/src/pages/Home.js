import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import MoreInfo from '../components/MoreInfo'
import Slider from '../components/Slider'
import Grid from '@mui/material/Grid' // Grid version 1
import Testimonial from '../components/Testimonial'
import BlogPostList from '../components/BlogPostList'
import { Box, Typography } from '@mui/material'

function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Slider />
      <MoreInfo />
      <Typography
        variant='h2'
        className='text-center allTitles'
        style={{ marginTop: '50px' }}
      >
        Testimonials
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
        style={{ padding: '50px' }}
      >
        {/**LHS**/}

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Testimonial />
        </Grid>

        {/**MIDDLE**/}

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Testimonial />
        </Grid>

        {/**RHS**/}

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Testimonial />
        </Grid>
      </Grid>
      <Grid xs={12}
          sm={12}
        md={12}
        align="center"
        style={{ padding: '50px' }}
      >
        <BlogPostList />
      </Grid>
    </Box>
  )
}

export default Home
