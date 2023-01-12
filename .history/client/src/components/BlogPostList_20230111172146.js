import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Pagination,
  Stack,
  Typography
} from '@mui/material'

function BlogPostList () {
  return (
    <Grid
      container
      spacing={2}
      columns={12}
      style={{ padding: '50px' }}
      sx={{ mx: 'auto' }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h3' align='center' sx={{ mb: 3 }}>
          Latest posts
        </Typography>

        <Card sx={{ minWidth: '100%', mb: 4 }}>
          <CardMedia
            component='img'
            height='140'
            image='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Title
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: '100%' }}>
          <CardMedia
            component='img'
            height='140'
            image='https://mdbootstrap.com/img/new/standard/nature/184.jpg'
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Title
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent='center'
          alignItems='center'
        >
          <Pagination
            count={10}
            color='primary'
            sx={{ mt: 3 }}
            align='center'
          />
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        justifyContent='center'
        alignItems='center'
      >
        <Card sx={{ minWidth: '100%', padding: '20px', mb: 3 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent='center'
            alignItems='center'
          >
            <Typography gutterBottom variant='h5' component='div'>
              Live Streaming Link
            </Typography>
            <Button size='medium'>Join Now!</Button>
          </Stack>

          <CardMedia
            component='video'
            height='140'
            image='https://www.youtube.com/embed/_v_TF8t3uOw'
            title='Live Streaming'
            controls
          />
        </Card>

        <Card sx={{ minWidth: '100%', padding: '20px', mb: 3 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent='center'
            alignItems='center'
          >
            <Typography gutterBottom variant='h5' component='div'>
              Live Streaming Link
            </Typography>
            <Button size='medium'>Join Now!</Button>
          </Stack>
 
          <CardMedia
            component='video'
            height='140'
            image='https://www.youtube.com/embed/_v_TF8t3uOw'
            title='Live Streaming'
            controls
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default BlogPostList
