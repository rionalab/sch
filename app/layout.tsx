import React from "react";
import { Layout, Flex } from "antd";
import styles from "./page.module.scss";
import { Sidebar, Header, Content, ConfigProvider } from "@/c";
import StoreProvider from "@/libs/zustand/StoreProvider";
import { GlobalProvider } from "@/c";
import { Inter } from "next/font/google";
import { theme } from "@/styles/antdThemeProvider";
import "@/styles/global.scss";
import "@/styles/customAntd.scss";

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
            <ConfigProvider theme={theme}>
              <GlobalProvider>
                <Layout>
                  <Sidebar />
                  <Layout>
                    <Header />
                    <Content className={styles.content}>{children}</Content>
                  </Layout>
                </Layout>
              </GlobalProvider>
            </ConfigProvider>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
