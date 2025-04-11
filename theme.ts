"use client";

import { createTheme } from "@mantine/core";

const colors = {
  primary: '#087A68',
  secondary: '#e7e3e3',
  background: '#f4f7fa',
  text: '#333333',
};

export const theme = createTheme({
  colors: {
    primary: [colors.primary, colors.primary, colors.primary,colors.primary,colors.primary,colors.primary,colors.primary,colors.primary,colors.primary,colors.primary],
    secondary: [colors.secondary, colors.secondary, colors.secondary, colors.secondary, colors.secondary, colors.secondary, colors.secondary, colors.secondary, colors.secondary, colors.secondary],
  },
  fontFamily: "'Inter', 'Inter Fallback', sans-serif",
  primaryColor: 'primary',
});
