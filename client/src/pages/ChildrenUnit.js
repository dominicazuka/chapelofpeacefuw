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
import React, { useEffect } from 'react'
import ChildrenUnitSlider from '../components/ChildrenUnitSlider'

function ChildrenUnit () {
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
      <ChildrenUnitSlider />
      <Typography
        variant='h6'
        sx={{ padding: '10px' }}
        className='mb-5 mt-5'
        align='center'
      >
        Our children ministery is driven with the vision to raise the next godly
        generation by equiping the total child in the word of God
      </Typography>

      <Typography variant='h4' className='text-center mb-2 allTitles'>
        <strong>Children Bible Stories</strong>
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{ padding: '10px' }}
      >
        <Grid item xs={12} sm={12} md={12} align='center'>
          <Card sx={{ width: '75%' }} align='center'>
            <CardMedia
              component='img'
              height='140'
              image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              alt='green iguana'
            />
            <CardContent>
              <Typography variant='h4'>Creation Story</Typography>
              <Typography variant='h6'>
                How God created the world and every living thing. He placed man
                in the garden of Eden and instructed him not to eat of the
                forbidden tree. Man disobeyed and fell from grace
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
                  Learn More
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} align='center'>
          <Card sx={{ width: '75%', mt: 5 }} align='center'>
            <CardMedia
              component='img'
              height='140'
              image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              alt='green iguana'
            />
            <CardContent>
              <Typography variant='h4'>Creation Story</Typography>
              <Typography variant='h6'>
                How God created the world and every living thing. He placed man
                in the garden of Eden and instructed him not to eat of the
                forbidden tree. Man disobeyed and fell from grace
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
                  Learn More
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} align='center'>
          <Card sx={{ width: '75%', mt: 5 }} align='center'>
            <CardMedia
              component='img'
              height='140'
              image='https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              alt='green iguana'
            />
            <CardContent>
              <Typography variant='h4'>Creation Story</Typography>
              <Typography variant='h6'>
                How God created the world and every living thing. He placed man
                in the garden of Eden and instructed him not to eat of the
                forbidden tree. Man disobeyed and fell from grace
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
                  Learn More
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        <Button
          variant='contained'
          size='small'
          color='primary'
          align='center'
          sx={{ mt: 5 }}
        >
          View More Stories
        </Button>
      </Grid>

      <Typography variant='h4' sx={{ mt: 4, mb: 4 }} align='center'>
        Children Songs & Lyrics
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{ padding: '10px' }}
      >
        {/**1st**/}
        <Grid item xs={12} sm={12} md={3} align='center'>
          <Card
            sx={{
              width: '50%',
              background: `linear-gradient(rgba(23, 38, 255, 1), rgb(192, 72, 72, 0.8)),
    url('https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg')`
            }}
            align='center'
          >
            <CardContent>
              <Typography variant='h4'>Song 1</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/**2nd**/}
        <Grid item xs={12} sm={12} md={3} align='center'>
          <Card
            sx={{
              width: '50%',
              background: `linear-gradient(rgba(23, 38, 255, 1), rgb(192, 72, 72, 0.8)),
    url('https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg')`
            }}
            align='center'
          >
            <CardContent>
              <Typography variant='h4'>Song 1</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/**3rd**/}
        <Grid item xs={12} sm={12} md={3} align='center'>
          <Card
            sx={{
              width: '50%',
              background: `linear-gradient(rgba(23, 38, 255, 1), rgb(192, 72, 72, 0.8)),
    url('https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg')`
            }}
            align='center'
          >
            <CardContent>
              <Typography variant='h4'>Song 1</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/**4th**/}
        <Grid item xs={12} sm={12} md={3} align='center'>
          <Card
            sx={{
              width: '50%',
              background: `linear-gradient(rgba(23, 38, 255, 1), rgb(192, 72, 72, 0.8)),
    url('https://ik.imagekit.io/ikmedia/blog/hero-image.jpeg')`
            }}
            align='center'
          >
            <CardContent>
              <Typography variant='h4'>Song 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Button
          variant='contained'
          size='small'
          color='primary'
          className='mt-4'
          sx={{ mt: 5 }}
        >
          More Songs
        </Button>
      </Grid>

      <Typography variant='h4' sx={{ mb: 4, mt: 5 }} align='center'>
        Memory Verses:
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{ padding: '10px' }}
      >
        <Grid item xs={12} sm={12} md={3} align='center'>
          {/** prayer meeting card**/}
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component='img'
              height='140'
              image='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                align='center'
              >
                FEAR
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Heb 11:16, Matt 21:22, James 2:17
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={3} align='center'>
          {/** prayer meeting card**/}
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component='img'
              height='140'
              image='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                align='center'
              >
                FEAR
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Heb 11:16, Matt 21:22, James 2:17
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={3} align='center'>
          {/** prayer meeting card**/}
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component='img'
              height='140'
              image='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                align='center'
              >
                FEAR
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Heb 11:16, Matt 21:22, James 2:17
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={3} align='center'>
          {/** prayer meeting card**/}
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component='img'
              height='140'
              image='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                align='center'
              >
                FEAR
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Heb 11:16, Matt 21:22, James 2:17
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Button
          variant='contained'
          size='small'
          color='primary'
          className='mt-4 mb-4'
        >
          More Memory Verses
        </Button>
      </Grid>
    </>
  )
}

export default ChildrenUnit
