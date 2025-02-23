"use client";
import * as React from "react";
import DateProvider from "../Providers/DateProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import { Button, Divider, Menu, Stack, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { format } from "date-fns";

const today = new Date();

export default function DateRange() {
  const [value, setValue] = React.useState<Date>(today);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          bgcolor: "background.default",
          color: "text.secondary",
          height: 45,
          border: 1,
          borderColor: "border.main",
          borderRadius: 2,
          px: 1,
          textTransform: "capitalize",
          gap: 1,
        }}
      >
        <Typography fontSize={14} fontWeight={500}>
          {format(value, "MMM dd, yyyy")} - {format(value, "MMM dd, yyyy")}
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ border: 1, borderColor: "text.secondary" }}
        />
        <CalendarTodayIcon sx={{width:15}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <DateProvider>
          <DateCalendar
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              handleClose();
            }}
          />
        </DateProvider>
      </Menu>
    </Stack>
  );
}
