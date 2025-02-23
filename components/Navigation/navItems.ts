import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import DeveloperBoardOutlinedIcon from "@mui/icons-material/DeveloperBoardOutlined";

export interface NavItemType {
  label: string;
  Icon: React.ElementType | null;
}

export const navItems: NavItemType[] = [
  { label: "Dashboard", Icon: SpeedOutlinedIcon },
  { label: "Campaigns", Icon: LeaderboardOutlinedIcon },
  { label: "Day Parting", Icon: AccessTimeOutlinedIcon },
  { label: "Targeting", Icon: AdsClickOutlinedIcon },
  { label: "Search Term", Icon: SearchOutlinedIcon },
  { label: "Automated Messaging", Icon: RateReviewOutlinedIcon },
  { label: "Research", Icon: LibraryBooksOutlinedIcon },
  { label: "Bulk Operation", Icon: DeveloperBoardOutlinedIcon },
  { label: "Settings", Icon: SettingsOutlinedIcon },
];
