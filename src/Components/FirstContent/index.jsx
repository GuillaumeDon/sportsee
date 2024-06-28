import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: '1', poids: 69.2, calories: 70 },
  { day: '2', poids: 70, calories: 69 },
  { day: '3', poids: 70.5, calories: 70 },
  { day: '4', poids: 69.2, calories: 70.5 },
  { day: '5', poids: 70, calories: 69 },
  { day: '6', poids: 70.5, calories: 70 },
  { day: '7', poids: 69.2, calories: 70.5 },
  { day: '8', poids: 70, calories: 69 },
  { day: '9', poids: 70.5, calories: 70 },
  { day: '10', poids: 69.2, calories: 70.5 },
];

function FirstContent() {
  return (
    <div className="resultats-content-1">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="30%"
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="right" orientation="right" domain={[69, 71]} ticks={[69, 70]} />
          <Tooltip />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ marginBottom: '20px' }} />
          <Bar yAxisId="right" dataKey="poids" fill="#000000" />
          <Bar yAxisId="right" dataKey="calories" fill="#FF0000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FirstContent;
