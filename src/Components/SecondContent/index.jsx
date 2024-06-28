import React from 'react';
import Graphics from '../Graphics'; 
import LineChart from '../LineChart';
import RadarChart from '../RadarChart';

function SecondContent() {
  return (
    <div className="resultats-content-2">
      <LineChart />
      <RadarChart />
      <Graphics classNameGraphics="resultats-content-2-graph3" />
    </div>
  );
}

export default SecondContent;