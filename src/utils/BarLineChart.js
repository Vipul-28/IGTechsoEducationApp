import React from 'react'
import { CartesianGrid,Legend,Line,LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const BarLineChart = () => {
    const data = [
        {
          "name": "Jan",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Feb",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Mar",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Apr",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "May",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Jun",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Jul",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        },
        {
          "name": "Aug",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        },
        {
          "name": "Sep",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        },
        {
          "name": "Oct",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        },
        {
          "name": "Nov",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        },
        {
          "name": "Dec",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
      
                                  
  return (
    // <ResponsiveContainer>

      <LineChart  width={492} height={391}
      barSize={20}
      data={data} >
        {/* <CartesianGrid strokeDasharray="1" /> */}
        <XAxis fontSize={10} dataKey="name" />
        {/* <YAxis fontSize={10} /> */}
        <Tooltip />
        <Legend />
        <Line type="monotone" strokeWidth={2} dataKey="pv" stroke="#8708C2" dot={false} />
      </LineChart>
      // </ResponsiveContainer>
 )
}

export default BarLineChart