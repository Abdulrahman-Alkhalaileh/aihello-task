"use client";
import React from "react";
import { ThemeProviderProps } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {main: '#4266E9'},
    background: { default: "#F1F5F9" },
    border: { main: "#E2E8F0" },
    text: { secondary: "#64748B" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          fontFamily: 'inherit',
          textTransform: 'capitalize',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
      {children}
    </ThemeProvider>
  );
};
