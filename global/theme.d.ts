import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    border: Partial<PaletteColor>;
  }

  interface PaletteOptions {
    border: Partial<PaletteColor>;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    border: true;
  }
}
