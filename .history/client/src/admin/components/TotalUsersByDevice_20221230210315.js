import * as React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Title from './Title'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

function preventDefault (event) {
  event.preventDefault()
}
const COLORS = ['#8884d8', '#82ca9d', '#FFBB28', '#FF8042', '#AF19FF']
const pieData = [
  {
    name: 'Apple',
    value: 54.85
  },
  {
    name: 'Samsung',
    value: 47.91
  },
  {
    name: 'Redmi',
    value: 16.85
  },
  {
    name: 'One Plus',
    value: 16.14
  },
  {
    name: 'Others',
    value: 10.25
  }
]
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div
        className='custom-tooltip'
        style={{
          backgroundColor: '#ffff',
          padding: '5px',
          border: '1px solid #cccc'
        }}
      >
        <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
      </div>
    )
  }
  return null
}
export default function TotalUsersByDevice () {
  return (
    <React.Fragment>
      <Title>Users by device</Title>
      <PieChart width={730} height={300}>
        <Pie
          data={pieData}
          color='#000000'
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={120}
          fill='#8884d8'
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>

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
    </React.Fragment>
  )
}
