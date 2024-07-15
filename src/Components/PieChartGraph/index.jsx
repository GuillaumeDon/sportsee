import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Filled', value: 36 },
  { name: 'Unfilled', value: 76 },
];

const COLORS = ['#E60000', 'transparent']; 

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div className="pie-chart-container">
        <h3>Score</h3>
        <div className="pie-chart-inner-container">
          <PieChart className="graphic-shapes" width={256} height={256} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              startAngle={90}
              endAngle={450}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <div className="centered-text">
            12% <br></br>de votre <br></br>objectif
          </div>
        </div>
      </div>
    );
  }
}
