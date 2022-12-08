import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid' // Grid version 1
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'

function BibleStudy () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{ marginTop: '150px' }}
      >
        <strong>BIBLE STUDY</strong>
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{padding:"10px"}}
      >
        <Grid item xs={12} sm={12} md={3}>
          <Card sx={{ maxWidth: 500 }} style={{ marginTop: '20px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                alt='green iguana'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  The Book of Act
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card sx={{ maxWidth: 500 }} style={{ marginTop: '20px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                alt='green iguana'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  What the Bible Teaches on Relationship
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card sx={{ maxWidth: 500 }} style={{ marginTop: '20px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                alt='green iguana'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  The Family God's on way
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Card sx={{ maxWidth: 500 }} style={{ marginTop: '20px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                alt='green iguana'
              />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  The Book of Romans
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          <Button
            variant='contained'
            size='small'
            color='primary'
            className='mt-4 mb-4'
          >
            All Topics
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h4"
          className='text-center mb-5 allTitles'
          style={{ marginTop: '50px' }}
        >
          <strong>Bible Study Schedule</strong>
        </Typography>
        <Grid container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
      sx={{padding:"10px"}}
      >
          <Grid item xs={12} sm={12} md={8}>
              <header className='unitHeader'>
                <section class='hero-header'>
                  <Typography variant="h4" className='mb-5 mt-5' style={{ color: 'white' }}>
                    Bible Study Unit
                  </Typography>
                  <Button variant='contained' size='small' color='primary'>
                    Sign Up
                  </Button>
                </section>
              </header>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Typography>Date: Every Tuesday</Typography>
            <br />
            <Typography>Time: 5-6pm</Typography>
            <br />
            <Typography>
              Venue: In front of 600 seater Lecture Hall (Chapel Premises) &
              Virtual Streaming
            </Typography>
            <Grid
              container
              direction='column'
              justifyContent='right'
              alignItems='right'
            >
              <Button
                variant='contained'
                size='small'
                color='primary'
                className='mt-4'
              >
                Zoom Link - Bible Study
              </Button>
            </Grid>
          </Grid>
        </Grid>
    </>
  )
}

export default BibleStudy
