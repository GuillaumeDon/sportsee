import React from 'react';

import LineChartGraph from '../LineChartGraph';
import RadarChartGraph from '../RadarChartGraph';
import PieChartGraph from '../PieChartGraph';

function SecondContent() {
  return (
    <div className="resultats-content-2">
      <LineChartGraph/>
      <RadarChartGraph />
      <PieChartGraph/>
    </div>
  );
}

export default SecondContent;