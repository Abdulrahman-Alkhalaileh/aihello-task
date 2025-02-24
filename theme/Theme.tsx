"use client";
import React from "react";
import { ThemeProviderProps } from "@emotion/react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#4266E9" },
    background: { default: "#F1F5F9" },
    border: { main: "#E2E8F0" },
    text: { secondary: "#64748B" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          fontFamily: "inherit",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          borderRadius: 6,
        },
      },
    },
  },
});

export const MuiThemeProvider: React.FC<Partial<ThemeProviderProps>> = ({
  children,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme} {...props}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
