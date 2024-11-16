import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  { percentile: 0, noOfStudents: 1 },
  { percentile: 10, noOfStudents: 2 },
  { percentile: 20, noOfStudents: 3 },
  { percentile: 30, noOfStudents: 5 },
  { percentile: 40, noOfStudents: 7 },
  { percentile: 45, noOfStudents: 8 },
  { percentile: 50, noOfStudents: 11 },
  { percentile: 55, noOfStudents: 9 },
  { percentile: 60, noOfStudents: 6 },
  { percentile: 70, noOfStudents: 3 },
  { percentile: 85, noOfStudents: 2 },
  { percentile: 90, noOfStudents: 3 },
  { percentile: 100, noOfStudents: 1 },
];

const PercentileChart = ({ percentile }) => {
  console.log(percentile);
  return (
    <div className="flex justify-start items-center w-full h-full  pr-10 py-5 sm:p-5">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            domain={[0, 100]}
            dataKey="percentile"
            ticks={[0, 25, 50, 75, 100]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="noOfStudents"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />

          <ReferenceLine
            x={percentile}
            stroke="black"
            label={{ position: "top", value: "Your Percentile" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentileChart;
