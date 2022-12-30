import React from 'react'
import Title from '../components/Title'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material'

const BlogOverview = () => {
  return (
    <>
      <Title>Blog Overview</Title>
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
          sm={6}
          md={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/**MIDDLE**/}

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Card sx={{ minWidth: 345 }}>
            <CardActionArea>
              {/* <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
              /> */}
              <CardContent>
                <Typography gutterBottom variant='h5' component='div' align='center'>
                  POSTS
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  2,390
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
            </CardActions> */}
          </Card>
        </Grid>

        {/**RHS**/}

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Lizard
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default BlogOverview
