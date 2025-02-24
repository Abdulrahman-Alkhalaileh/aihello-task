import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    border: Partial<PaletteColor>;
  }

  interface PaletteOptions {
    border: Partial<PaletteColor>;
  }

  interface BreakpointOverrides {
    xxl: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    border: true;
  }
}
