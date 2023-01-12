import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import SocialCard from '../components/SocialCard'
import HomeIcon from '@mui/icons-material/Home'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

function Footer () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SocialCard />
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent='center'
        alignItems='center'
        style={{ backgroundColor: '#ECEFF1' }}
        sx={{ mt: 4 }}
      >
        <Grid
          item
          align='center'
          xs={12}
          sm={12}
          md={3}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant='h6'>QUICK LINKS</Typography>
          <hr
            className='mb-4 mt-0 d-inline-block mx-auto'
            style={{
              width: '60px',
              backgroundColor: 'rgb(142, 223, 142)',
              height: '2px'
            }}
          />
          <Typography>
            <Link href='#' underline='hover'>
              About Us
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Prayer Requests and Testimonies
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Giving and Donations
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Membership
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Projects
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Alumni
            </Link>
          </Typography>
        </Grid>

        <Grid
          item
          align='center'
          xs={12}
          sm={12}
          md={3}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant='h6'>UNITS</Typography>
          <hr
            className='mb-4 mt-0 d-inline-block mx-auto'
            style={{
              width: '60px',
              backgroundColor: 'rgb(142, 223, 142)',
              height: '2px'
            }}
          />
          <Typography>
            <Link href='#' underline='hover'>
              Media and Technical
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Children Ministry
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Prayer
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Welfare
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Counseling
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Ushering
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Praise and Worship
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Bible study
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Security
            </Link>
          </Typography>
        </Grid>

        <Grid
          item
          align='center'
          xs={12}
          sm={12}
          md={3}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant='h6'>MEDIA LINKS</Typography>
          <hr
            className='mb-4 mt-0 d-inline-block mx-auto'
            style={{
              width: '60px',
              backgroundColor: 'rgb(142, 223, 142)',
              height: '2px'
            }}
          />
          <Typography>
            <Link href='#' underline='hover'>
              Facebook
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Youtube
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Link href='#' underline='hover'>
              Live Events
            </Link>
          </Typography>
        </Grid>

        <Grid
          item
          align='center'
          xs={12}
          sm={12}
          md={3}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography variant='h6'>CONTACT INFO</Typography>
          <hr
            className='mb-4 mt-0 d-inline-block mx-auto'
            style={{
              width: '60px',
              backgroundColor: 'rgb(142, 223, 142)',
              height: '2px'
            }}
          />
          <Typography>
            <HomeIcon />
            Temporary Site: 600 Seater Lecture <br />
            Hall <br />
            Permanent Site: University Chapel Site
            <br />
            Wukari
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <EmailIcon />{' '}
            <Link href='email:info@chapelofpeacefuw.org'>
              info@chapelofpeacefuw.org
            </Link>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <PhoneIcon />{' '}
            <Link href='tel:+447723926516'> +234803000000000</Link>
          </Typography>
        </Grid>
        <Grid
          item
          align='center'
          sx={{ width: '100%' }}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          {'© '}
          <Link to='/' color='inherit' underline='hover'>
            Chapel of Peace FUW
          </Link>{' '}
          {new Date().getFullYear()}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
