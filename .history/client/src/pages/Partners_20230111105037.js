import { useEffect } from 'react'
import Grid from '@mui/material/Grid' // Grid version 1
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

function Partners () {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const ExpandMore = styled(props => {
    const { expand, ...other } = props
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  }))

  return (
    <>
      <Typography
        variant='h3'
        className='text-center mb-5 allTitles'
        style={{ marginTop: '140px' }}
      >
        Our Partners
      </Typography>
      <Grid
        container
        spacing={1}
        columns={12}
        justifyContent='center'
        alignItems='center'
        className='partnersContainer'
      >
        {/** FCS CARD**/}
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ minWidth: '100%' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  F
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Fellowship of Christian Students'
              subheader='FCS'
            />
            <CardMedia
              component='img'
              height='194'
              image='https://www.catholicsun.org/wp-content/uploads/2014/01/black-catholics-20111129nw558.jpg'
              alt='Paella dish'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                Thank you for your interest in our young people and efforts
                towards winning them to Christ and helping them grow in faith to
                utter fullness to attain their God-given potentials while young
                and preparing them for meaningful and productive life and
                service especially while in school, on graduation, and all
                through life. This requires commitment and a harmony of vision
                and strategy plus synergy of resources.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Worship Meetings:</Typography>
                <Typography paragraph>
                  <ul>
                    <li>Worship - Sundays 4pm - 600 Seater Lecture hall</li>
                    <li>Bible Studies - Tuedays 4pm</li>
                  </ul>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/** NIFES CARD**/}
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  N
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Nigerian Fellowship of Evangelical Students'
              subheader='NIFES'
            />
            <CardMedia
              component='img'
              height='194'
              image='https://www.catholicsun.org/wp-content/uploads/2014/01/black-catholics-20111129nw558.jpg'
              alt='Paella dish'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                The Nigeria Fellowship of Evangelical Students (NIFES) is an
                indigenous, non-governmental and interdenominational
                organization of evangelical Christian students in Nigeria
                tertiary institutions. We reach out to students through small
                group Bible Studies, Evangelism, Prayers meetings, Large Group
                Meetings, Biblical Discipleship, Life-changing Leadership
                Training and Conference.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Worship Meetings:</Typography>
                <Typography paragraph>
                  <ul>
                    <li>Worship - Sundays 2pm - 600 Seater Lecture hall</li>
                    <li>Bible Studies - Tuedays 6pm</li>
                  </ul>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/** BOYS & GIRLS BRIGADE CARD**/}
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  B
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Boys & Girls Brigade'
              subheader='BGB'
            />
            <CardMedia
              component='img'
              height='194'
              image='https://www.catholicsun.org/wp-content/uploads/2014/01/black-catholics-20111129nw558.jpg'
              alt='Paella dish'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                The Boys' Brigade is the largest Christian uniformed youth
                organisation in the United Kingdom and Republic of Ireland. The
                Boys' Brigade was founded in Glasgow, Scotland on 4 October 1883
                by Sir William Alexander Smith, and celebrated its 125th
                anniversary in 2008
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Worship Meetings:</Typography>
                <Typography paragraph>
                  <ul>
                    <li>Worship - Sundays 2pm - 600 Seater Lecture hall</li>
                    <li>Bible Studies - Tuedays 4pm</li>
                  </ul>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/** CHAPEL ALUMNI**/}
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  C
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Chapel Alumini'
              subheader='CA'
            />
            <CardMedia
              component='img'
              height='194'
              image='https://www.catholicsun.org/wp-content/uploads/2014/01/black-catholics-20111129nw558.jpg'
              alt='Paella dish'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit lorem,
                sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Repellendus, reiciendis itaque
                asperiores necessitatibus non sapiente doloremque voluptatum
                omnis inventore nemo? Quibusdam distinctio laboriosam enim
                reprehenderit aspernatur nostrum praesentium labore id!
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* <IconButton aria-label='add to favorites'>
                <FavoriteIcon /
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Worship Meetings:</Typography>
                <Typography paragraph>
                  <ul>
                    <li>
                      Alumni Fellowship - Last Sunday of Every month 2pm
                      (Virtual Link){' '}
                    </li>
                    <li>
                      Training & Prayer Workshops - Once yearly (Check Alumni
                      Activities Board)
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/** OTHER PARTNERS CARD**/}
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  C
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Other Partners'
              subheader='OP'
            />
            <CardMedia
              component='img'
              height='194'
              image='https://www.catholicsun.org/wp-content/uploads/2014/01/black-catholics-20111129nw558.jpg'
              alt='Paella dish'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                We are open to engage in any partnership that advances the
                Kingdom of Christ Jesus
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {/* <IconButton aria-label='add to favorites'>
                <FavoriteIcon /
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Other Partners:</Typography>
                <Typography paragraph>
                  <ul>
                    <li>The Christian Community in the University</li>
                    <li>The Christian Community in the host Community</li>
                  </ul>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Partners
