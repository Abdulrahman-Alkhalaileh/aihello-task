import { Stack } from "@mui/material";
import { BasicNavItemType } from "../Navigation/BasicNav";
import ProfileView from "./Views/Profile/ProfileView";
import CampaignView from "./Views/CampaignView";
import AdGroupView from "./Views/AdGroupView";
import TargetingView from "./Views/TargetingView";

export const campaignNavItems: BasicNavItemType[] = [
  { label: "Profile", selected: true, alerts: 0, Component: ProfileView },
  { label: "Campaigns", selected: false, alerts: 120, Component: CampaignView },
  { label: "Ad Groups", selected: false, alerts: 12, Component: AdGroupView },
  { label: "Targeting", selected: false, alerts: 1, Component: TargetingView },
];

export interface AmountDetails {
  amount: number;
  currency: string;
  change: number;
}

export interface MarketplaceData {
  id: number;
  marketplace: string;
  shortName: string;
  autoPilot: number;
  dailyBudget: string;
  spend: AmountDetails;
  sales: AmountDetails;
  acos: AmountDetails;
  units: AmountDetails;
}

export const profileData: MarketplaceData[] = [
  {
    id: 1,
    marketplace: "USA",
    shortName: "NaturalThings Main",
    autoPilot: 369,
    dailyBudget: "$60",
    spend: {
      amount: 1087.54,
      currency: "$",
      change: 20.34,
    },
    sales: {
      amount: 1087.54,
      currency: "$",
      change: 20.34,
    },
    acos: {
      amount: 70.32,
      currency: "%",
      change: 20.34,
    },
    units: {
      amount: 94,
      currency: "",
      change: -20.34,
    },
  },
  {
    id: 2,
    marketplace: "Canada",
    shortName: "NaturalThings",
    autoPilot: 74,
    dailyBudget: "$122",
    spend: {
      amount: 1087.54,
      currency: "$",
      change: -20.34,
    },
    sales: {
      amount: 1087.54,
      currency: "$",
      change: -20.34,
    },
    acos: {
      amount: 10.32,
      currency: "%",
      change: -20.34,
    },
    units: {
      amount: 65,
      currency: "",
      change: 29.34,
    },
  },
  {
    id: 3,
    marketplace: "Germany",
    shortName: "NaturalThings Europe",
    autoPilot: 0,
    dailyBudget: "$122",
    spend: {
      amount: 1087.54,
      currency: "€",
      change: 20.34,
    },
    sales: { amount: 0, currency: "€", change: 0 },
    acos: { amount: 0, currency: "%", change: 0 },
    units: {
      amount: 75,
      currency: "",
      change: 55.34,
    },
  },
  {
    id: 4,
    marketplace: "India",
    shortName: "Natural Things",
    autoPilot: 3,
    dailyBudget: "$60",
    spend: { amount: 0, currency: "₹", change: 0 },
    sales: { amount: 0, currency: "₹", change: 0 },
    acos: { amount: 0, currency: "%", change: 0 },
    units: {
      amount: 0,
      currency: "",
      change: 0,
    },
  },
  {
    id: 5,
    marketplace: "Netherlands",
    shortName: "NaturalThings Europe",
    autoPilot: 0,
    dailyBudget: "$60",
    spend: { amount: 0, currency: "$", change: 0 },
    sales: { amount: 0, currency: "$", change: 0 },
    acos: { amount: 0, currency: "%", change: 0 },
    units: {
      amount: 0,
      currency: "",
      change: 0,
    },
  },
  {
    id: 6,
    marketplace: "Germany",
    shortName: "Natural Things",
    autoPilot: 0,
    dailyBudget: "$60",
    spend: {
      amount: 1087.54,
      currency: "$",
      change: 20.34,
    },
    sales: { amount: 0, currency: "$", change: 0 },
    acos: { amount: 0, currency: "%", change: 0 },
    units: {
      amount: 0,
      currency: "",
      change: 0,
    },
  },
  {
    id: 7,
    marketplace: "Italy",
    shortName: "NaturalThings Main",
    autoPilot: 1,
    dailyBudget: "$60",
    spend: { amount: 0, currency: "€", change: 0 },
    sales: { amount: 0, currency: "€", change: 0 },
    acos: { amount: 0, currency: "%", change: 0 },
    units: {
      amount: 0,
      currency: "",
      change: 0,
    },
  },
  {
    id: 8,
    marketplace: "France",
    shortName: "NaturalThings EU",
    autoPilot: 48,
    dailyBudget: "$100",
    spend: {
      amount: 520.76,
      currency: "EUR",
      change: 25.43,
    },
    sales: {
      amount: 840.23,
      currency: "EUR",
      change: 30.87,
    },
    acos: { amount: 28.98, currency: "%", change: 4.76 },
    units: {
      amount: 0,
      currency: "",
      change: 0,
    },
  },
  {
    id: 9,
    marketplace: "UK",
    shortName: "NaturalThings UK",
    autoPilot: 112,
    dailyBudget: "$150",
    spend: {
      amount: 1321.65,
      currency: "GBP",
      change: 18.54,
    },
    sales: {
      amount: 2156.45,
      currency: "GBP",
      change: 42.31,
    },
    acos: {
      amount: 61.23,
      currency: "%",
      change: 9.76,
    },
    units: {
      amount: 123,
      currency: "",
      change: 1.98,
    },
  },
  {
    id: 10,
    marketplace: "Australia",
    shortName: "NaturalThings AU",
    autoPilot: 92,
    dailyBudget: "$90",
    spend: {
      amount: 789.34,
      currency: "AUD",
      change: -10.12,
    },
    sales: {
      amount: 1254.89,
      currency: "AUD",
      change: 15.78,
    },
    acos: {
      amount: 45.67,
      currency: "%",
      change: -8.98,
    },
    units: {
      amount: 95,
      currency: "",
      change: 8.98,
    },
  },
  {
    id: 11,
    marketplace: "Japan",
    shortName: "NaturalThings Japan",
    autoPilot: 55,
    dailyBudget: "$80",
    spend: {
      amount: 97540,
      currency: "JPY",
      change: 18.21,
    },
    sales: {
      amount: 135620,
      currency: "JPY",
      change: 25.47,
    },
    acos: {
      amount: 45.67,
      currency: "%",
      change: -8.98,
    },
    units: {
      amount: 83,
      currency: "",
      change: -8.98,
    },
  },
];
