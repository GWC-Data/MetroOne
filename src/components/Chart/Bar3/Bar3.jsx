import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from './Chart3data';


const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};

export default function GridDemo() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
      sx={{
        // Set axis label colors to white
        '& .MuiXAxis-label, & .MuiYAxis-label': {
          color: 'white',
        },
        // Set tick label colors to white
        '& .MuiXAxis-tick, & .MuiYAxis-tick': {
          color: 'white',
        },
      }}
    />
  );
}