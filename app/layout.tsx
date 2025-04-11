import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import ReduxProvider from "../redux/provider";
import HeaderMenu from "../components/Header/HeaderMenu";

export const metadata = {
  title: "PostNitro: Free AI Carousel Generator",
  description: "AI-Powered Carousel Generator for Instagram, LinkedIn & More",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ReduxProvider>
          <MantineProvider theme={theme}>
            <HeaderMenu/>
            {children}
            </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
