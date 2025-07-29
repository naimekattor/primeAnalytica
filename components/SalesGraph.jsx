"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
  { name: "Jul", sales: 3490 },
  { name: "Aug", sales: 2000 },
  { name: "Sep", sales: 2780 },
  { name: "Oct", sales: 1890 },
  { name: "Nov", sales: 3000 },
  { name: "Dec", sales: 4000 },
];

const SalesGraph = () => {
  return (
    <div className="bg-gradient-to-br from-[#04245f] to-[#051434] p-8 rounded-xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-white mb-2">Sales overview</h2>
      <p className="text-gray-400 mb-6">Sales performance in 2023</p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={salesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                borderColor: "#4B5563",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#E5E7EB" }}
              itemStyle={{ color: "#9CA3AF" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesGraph;
