"use client";
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export interface ControllerProps {
  selectedRows: number;
}

const Controller: React.FC<ControllerProps> = ({ selectedRows }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={3}
      py={2}
    >
      <Typography fontSize={20} fontWeight={500}>
        Profile
      </Typography>
      <Stack direction="row" alignItems="center" gap={3}>
        <Stack
          direction="row"
          alignItems="center"
          border={2}
          borderColor="border.main"
          borderRadius={2}
          fontSize={15}
          fontWeight={500}
          overflow="hidden"
        >
          <Button
            sx={{
              color: "text.primary",
              gap: 1.5,
              px: 2,
              py: 1,
              borderRadius: 0,
            }}
          >
            <WindowOutlinedIcon fontSize="small" />
            {selectedRows} Rows Selected
            <KeyboardArrowDownIcon fontSize="small" />
          </Button>
          <Button
            sx={{
              color: "text.primary",
              gap: 1.5,
              px: 2,
              py: 1,
              borderRadius: 0,
            }}
          >
            <PersonOutlineOutlinedIcon fontSize="small" />
            Active
            <KeyboardArrowDownIcon fontSize="small" />
          </Button>
        </Stack>
        <Button variant="contained">
          Actions <KeyboardArrowDownIcon fontSize="small" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Controller;
