import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  { minutes: 30 },
  { minutes: 45 },
  { minutes: 50 },
  { minutes: 40 },
  { minutes: 60 },
  { minutes: 70 },
  { minutes: 50 },
];

const LineChartGraph = () => {
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

export default LineChartGraph;
