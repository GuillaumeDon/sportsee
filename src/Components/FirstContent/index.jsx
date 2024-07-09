import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { poids: 69.2, calories: 70 },
  { poids: 70, calories: 69.4 },
  { poids: 70.5, calories: 70 },
  { poids: 70.2, calories: 70.5 },
  { poids: 70, calories: 69.4 },
  { poids: 70.5, calories: 70 },
  { poids: 69.2, calories: 70.5 },
  { poids: 70, calories: 69.4 },
  { poids: 70.5, calories: 70 },
  { poids: 69.2, calories: 70.5 },
];

function CustomLegend() {
  return (
    <div className="custom-legend">
      <div className="legend-item">
        <span className="legend-point black"></span>
        Poids (kg)
      </div>
      <div className="legend-item">
        <span className="legend-point red"></span>
        Calories brûlées (kcal)
      </div>
    </div>
  );
}

function FirstContent() {
  return (
    <div className="resultats-content-1">
      <div className="header">
        <h3>Activité quotidienne</h3>
        <CustomLegend />
      </div>
      <ResponsiveContainer width={835} height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barCategoryGap="30%"
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="right" orientation="right" domain={[69, 71]} ticks={[69,70, 71]} />
          <Tooltip />
          <Bar yAxisId="right" dataKey="poids" fill="#000000" />
          <Bar yAxisId="right" dataKey="calories" fill="#FF0000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FirstContent;
