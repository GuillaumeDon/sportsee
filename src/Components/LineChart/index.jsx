import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'L', minutes: 30 },
  { name: 'M', minutes: 45 },
  { name: 'M', minutes: 50 },
  { name: 'J', minutes: 40 },
  { name: 'V', minutes: 60 },
  { name: 'S', minutes: 70 },
  { name: 'D', minutes: 50 },
];

const LineChartComponent = () => {
  return (
    <div className="graphics-shape LineCharte">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >

          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip formatter={(value) => `${value} min`} />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ marginBottom: '20px' }} />
          <Line type="monotone" dataKey="minutes" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
