"use client";
import React, { useState } from "react";
import { MenuItem, Select, Stack, StackProps, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { monthlyDataset, weeklyDataset, yearlyDataset } from "./campaignData";

const CampaignChart: React.FC<StackProps> = ({ ...props }) => {
  const [view, setView] = useState("weekly");

  // Determine the dataset based on the selected view
  const dataset =
    view === "weekly"
      ? weeklyDataset
      : view === "monthly"
        ? monthlyDataset
        : yearlyDataset;
  return (
    <Stack bgcolor="background.paper" borderRadius={3} p={2} {...props}>
      {/* Select field for view */}
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography fontWeight={500} fontSize={15}>
          Range
        </Typography>
        <Select
          value={view}
          onChange={(e) => setView(e.target.value)}
          size="small"
          MenuProps={{ disableScrollLock: true }}
        >
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </Select>
      </Stack>

      {/* LineChart */}
      <LineChart
        dataset={dataset}
        xAxis={[{ dataKey: "x", scaleType: "point" }]}
        yAxis={[
          {
            valueFormatter: (value) => `$${value.toFixed(2)}`, // Format as currency
          },
        ]}
        series={[
          {
            curve: "linear",
            dataKey: "y1",
            label: "Sales",
            color: "#8884d8",
          },
          {
            curve: "linear",
            dataKey: "y2",
            label: "Expenses",
            color: "#aedbff",
          },
        ]}
        height={540}
        grid={{ vertical: true, horizontal: true }}
        // tooltip={{ trigger: "item" }}
      />
    </Stack>
  );
};

export default CampaignChart;
