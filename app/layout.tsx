import React from "react";
import { ConfigProvider } from "antd";
import StoreProvider from "@/libs/zustand/StoreProvider";
import { Inter } from "next/font/google";
import { theme } from "@/styles/antdThemeProvider";
import "@/styles/global.scss";
import "@/styles/customAntd.scss";
import { AntdProvider } from "./_contexts";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: inter.style.fontFamily,
        }}
      >
        <main>
          <StoreProvider>
            <AntdRegistry>
              <ConfigProvider theme={{ ...theme, cssVar: true }}>
                <AntdProvider>{children}</AntdProvider>
              </ConfigProvider>
            </AntdRegistry>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
