import {
  ButtonBase,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import AboutUsSlider from '../components/AboutUsSlider'
import MembersOfCouncil from '../components/MembersOfCouncil'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  })
  return (
    <>
      {/* <Typography
          variant="h2"
          className="text-center allTitles"
          sx={{ marginTop: '100px', mb: 3 }}
        >
          About Us
        </Typography> */}
      <AboutUsSlider />
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent="center"
        alignItems="center"
        style={{ padding: '50px' }}
      >
        <Grid
          container
          spacing={2}
          columns={12}
          justifyContent="center"
          alignItems="center"
          style={{ padding: '50px' }}
          // sx={{mx: 'auto'}}
        >
          {/**LHS**/}

          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Our Belief
                </Typography>

                <Typography variant="body2">
                  We tend to Glorify God by mobilizing the resources entrusted
                  to Chapel of Peace FUW for the fulfillment of Christ’s
                  commission to make disciples in all nations.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button size="small" align="center">
                    Learn More
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>

          {/**MIDDLE**/}

          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Our Vision and Mission
                </Typography>

                <Typography variant="body2">
                  To see the members of Chapel of Peace FUW be so Passionate
                  about God¹s heart for the lost that they have become
                  Proficient in ministry skills and are Pro-actively involved in
                  strategic outreach ministries locally, nationally and
                  globally. To serve Jesus as we Motivate, Equip and Involve all
                  segments of the congregation at Chapel of Peace FUW in local,
                  national and global outreach.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button size="small" align="center">
                    Learn More
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>

          {/**RHS**/}

          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  For Kids
                </Typography>

                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi mollitia magnam neque beatae quae. Natus libero labore
                  optio pariatur, fuga corporis? Ducimus id incidunt hic aliquid
                  eius assumenda quasi sapiente.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button size="small" align="center">
                    Learn More
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card sx={{ minWidth: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Events
                </Typography>

                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi mollitia magnam neque beatae quae. Natus libero labore
                  optio pariatur, fuga corporis? Ducimus id incidunt hic aliquid
                  eius assumenda quasi sapiente.
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button size="small" align="center">
                    Learn More
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          className="text-center allTitles"
          sx={{ marginTop: '30px', mb: 3 }}
        >
          Brief History
        </Typography>
       <Card sx={{ maxWidth: 600, mb: 4 }}>
          <CardMedia
            component="img"
            height="600"
            image="https://media.istockphoto.com/photos/priest-with-book-in-the-church-picture-id1314636603?b=1&k=20&m=1314636603&s=170667a&w=0&h=Ro4BuQHufhMRY_G7Yf9LyLUezBLqrZxxJbOkOk0gyYY="
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chapel of Peace FUW
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chapel of Peace FUW Our vision is to become a Biblically rooted and culturally sensitive church moved by a Great Commission Vision which equips and enables men and women to communicate Christ through significant relationships with God, with one another as believers ad with non-believers. Our vision is to see God mature us into a local community of believers committed to serving those within the community of believers and seeking those outside the community of believers, both locally and globally, with character, compassion, courage and creativity. Sloganized as: “Becoming a community in Christ ... reaching our world for Christ.”
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <MembersOfCouncil />
    </>
  )
}

export default About
