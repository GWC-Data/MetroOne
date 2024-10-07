import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './Chart4data';

export default function PieArcLabel() {
  const colors = [
    'rgba(66, 134, 244, 0.8)', // Windows
    'rgba(255, 155, 0, 0.8)',  // OS X
    'rgba(0, 197, 98, 0.8)',    // Linux
    'rgba(255, 61, 61, 0.8)',   // Chrome OS
    'rgba(128, 128, 128, 0.8)', // Other
  ];
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          ...data,
        },
      ]}
      colors={colors}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  );
}

const size = {
  width: 400,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};
