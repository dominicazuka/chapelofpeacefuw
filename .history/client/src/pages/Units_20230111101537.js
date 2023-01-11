import * as React from 'react'
import Grid from '@mui/material/Grid' // Grid version 1
import Button from '@mui/material/Button'
import { Paper, Stack } from '@mui/material'
import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'


function Units () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

const images = [
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f9/ad/dd/getlstd-property-photo.jpg?w=1200&h=-1&s=1',
    title: 'Medical & Technical Unit',
    width: '40%'
  },
  {
    url: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2h1cmNoJTIwYnVpbGRpbmd8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Children Unit',
    width: '30%'
  },
  {
    url: 'https://i.swncdn.com/media/980w/cms/CW/faith/42359-church-ThinkstockPhotos-139605937.1200w.tn.jpg',
    title: 'Prayer Unit',
    width: '30%'
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f9/ad/dd/getlstd-property-photo.jpg?w=1200&h=-1&s=1',
    title: 'Ushering Unit',
    width: '40%'
  },
  {
    url: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2h1cmNoJTIwYnVpbGRpbmd8ZW58MHx8MHx8&w=1000&q=80',
    title: 'Bible Study Unit',
    width: '30%'
  },
  {
    url: 'https://i.swncdn.com/media/980w/cms/CW/faith/42359-church-ThinkstockPhotos-139605937.1200w.tn.jpg',
    title: 'Counselling Unit',
    width: '30%'
  }
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15
    },
    '& .MuiImageMarked-root': {
      opacity: 0
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor'
    }
  }
}))

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%'
})

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity')
}))

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity')
}))


  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{ marginTop: '140px' }}
      >
        Service Units
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        className='unitsContainer text-center'
        sx={{mb:4}}
      >
        {/**Service units**/}

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          // sx={{mb:2}}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '20px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Media and Technical Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '30px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align = 'center'
>Children Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '30px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align = 'center'
>Prayer Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '40px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Bible Study Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

         <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '30px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Ushering Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

         <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '40px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Counselling Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

 <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '40px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Women's Fellowship Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>

         <Grid
          item
          xs={12}
          sm={12}
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            variant='outlined'
            elevation={24}
            sx={{ padding: '40px', boxShadow: 3 }}
            rounded
          >
            <Typography variant='h6' align="center">Choir Unit</Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent='center'
              alignItems='center'
            >
              <Button variant='contained' size='small' color='primary' sx={{mt:2}}>
                Sign Up
              </Button>
            </Stack>
          </Paper>
        </Grid>
        {/**2nd**/}
        

        {/**CTA**/}

        <Grid className='unitCTA mt-5'>
        <Typography className='mb-5 mt-4' style={{ color: 'white' }}>
          Join us...put your calling to use in building the body of Christ our
          Lord
        </Typography>
        <Button variant='contained' size='small' color='primary'>
          Learn more
        </Button>
      </Grid>

        {/**Worship Image**/}

        <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid className='unitBigImg mt-5'>
          <Typography
            variant='h3'
            className='mb-5 mt-5 unitBigText'
            style={{ color: 'white' }}
          >
            Worshipping in Spirit and in truth!!!
          </Typography>
        </Grid>
      </Grid>
      </Grid>
    </>
  )
}

export default Units
