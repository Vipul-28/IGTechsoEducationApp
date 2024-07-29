import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const ProgressBarChart = () => {
  const data = [
    {
      name: 'SU',
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: 'M',
      uv: 3000,
      pv:   "2h",
      amt: 2210,
    },
    {
      name: 'TW',
      uv: 2000,
      pv: "4h",
      amt: 2290,
    },
    {
      name: 'W',
      uv: 2780,
      pv: "8h",
      amt: 2000,
    },
    {
      name: 'T',
      uv: 1890,
      // pv: 4800,
      amt: 2181,
    },
    {
      name: 'F',
      uv: 2390,
      // pv: 3800,
      amt: 2500,
    },
    {
      name: 'S',
      uv: 3490,
      pv: '',
      amt: 2100,
    },
  ];

  const yAxisLabels = {
    0:'0',
    2500: '2H',5000: '4H',75000: '8H'};
  const formatYAxis = (tickItem) => 
  {
    console.log(yAxisLabels[tickItem] )
    yAxisLabels[tickItem] || '';
  }
  return (
         <ResponsiveContainer width={492} height={391}>
        <BarChart
          width={10}
          barSize={12}
          height={166}
          data={data}
          
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
          // barSize={100}
        >
          <XAxis dataKey="name" scale="point" fontSize={14}  padding={{ left: 10, right: 10 }} />
          
          {/* <YAxis fontSize={10} />  */}
          
          <YAxis
          type='category'
          // dataKey=""
          scale="point"
          fontSize={10}
          // tickFormatter={formatYAxis}
        />
          <Tooltip />
          <Legend />
          <Bar width={12} dataKey="pv" fill="#8884d8" background={{ fill: '#E9E3EC' }}  radius={[16, 16, 16, 16]}  />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default ProgressBarChart
