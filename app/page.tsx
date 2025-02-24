import React from "react";
import CampaignWrapper from "@/components/Campaigns/CampaignWrapper";
import CampaignChart from "@/components/Campaigns/CampaignChart";
import { Stack } from "@mui/material";
import MetricCard from "@/components/Campaigns/MetricCard";
import { metricCardData } from "@/components/Campaigns/campaignData";

const Page = ({}) => {
  return (
    <Stack gap={2}>
      <CampaignWrapper
        bgcolor="background.paper"
        borderRadius={3}
        minHeight="60vh"
        px={2}
      />
      <Stack direction="row" flexWrap="wrap" gap={1} alignItems="center">
        {metricCardData.map((metric, index) => {
          const Icon = metric.icon;
          const { filled } = metric;
          return (
            <MetricCard
              key={index}
              minWidth={230}
              maxWidth={{ xs: 230, xxl: 240 }}
              flex={1}
              {...metric}
              icon={
                <Icon
                  fontSize="small"
                  sx={{ color: filled ? metric.chartColor : "common.white" }}
                />
              }
              bgcolor={filled ? metric.chartColor : "background.paper"}
              color={filled ? "white!important" : "auto!important"}
              chartColor={filled ? "white" : metric.chartColor}
            />
          );
        })}
      </Stack>
      <CampaignChart />
    </Stack>
  );
};

export default Page;
