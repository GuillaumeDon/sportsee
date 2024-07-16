import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'L', minutes: 30 },
  { day: 'M', minutes: 45 },
  { day: 'M', minutes: 50 },
  { day: 'J', minutes: 40 },
  { day: 'V', minutes: 60 },
  { day: 'S', minutes: 70 },
  { day: 'D', minutes: 50 },
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
          <XAxis dataKey="day" axisLine={false} tickLine={false} /> 
          <YAxis hide />
          <Tooltip formatter={(value) => `${value} min`} />
          {/* Removed Legend component */}
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartGraph;
