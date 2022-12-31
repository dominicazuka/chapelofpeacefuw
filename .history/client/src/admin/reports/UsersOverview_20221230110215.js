import React from 'react'
import Title from '../components/Title'
import { Grid, Paper } from '@mui/material'
import UsersChart from '../components/UsersChart'
import TotalUsersByDevice from '../components/TotalUsersByDevice'

const UsersOverview = () => {
  return (
    <>
      <Title>Users Overview</Title>
      {/* Chart */}

      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240
          }}
        >
          <UsersChart />
        </Paper>
      </Grid>
      {/* Total Donations */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240
          }}
        >
          <TotalUsersByDevice />
        </Paper>
      </Grid>
    </>
  )
}

export default UsersOverview
