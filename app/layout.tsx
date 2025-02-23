import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { MuiThemeProvider } from "@/theme/Theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import SideBar from "@/components/Navigation/SideBar";

export const inter = Inter({
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AiHello",
  description: "Created by Abdulrahman Alkhalaileh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} style={{ background: "#F1F5F9" }}>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <SideBar>{children}</SideBar>
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
