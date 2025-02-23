"use client";
import React, { useState } from "react";
import { Stack, StackProps } from "@mui/material";
import BasicNav, { BasicNavItemType } from "../Navigation/BasicNav";
import { campaignNavItems } from "./campaignData";

const CampaignWrapper: React.FC<StackProps> = ({ ...props }) => {
  const [navItems, setNavItems] =
    useState<BasicNavItemType[]>(campaignNavItems);

  return (
    <Stack {...props}>
      <BasicNav items={navItems} setItems={setNavItems} />
    </Stack>
  );
};

export default CampaignWrapper;
