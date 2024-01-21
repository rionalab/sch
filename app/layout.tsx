import React from "react";
import { Layout } from "antd";
import styles from "./page.module.scss";
import { Sidebar, Header, Content, ConfigProvider } from "@/c";
import StoreProvider from "@/libs/zustand/StoreProvider";
import { Inter } from "next/font/google";
import { theme } from "@/styles/antdThemeProvider";
import "@/styles/global.scss";
import "@/styles/customAntd.scss";
import { AntdProvider } from "./_contexts";

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
            <ConfigProvider theme={{ ...theme, cssVar: true }}>
              <AntdProvider>
                <Layout>
                  <Sidebar />
                  <Layout>
                    <Header />
                    <Content className={styles.content}>{children}</Content>
                  </Layout>
                </Layout>
              </AntdProvider>
            </ConfigProvider>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
