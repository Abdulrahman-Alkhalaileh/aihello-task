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

// State for the selected view

// Sample dataset for weekly view
export const weeklyDataset = [
  { x: "Mon", y1: 10.0, y2: 5.0 },
  { x: "Tue", y1: 20.0, y2: 15.0 },
  { x: "Wed", y1: 40.0, y2: 25.0 },
  { x: "Thu", y1: 30.0, y2: 35.0 },
  { x: "Fri", y1: 50.0, y2: 45.0 },
  { x: "Sat", y1: 60.0, y2: 55.0 },
  { x: "Sun", y1: 80.0, y2: 65.0 },
];

// Sample dataset for monthly view
export const monthlyDataset = [
  { x: "Week 1", y1: 100.0, y2: 80.0 },
  { x: "Week 2", y1: 150.0, y2: 120.0 },
  { x: "Week 3", y1: 200.0, y2: 160.0 },
  { x: "Week 4", y1: 250.0, y2: 200.0 },
];

// Sample dataset for yearly view
export const yearlyDataset = [
  { x: "Jan", y1: 1000.0, y2: 800.0 },
  { x: "Feb", y1: 1200.0, y2: 900.0 },
  { x: "Mar", y1: 1400.0, y2: 1000.0 },
  { x: "Apr", y1: 1600.0, y2: 1100.0 },
  { x: "May", y1: 1800.0, y2: 1200.0 },
  { x: "Jun", y1: 2000.0, y2: 1300.0 },
  { x: "Jul", y1: 2200.0, y2: 1400.0 },
  { x: "Aug", y1: 2400.0, y2: 1500.0 },
  { x: "Sep", y1: 2600.0, y2: 1600.0 },
  { x: "Oct", y1: 2800.0, y2: 1700.0 },
  { x: "Nov", y1: 3000.0, y2: 1800.0 },
  { x: "Dec", y1: 3200.0, y2: 1900.0 },
];

import {
  AttachMoney,
  FontDownload,
  RemoveRedEye,
  AdsClick,
  StarHalf,
  ShowChart,
  LocalAtm,
  DescriptionOutlined,
  SpaceDashboardOutlined,
  Assessment,
  SmartToy,
  Layers,
  ShoppingCart,
  RotateLeft,
  BarChart,
  ReceiptLong,
} from "@mui/icons-material";

export interface MetricDataType {
  icon: React.ElementType;
  title: string;
  amount: string;
  percentage: number;
  chartData: { value: number }[];
  chartColor: string;
  filled?: boolean;
}

export const metricCardData: MetricDataType[] = [
  {
    icon: AttachMoney,
    title: "SPEND",
    amount: "$1,087.54",
    percentage: -4.66,
    chartData: [
      { value: 300 },
      { value: 2000 },
      { value: 1100 },
      { value: 2500 },
      { value: 3000 },
      { value: 3500 },
      { value: 1500 },
      { value: 3900 },
      { value: 900 },
      { value: 1100 },
    ],
    chartColor: "#FFC246",
  },
  {
    icon: FontDownload,
    title: "AD SALES",
    amount: "$1,087.54",
    percentage: 10.45,
    chartData: [
      { value: 300 },
      { value: 2000 },
      { value: 1100 },
      { value: 2500 },
      { value: 3000 },
      { value: 3500 },
      { value: 1500 },
      { value: 3900 },
      { value: 2000 },
      { value: 3100 },
    ],
    chartColor: "#4266E9",
    filled: true,
  },
  {
    icon: RemoveRedEye,
    title: "IMPRESSIONS",
    amount: "4,409.1",
    percentage: -10.0,
    chartData: [
      { value: 3000 },
      { value: 3300 },
      { value: 3500 },
      { value: 3000 },
      { value: 3500 },
      { value: 2500 },
      { value: 3000 },
      { value: 3500 },
      { value: 2500 },
      { value: 3900 },
      { value: 2000 },
      { value: 0 },
    ],
    chartColor: "#07BEAA",
  },
  {
    icon: AdsClick,
    title: "CLICKS",
    amount: "1,082.54",
    percentage: -0.66,
    chartData: [
      { value: 200 },
      { value: 400 },
      { value: 600 },
      { value: 3000 },
      { value: 1000 },
      { value: 1200 },
      { value: 1400 },
      { value: 1600 },
      { value: 3800 },
      { value: 2000 },
    ],
    chartColor: "#58C4FF",
    filled:true,
  },
  {
    icon: StarHalf,
    title: "CTR",
    amount: "0.8%",
    percentage: 6.4,
    chartData: [
      { value: 0.5 },
      { value: 2.6 },
      { value: 1.7 },
      { value: 0.8 },
      { value: 5.9 },
      { value: 4.0 },
      { value: 1.1 },
      { value: 7.2 },
      { value: 1.3 },
      { value: 4.4 },
    ],
    chartColor: "#FF7F0F",
  },
  {
    icon: ShowChart,
    title: "CVR",
    amount: "4,409.1",
    percentage: -0.49,
    chartData: [
      { value: 300 },
      { value: 100 },
      { value: 300 },
      { value: 400 },
      { value: 500 },
      { value: 200 },
      { value: 700 },
      { value: 800 },
      { value: 900 },
      { value: 100 },
    ],
    chartColor: "#9669BE",
  },
  {
    icon: LocalAtm,
    title: "CPC",
    amount: "$0.74",
    percentage: -10.0,
    chartData: [
      { value: 5.5 },
      { value: 3.6 },
      { value: 6.7 },
      { value: 2.8 },
      { value: 15.9 },
      { value: 17.0 },
      { value: 18.1 },
      { value: 10.2 },
      { value: 5.3 },
      { value: 1.4 },
    ],
    chartColor: "#005AFF",
  },
  {
    icon: DescriptionOutlined,
    title: "ACoS",
    amount: "70.23%",
    percentage: 0.66,
    chartData: [
      { value: 10 },
      { value: 25 },
      { value: 100 },
      { value: 120 },
      { value: 70 },
      { value: 85 },
      { value: 30 },
      { value: 45 },
      { value: 100 },
      { value: 105 },
    ],
    chartColor: "#8C564B",
  },
  {
    icon: SpaceDashboardOutlined,
    title: "EPS",
    amount: "$1.54",
    percentage: 10.45,
    chartData: [
      { value: 1.0 },
      { value: 20.1 },
      { value: 10.2 },
      { value: 9.3 },
      { value: 20.4 },
      { value: 10.5 },
      { value: 15.6 },
      { value: 40.7 },
      { value: 20.8 },
      { value: 30.9 },
    ],
    chartColor: "#E377C2",
  },
  {
    icon: Assessment,
    title: "ORGANIC SALES",
    amount: "$1,087.54",
    percentage: 10.0,
    chartData: [
      { value: 500 },
      { value: 1000 },
      { value: 3500 },
      { value: 2000 },
      { value: 1500 },
      { value: 800 },
      { value: 3500 },
      { value: 4000 },
      { value: 5000 },
      { value: 4500 },
      { value: 700 },
      { value: 5000 },
    ],
    chartColor: "#7F7F7F",
  },
  {
    icon: SmartToy,
    title: "SESSIONS",
    amount: "2,659",
    percentage: -0.66,
    chartData: [
      { value: 4000 },
      { value: 2500 },
      { value: 5000 },
      { value: 2500 },
      { value: 3000 },
      { value: 3500 },
      { value: 500 },
      { value: 700 },
      { value: 1000 },
      { value: 500 },
    ],
    chartColor: "#BCBD21",
  },
  {
    icon: Layers,
    title: "PAGE VIEWS",
    amount: "3,544",
    percentage: 0.66,
    chartData: [
      { value: 500 },
      { value: 1000 },
      { value: 3500 },
      { value: 2000 },
      { value: 1500 },
      { value: 800 },
      { value: 3500 },
      { value: 4000 },
      { value: 5000 },
      { value: 4500 },
      { value: 700 },
      { value: 5000 },
    ],
    chartColor: "#17BECF",
  },
  {
    icon: ShoppingCart,
    title: "BUYBOX %",
    amount: "88.78%",
    percentage: 5.44,
    chartData: [
      { value: 500 },
      { value: 1000 },
      { value: 1500 },
      { value: 2000 },
      { value: 2500 },
      { value: 3000 },
      { value: 3500 },
      { value: 4000 },
      { value: 4500 },
      { value: 5000 },
    ],
    chartColor: "#558564",
  },
  {
    icon: RotateLeft,
    title: "UNIT SESSION %",
    amount: "5.44%",
    percentage: -0.05,
    chartData: [
      { value: 200 },
      { value: 180 },
      { value: 160 },
      { value: 150 },
      { value: 140 },
      { value: 135 },
      { value: 120 },
      { value: 115 },
      { value: 100 },
      { value: 95 },
    ],
    chartColor: "#FFB6C2",
  },
  {
    icon: BarChart,
    title: "TOTAL SALES",
    amount: "$1,087.54",
    percentage: -10.0,
    chartData: [
      { value: 200 },
      { value: 180 },
      { value: 160 },
      { value: 150 },
      { value: 140 },
      { value: 135 },
      { value: 120 },
      { value: 115 },
      { value: 100 },
      { value: 95 },
    ],
    chartColor: "#FFD700",
  },
  {
    icon: ReceiptLong,
    title: "TOTAL ACoS",
    amount: "38.17%",
    percentage: -0.66,
    chartData: [
      { value: 200 },
      { value: 180 },
      { value: 160 },
      { value: 150 },
      { value: 140 },
      { value: 135 },
      { value: 120 },
      { value: 115 },
      { value: 100 },
      { value: 95 },
    ],
    chartColor: "#D2691F",
  },
];
