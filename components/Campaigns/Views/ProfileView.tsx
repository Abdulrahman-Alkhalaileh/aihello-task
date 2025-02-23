"use client";
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface ProfileViewProps {}

const ProfileView: React.FC<ProfileViewProps> = ({}) => {
  return (
    <Stack border={1} borderColor="border.main" borderRadius={2}>
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
        <Stack direction="row" alignItems='center' gap={2}>
          <Button variant="contained">
            Actions <KeyboardArrowDownIcon fontSize="small" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileView;
