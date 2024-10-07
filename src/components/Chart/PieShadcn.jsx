"use client";

import { Pie, PieChart, Cell, Tooltip } from "recharts";

import { ChartConfig, ChartContainer } from "src/components/ui/chart";

const chartData = [
  { name: "Desktop", value: 186 },
  { name: "Mobile", value: 80 },
  { name: "February", value: 305 },
  { name: "March", value: 237 },
  { name: "April", value: 73 },
  { name: "May", value: 209 },
  { name: "June", value: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};

const COLORS = [chartConfig.desktop.color, chartConfig.mobile.color];

export function PieShadcn() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <PieChart width={400} height={400}>
        <Tooltip />
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>
    </ChartContainer>
  );
}
