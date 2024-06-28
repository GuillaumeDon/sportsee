import React from 'react';

import LineChart from '../LineChart';
import RadarChart from '../RadarChart';
import PieChart from '../PieChart';

function SecondContent() {
  return (
    <div className="resultats-content-2">
      <LineChart />
      <RadarChart />
      <PieChart/>
    </div>
  );
}

export default SecondContent;