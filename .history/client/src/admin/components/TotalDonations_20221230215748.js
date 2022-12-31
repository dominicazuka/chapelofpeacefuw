import * as React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Title from './Title'
import {
  ResponsiveContainer
} from 'recharts'

function preventDefault (event) {
  event.preventDefault()
}

export default function TotalDonations () {
  return (
    <React.Fragment>
      <Title>Total Donations</Title>
      <ResponsiveContainer width='100%' height='100%'>
      <Typography component='p' variant='h4'>
        ₦3,234,000.00
      </Typography>
      <Typography color='text.secondary' sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color='primary' href='#' onClick={preventDefault}>
          View all Donations
        </Link>
        </div>
        </ResponsiveContainer>
    </React.Fragment>
  )
}
