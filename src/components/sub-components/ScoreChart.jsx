import { PieChart, Pie, Cell } from "recharts";
import React from "react";

export default function ScoreChart({ score, total }) {
  const percentage = (score / 15) * 100;

  const data = [
    { name: "Scored", value: score },
    { name: "Remaining", value: total - score },
  ];

  const COLORS = ["#4A90E2", "#E0E0E0"];

  return (
    <div className="w-full flex relative justify-center items-center">
      <PieChart width={150} height={150} className="mt-4">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
          startAngle={0}
          endAngle={360}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      <div className="absolute inset-0 flex items-center justify-center text-2xl text-red-600 mt-[1rem]">
        🎯
      </div>
    </div>
  );
}
