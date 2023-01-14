import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
//import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Title from "./Title";

export default function Chart({data}) {
  const theme = useTheme();

  const newData = data.map((o)=>({name:o._id.category, totalCategory: o.totalCategory}))

  return (
    <React.Fragment>
      <Title>Current Month</Title>
      <ResponsiveContainer>
        <BarChart
          width={600}
          height={600}
          data={newData}>
          <Bar
            dataKey="totalCategory"
            fill="green"
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
