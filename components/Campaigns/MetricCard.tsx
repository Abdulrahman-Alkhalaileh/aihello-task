"use client";
import React from "react";
import { Typography, Box, Stack, StackProps } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

interface MetricCardProps extends StackProps {
  icon: React.ReactNode;
  title: string;
  amount: string;
  percentage: number;
  chartData: { value: number }[];
  chartColor: string;
  filled?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  title,
  amount,
  percentage,
  chartData,
  chartColor,
  filled,
  ...props
}) => {
  // Prepare data for the LineChart
  const xAxisData = React.useMemo(
    () => chartData.map((_, index) => index),
    [chartData]
  );
  const yAxisData = React.useMemo(
    () => chartData.map((data) => data.value),
    [chartData]
  );

  // Generate a unique ID for the gradient based on the title
  const gradientId = `area-gradient-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <Stack
      bgcolor="background.paper"
      py={1}
      px={2}
      borderRadius={4}
      border={2}
      borderColor="border.main"
      maxHeight={140}
      {...props}
    >
      <Box display="flex" gap={2}>
        <Stack
          width={30}
          height={30}
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          bgcolor={chartColor}
          color="white"
          mt={0.5}
        >
          {icon}
        </Stack>
        <Stack flex={1} gap={0.5}>
          <Typography fontSize={17} fontWeight={700}>
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
          >
            <Typography fontSize={17} fontWeight={500}>
              {amount}
            </Typography>
            <Box
              display="flex"
              alignItems="end"
              fontSize={14}
              color={
                filled
                  ? "inherit"
                  : percentage > 0
                    ? "success.main"
                    : "error.main"
              }
            >
              <Typography fontSize="inherit">{percentage}%</Typography>
              {percentage > 0 ? "↑" : "↓"}
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box height={100}>
        <LineChart
          series={[
            {
              showMark: false,
              data: yAxisData,
              area: true, // Enable area fill
              curve: "natural", // Use a curved line
              color: chartColor, // Set line color
            },
          ]}
          xAxis={[{ data: xAxisData, scaleType: "point", disableLine: true }]}
          yAxis={[{ scaleType: "linear", disableLine: true }]}
          height={60}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          width={200}
          sx={{
            "& .MuiAreaElement-root": {
              fill: `url(#${gradientId})`, // Use unique gradient ID
            },
          }}
        >
          {/* Define gradient for area fill */}
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartColor} stopOpacity={0.8} />
              <stop offset="25%" stopColor={chartColor} stopOpacity={0.3} />
              <stop offset="70%" stopColor={chartColor} stopOpacity={0} />
              <stop offset="100%" stopColor={chartColor} stopOpacity={0} />
            </linearGradient>
          </defs>
        </LineChart>
      </Box>
    </Stack>
  );
};

export default MetricCard;
