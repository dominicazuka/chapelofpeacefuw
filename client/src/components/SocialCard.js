import React from "react";
import Grid from '@mui/material/Grid' 
import { Typography, Link } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialCard() {
  return (
    <>
      <hr class="m-0" />

      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent="center"
       class="text-center py-4 align-items-center">
        <Typography>Follow Chapel of Peace FUW on social media</Typography>
        <Link
          href="#"
          underline="hover"
          class="btn btn-primary m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
         <YouTubeIcon/>
        </Link>
        <Link
          href="#"
         underline="hover"
          class="btn btn-primary m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <FacebookIcon/>
        </Link>
        <Link
          href="#"
          class="btn btn-primary m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        ><TwitterIcon/>
        </Link>
        <Link
          href="#"
          underline="hover"
          class="btn btn-primary m-1"
          role="button"
          rel="nofollow"
          target="_blank"
        >
          <LinkedInIcon/>
        </Link>
      </Grid>
    </>
  );
}

export default SocialCard;
