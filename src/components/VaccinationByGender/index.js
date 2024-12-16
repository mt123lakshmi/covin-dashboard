// Write your code here
import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import './index.css'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const VaccinationByGender = ({ data }) => (
  <div className="chart-container">
    <h2>Vaccination by Gender</h2>
    <PieChart width={1000} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label
        outerRadius={120}
        fill="#8884d8"
        dataKey="count"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
)

export default VaccinationByGender
