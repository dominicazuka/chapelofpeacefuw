import React from 'react'
import Grid from '@mui/material/Grid' // Grid version 1
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'

function MoreInfo () {
  return (
    <>
      {/**LHS**/}
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          justifyContent='center'
          alignItems='center'
        >
          <Card sx={{ maxWidth: 600 }} style={{ marginTop: '20px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://img.freepik.com/free-vector/illustration-business-target-icon_53876-5898.jpg?w=740&t=st=1666193805~exp=1666194405~hmac=35ae5b83d2543488392792cbfdece54e3dfb72cd02e5312cb3ed93ea9f360346'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Our Vision
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  To see the members of CHapel of Peace FUW be so Passionate
                  about God¹s heart for the lost that they have become
                  Proficient in ministry skills and are Pro-actively involved in
                  strategic outreach ministries locally, nationally and globally
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 600 }} style={{ marginTop: '20px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://img.freepik.com/free-vector/illustration-business-mission_53876-26964.jpg?w=826&t=st=1666194036~exp=1666194636~hmac=b4b0488419f6df099891efd267a3cf84ff0b0e3bc83fe8a5e008b0466bb4e31a'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Our Mission
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  To serve Jesus as we Motivate, Equip and Involve all segments
                  of the congregation at Federal University Wukari in local,
                  national and global outreach.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 600 }} style={{ marginTop: '20px' }}>
            <CardMedia
              component='img'
              height='140'
              image='https://img.freepik.com/free-vector/flat-design-church-building-illustration_23-2149441679.jpg?w=2000'
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                style={{ marginTop: '10px' }}
              >
                Join Us
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Becoming a community in Christ ... reaching our world for
                Christ.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='contained' size='small' color='primary'>
                Membership
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/**RHS**/}
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          justifyContent='center'
          alignItems='center'
        >
          <Card sx={{ maxWidth: 700 }} style={{ marginTop: '20px' }}>
            <CardMedia
              component='img'
              height='140'
              image='https://media.istockphoto.com/photos/group-of-mature-black-women-in-church-robes-picture-id690220528?b=1&k=20&m=690220528&s=170667a&w=0&h=kqhWnD7D9Fdnupzsz5wKIMcraI7ebzkTw_AtpnyiCMw='
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Weekly Events
              </Typography>
              <Typography gutterBottom variant='h7' component='div'>
                Week 1
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <Typography
                gutterBottom
                variant='h5'
                component='div'
                style={{ marginTop: '10px' }}
              >
                Special Events
              </Typography>
              <Typography gutterBottom variant='h7' component='div'>
                Week 1
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='contained' size='small' color='primary'>
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default MoreInfo
