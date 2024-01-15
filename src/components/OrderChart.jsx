
import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Dec",
    Denied: 400,
    pending: 240,
    completed: 240
  },
  {
    name: "Jan",
    Denied: 300,
    pending: 139,
    completed: 221
  },
  {
    name: "Feb",
    Denied: 200,
    pending: 550,
    completed: 229
  },
  {
    name: "Mar",
    Denied: 278,
    pending: 390,
    completed: 400
  },
  {
    name: "Apr",
    Denied: 189,
    pending: 480,
    completed: 218
  },
  {
    name: "May",
    Denied: 239,
    pending: 380,
    completed: 250
  },
  {
    name: "Jun",
    Denied: 340,
    pending: 410,
    completed: 110
  },
  {
    name: "Jul",
    Denied: 149,
    pending: 200,
    completed: 211
  },
  {
    name: "Aug",
    Denied: 490,
    pending: 450,
    completed: 210
  },
];

export default function OrderChart() {
  return (
    <div className="mt-6 ">
      <div className="w-full m-6">
      <select name="" id="">
        <option value=""></option>
        <option value="">Last 12 Months</option>
        <option value="">Last 6 Months</option>
        <option value="">Last 3 Months</option>
      </select>

      </div>
  
 <LineChart
      width={1300}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Denied"
        stroke="#FF0000"
        activeDot={{ r: 5 }}
      />
      <Line 
      type="monotone"
       dataKey="pending" 
       stroke="#FFB946"
       activeDot={{ r: 5 }}
       
        />
       
      <Line 
      type="monotone" 
      dataKey="completed" 
      stroke="#0FA958"
      activeDot={{ r: 5 }}
     
      />
    </LineChart>
    </div>
   
  );
}
