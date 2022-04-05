import React from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 2441,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 4423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 7246,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 5219,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 6011,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 6170,
      revenue: 61000,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 w-5/6 m-auto">
      <div className="mb-10">
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>

      <div className="mb-10">
        <BarChart width={400} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="investment" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className="mb-10">
        <RadarChart outerRadius={90} width={400} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="MR SHAH"
            dataKey="revenue"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Suvro Nil"
            dataKey="investment"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Tooltip />
          <Legend />
        </RadarChart>
      </div>

      <div className="mb-10">
        <ComposedChart width={400} height={250} data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="revenue"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="investment" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Dashboard;
