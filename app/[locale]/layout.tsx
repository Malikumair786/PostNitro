import "@mantine/core/styles.css";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../../theme";
import ReduxProvider from "../../redux/provider";
import HeaderMenu from "../../components/Header/HeaderMenu";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';

export const metadata = {
  title: "PostNitro: Free AI Carousel Generator",
  description: "AI-Powered Carousel Generator for Instagram, LinkedIn & More",
};

export default async function RootLayout({children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} {...mantineHtmlProps}>
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
            <NextIntlClientProvider locale={locale} messages={messages}>
              <HeaderMenu />
              {children}
            </NextIntlClientProvider>
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
