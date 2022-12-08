import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid' // Grid version 1
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import ProjectsSlider from '../components/ProjectsSlider'
import MissionOutreachSlider from '../components/MissionOutreachSlider'

function Projects () {
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
        Projects
      </Typography>
      
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{padding:"20px"}}
        // class='container projectsContainer'
      >
        {/**LHS**/}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{padding:"20px"}}
          // direction="column"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          align="center"
          justifyContent='center'
          alignItems='center'
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://img.freepik.com/free-vector/illustration-business-target-icon_53876-5898.jpg?w=740&t=st=1666193805~exp=1666194405~hmac=35ae5b83d2543488392792cbfdece54e3dfb72cd02e5312cb3ed93ea9f360346'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  <b>Chapel Building Project</b>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Construction of a 2ooo capacity chapel within the univeristy
                </Typography>
                <Typography gutterBottom variant='h9' component='div'>
                  <b>State:</b>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Raise all 50 columns and done flooring.
                </Typography>
                <Typography gutterBottom variant='h9' component='div'>
                  <b>Needs:</b>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Prayers for a speedy completion of the Project Prayers for
                  wisdom and transformation means to reach souls in our
                  contemporary times. Funds and material support to complete the
                  structure.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/**RHS**/}

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{padding:"20px"}}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          align="center"
          // direction="column"
          justifyContent='center'
          alignItems='center'
        >
          <Card sx={{ padding: '20px' }}>
            <ProjectsSlider />
          </Card>
        </Grid>
      </Grid>

      {/**donate**/}
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='h6' className='mt-5'  align="center">
          To donate and get updates on the progress, please{' '}
          <Button variant='contained' size='small' color='primary'>
            Contact Us
          </Button>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
        sx={{padding:"20px"}}
        className='justify-content-center'
      >
        {/**LHS**/}
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          justifyContent='center'
          alignItems='center'
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Card sx={{ maxWidth: 700 }}>
            <MissionOutreachSlider />
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
          style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Card sx={{ maxWidth: 500 }} style={{ marginTop: '20px' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='https://img.freepik.com/free-vector/illustration-business-target-icon_53876-5898.jpg?w=740&t=st=1666193805~exp=1666194405~hmac=35ae5b83d2543488392792cbfdece54e3dfb72cd02e5312cb3ed93ea9f360346'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  <b>Missions and Outreach</b>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Funding of mission strategically and organizing Crusades to
                  reach the unreached with the gospel of our Lord Jesus Christ
                </Typography>
                <Typography gutterBottom variant='h9' component='div'>
                  <b>State:</b>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  From 2016 we have been organizing Campus Crusade that has led
                  to over 500 souls won for Christ.
                </Typography>
                <Typography gutterBottom variant='h9' component='div'>
                  <b>Needs:</b>
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  <ul>
                    <li>
                      Prayers for wisdom and transformation means to reach souls
                      in our contemporary time
                    </li>
                    <li>
                      Funds and material support for holistic ministry and
                      missions.
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography className='mt-5' align="center" padding="20px">
          To donate and get updates on the progress, please{' '}
          <Button variant='contained' size='small' color='primary'>
            Contact Us
          </Button>
        </Typography>
      </Grid>

      {/**CTA**/}

      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid className='unitCTA mt-5'>
          <Typography variant="h3" className='mb-5 mt-5' style={{ color: 'white' }}>
            Join us...in reaching the unreached for Christ
          </Typography>
          <Button variant='contained' size='small' color='primary'>
            Learn more
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Projects
