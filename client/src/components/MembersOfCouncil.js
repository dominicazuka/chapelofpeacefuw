import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

function MembersOfCouncil() {
  return (
    <Box id="team" class="team_member mt-5 section-padding">
      <Typography variant="h3" sx={{ mt: 3 }} align="center">
        Members of Council
      </Typography>
      <Typography variant="h6" align="center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5 }}
        // class="container"
      >
        {/* <Grid justifyContent="center"
        alignItems="center" class="section-title text-center" >
          <Typography variant="h3" sx={{mt:3}}>Members of Council</Typography>
          <Typography variant="h7">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </Typography>
        </Grid>  */}
        {/* <Grid class="row text-center"> */}
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          class="row text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <Grid class="our-team">
            <Grid class="team_img">
              <CardMedia
                component="img"
                height="500"
                image="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="first slide"
              />
              {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="team-image"/> */}
              <ul class="social">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid class="team-content">
              <Typography class="title">Stephen Cronin</Typography>
              <span class="post">Designer</span>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          class="row text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <Grid class="our-team">
            <Grid class="team_img">
              <CardMedia
                component="img"
                height="500"
                image="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="first slide"
              />
              {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="team-image"/> */}
              <ul class="social">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid class="team-content">
              <Typography class="title">Stephen Cronin</Typography>
              <span class="post">Designer</span>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          class="row text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <Grid class="our-team">
            <Grid class="team_img">
              <CardMedia
                component="img"
                height="500"
                image="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="first slide"
              />
              {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="team-image"/> */}
              <ul class="social">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid class="team-content">
              <Typography class="title">Stephen Cronin</Typography>
              <span class="post">Designer</span>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          class="row text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.1s"
          data-wow-offset="0"
        >
          <Grid class="our-team">
            <Grid class="team_img">
              <CardMedia
                component="img"
                height="500"
                image="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="first slide"
              />
              {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="team-image"/> */}
              <ul class="social">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid class="team-content">
              <Typography class="title">Stephen Cronin</Typography>
              <span class="post">Designer</span>
            </Grid>
          </Grid>
        </Grid>

        {/* </Grid> */}
      </Grid>
    </Box>
  )
}

export default MembersOfCouncil
