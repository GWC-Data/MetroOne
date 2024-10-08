import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS, valueFormatter } from './Chart4data';

export default function PieArcLabel() {
  const colors = [
    'rgba(186, 5, 23, 0.8)', // Windows
    'rgba(216, 58, 0, 0.8)',  // OS X
    'rgba(117, 38, 227, 0.8)',    // Linux
    'rgba(255, 83, 138, 0.8)',   // Chrome OS
    'rgba(6, 165, 154, 0.8)', // Other
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
          color: 'white', // Change label text color to white
        },
        // Additional styling for the values, if necessary
        [`& .${pieArcLabelClasses.label}`]: {
          color: 'white', // Ensure the values are white
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
