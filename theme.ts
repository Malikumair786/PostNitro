"use client";

import { createTheme } from "@mantine/core";

const colors = {
  primary: '#087A68',
  secondary: '#f0a500',
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
