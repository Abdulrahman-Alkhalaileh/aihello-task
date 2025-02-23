import { Stack } from "@mui/material";
import { BasicNavItemType } from "../Navigation/BasicNav";
import ProfileView from "./Views/ProfileView";
import CampaignView from "./Views/CampaignView";
import AdGroupView from "./Views/AdGroupView";
import TargetingView from "./Views/TargetingView";

export const campaignNavItems: BasicNavItemType[] = [
  { label: "Profile", selected: true, alerts: 0, Component: ProfileView },
  { label: "Campaigns", selected: false, alerts: 120, Component: CampaignView },
  { label: "Ad Groups", selected: false, alerts: 12, Component: AdGroupView },
  { label: "Targeting", selected: false, alerts: 1, Component: TargetingView },
];

type MarketplaceData = {
  marketplace: string;
  shortName: string;
  autoPilot: number;
  dailyBudget: string;
  spend: string;
  sales: string;
  acos: string;
  units: number;
};

export const campaignsData: MarketplaceData[] = [
  {
    marketplace: "USA",
    shortName: "NaturalThings Main",
    autoPilot: 369,
    dailyBudget: "$60",
    spend: "$1,087.54 (+20.34%)",
    sales: "$1,087.54 (+20.34%)",
    acos: "70.32% (+20.34%)",
    units: 94,
  },
  {
    marketplace: "Canada",
    shortName: "NaturalThings",
    autoPilot: 74,
    dailyBudget: "$122",
    spend: "$1,087.54 (-20.34%)",
    sales: "$1,087.54 (-20.34%)",
    acos: "10.32% (-29.34%)",
    units: 65,
  },
  {
    marketplace: "Germany",
    shortName: "NaturalThings Europe",
    autoPilot: 0,
    dailyBudget: "$122",
    spend: "€1,087.54 (+20.34%)",
    sales: "€0",
    acos: "0%",
    units: 0,
  },
  {
    marketplace: "India",
    shortName: "Natural Things",
    autoPilot: 3,
    dailyBudget: "$60",
    spend: "₹0",
    sales: "₹0",
    acos: "0%",
    units: 0,
  },
  {
    marketplace: "Netherlands",
    shortName: "NaturalThings Europe",
    autoPilot: 0,
    dailyBudget: "$60",
    spend: "$0",
    sales: "$0",
    acos: "0%",
    units: 0,
  },
  {
    marketplace: "Germany",
    shortName: "Natural Things",
    autoPilot: 0,
    dailyBudget: "$60",
    spend: "$1,087.54 (+20.34%)",
    sales: "$0",
    acos: "0%",
    units: 0,
  },
  {
    marketplace: "Italy",
    shortName: "NaturalThings Main",
    autoPilot: 1,
    dailyBudget: "$60",
    spend: "€0",
    sales: "€0",
    acos: "0%",
    units: 0,
  },
];
