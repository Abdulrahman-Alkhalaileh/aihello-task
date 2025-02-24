"use client";
import React from "react";
import { Button, IconButton, Stack, StackProps } from "@mui/material";
import UserMenu from "./UserMenu";
import LangAndAlerts from "./LangAndAlerts";
import RegionField from "./RegionField";
import Date from "./DateRange";
import AIHelloLogo from "../../SVG/AIHelloLogo";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

export interface HeaderProps extends StackProps {
  handleSideBarOpen: () => void;
  sideBarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  handleSideBarOpen,
  sideBarOpen,
  ...props
}) => {
  return (
    <>
      <Stack
        px={5}
        height={93}
        width="100%"
        bgcolor="background.paper"
        position="sticky"
        top={0}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        gap={4}
        borderBottom={2}
        borderColor="border.main"
        {...props}
      >
        <motion.div
          animate={{
            width: sideBarOpen ? 0 : "auto",
            opacity: sideBarOpen ? 0 : 1,
          }}
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <IconButton
              aria-label="open drawer"
              onClick={handleSideBarOpen}
              edge="start"
              sx={[sideBarOpen && { display: "none" }]}
            >
              <MenuIcon />
            </IconButton>
            <AIHelloLogo />
          </Stack>
        </motion.div>
        <Stack direction="row" alignItems="center" gap={4}>
          <Stack direction="row" alignItems="center" gap={3}>
            <Button
              variant="outlined"
              color="error"
              sx={{
                textTransform: "capitalize",
                fontWeight: 600,
                borderRadius: 2,
                fontSize: 14,
                height: 45,
                whiteSpace: "nowrap",
              }}
            >
              Get Specialist Help
            </Button>
            <RegionField />
            <Date />
          </Stack>
          <LangAndAlerts mr={2} />
          <UserMenu />
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
