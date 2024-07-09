import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Filled', value: 12 },
  // { name: 'Unfilled', value: 88 },
];

const COLORS = ['#0088FE', 'transparent']; // Utiliser 'transparent' pour la partie non remplie

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart className="pie-chart-container graphic-shapes" width={256} height={268} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={180 - (360 * (data[0].value / 100))}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
