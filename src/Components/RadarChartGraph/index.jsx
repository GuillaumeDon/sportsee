import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const data = [
  { subject: 'Intensité', A: 120, fullMark: 150 },
  { subject: 'Cardio', A: 98, fullMark: 150 },
  { subject: 'Énergie', A: 86, fullMark: 150 },
  { subject: 'Endurance', A: 99, fullMark: 150 },
  { subject: 'Force', A: 85, fullMark: 150 },
  { subject: 'Vitesse', A: 65, fullMark: 150 },
];

export default class RadarChartGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

  render() {
    return (
      <div className="radar-chart-container graphics-shape">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Performance" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
