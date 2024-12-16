import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import './index.css'

const VaccinationCoverage = ({ data }) => (
  <div className="chart-container">
    <h2>Vaccination Coverage</h2>
    <BarChart width={1000} height={300} data={data}>
      <XAxis dataKey="vaccine_date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="dose_1" fill="#8884d8" />
      <Bar dataKey="dose_2" fill="#82ca9d" />
    </BarChart>
  </div>
)

export default VaccinationCoverage
