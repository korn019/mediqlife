import type { Metadata } from "next";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import theme from "./theme";
import "./globals.css";
import Header from "@/components/modules/layout/Header";

import { Noto_Sans_Thai } from "next/font/google";
import Footer from "@/components/modules/layout/Footer";

export const metadata: Metadata = {
  title: "MediQ - your Family Pharmacist",
  description:
    "เราเข้าใจว่าคุณมีหน้าที่ที่มากมายในชีวิต จนบางครั้งอาจลืมดูแลตัวเอง หรือคนที่คุณรัก",
};

const noto = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-noto",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`antialiased ${noto.className}`}>
        <MantineProvider theme={theme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
