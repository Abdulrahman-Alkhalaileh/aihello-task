"use client";
import React, { Dispatch, SetStateAction, useMemo } from "react";
import { Box, Stack, StackProps } from "@mui/material";

export interface BasicNavItemType {
  label: string;
  selected: boolean;
  alerts: number;
  Component: React.ElementType;
}

export interface BasicNavProps extends StackProps {
  items: BasicNavItemType[];
  setItems: Dispatch<SetStateAction<BasicNavItemType[]>>;
}

const BasicNav: React.FC<BasicNavProps> = ({
  children,
  setItems,
  items,
  ...props
}) => {
  const SelectedView = useMemo(
    () => items.find((item) => item.selected)?.Component as React.ElementType,
    [items]
  );

  const handleNavItemChange = (selectedItem: BasicNavItemType) => {
    setItems((prev) =>
      prev.map((item) =>
        item.label === selectedItem.label
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  };

  return (
    <>
      <Stack
        direction="row"
        borderBottom={3}
        borderColor="border.main"
        width="100%"
        gap={2}
        {...props}
      >
        {items.map((item) => {
          return (
            <Stack
              key={item.label}
              p={3}
              direction="row"
              alignItems="center"
              gap={1.2}
              fontWeight={700}
              fontSize={16}
              onClick={() => handleNavItemChange(item)}
              sx={{
                color: item.selected ? "primary.main" : "text.secondary",
                cursor: "pointer",
                pointerEvents: item.selected ? "none" : "auto",
                position: "relative",
                "&:after": {
                  content: "''",
                  position: "absolute",
                  width: "100%",
                  height: item.selected ? 2 : 0,
                  bgcolor: "primary.main",
                  bottom: -2,
                  left: 0,
                  transition: "all ease 0.2s",
                },
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              {item.label}
              {item.alerts > 0 && (
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  py={0.5}
                  px={1}
                  bgcolor="error.main"
                  borderRadius={2}
                  fontSize={10}
                  color="common.white"
                >
                  {item.alerts}
                </Stack>
              )}
            </Stack>
          );
        })}
      </Stack>
      <Box py={2}>
        <SelectedView />
      </Box>
    </>
  );
};

export default BasicNav;
