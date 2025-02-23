"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Header from "./Header/Header";
import { Button, Divider, Stack, Typography } from "@mui/material";
import AIHelloLogo from "../SVG/AIHelloLogo";
import { navItems } from "./navItems";
import { SvgIconComponent } from "@mui/icons-material";

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  background:
    "linear-gradient(135deg, rgba(255,247,242,1) 0%, rgba(255,243,236,1) 15%, rgba(255,255,255,1) 27%, rgba(255,255,255,1) 57%, rgba(240,255,237,1) 79%, rgba(218,255,212,1) 100%)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  border: "none",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Header
          handleSideBarOpen={handleDrawerOpen}
          sideBarOpen={open}
          pl={3}
        />
      </AppBar>
      <Button
        onClick={handleDrawerClose}
        size="small"
        color="error"
        variant="contained"
        sx={{
          position: "absolute",
          transition: "all ease 0.3s",
          zIndex: 10000,
          left: open ? drawerWidth - 15 : 0,
          opacity: open ? 1 : 0,
          top: 30,
          borderRadius: 2,
          p: 0,
          px: 0,
          minWidth: 30,
          minHeight: 30,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </Button>
      <Drawer variant="permanent" open={open}>
        <Stack direction="row" height={93} alignItems="center" pl={3}>
          <AIHelloLogo />
        </Stack>
        <Divider
          variant="middle"
          sx={{ mx: 5, border: 1, borderColor: "action.hover" }}
        />
        <List sx={{ p: open ? 3 : 0 }}>
          <Typography
            variant="caption"
            fontSize={10}
            color="text.secondary"
            pl={1.5}
            sx={{ opacity: open ? 1 : 0 }}
          >
            MENU
          </Typography>
          {navItems.map((item) => {
            const Icon = item.Icon as SvgIconComponent;
            const isSelected = item.label === "Campaigns";
            return (
              <ListItem
                key={item.label}
                disablePadding
                sx={{
                  display: "block",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 43,
                    px: open ? 1.5 : 2.5,
                    borderRadius: open ? 2 : 0,
                    justifyContent: open ? "initial" : "center",
                    "& .Mui-selected": {
                      bgcolor: "background.paper",
                    },
                  }}
                  selected={isSelected}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      mr: open ? 2 : "auto",
                    }}
                  >
                    <Icon
                      sx={{
                        color: isSelected ? "text.primary" : "text.secondary",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: isSelected ? "text.primary" : "text.secondary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pt: 13, px: 2, pb: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default SideBar;
