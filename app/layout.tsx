import React from "react";
import { ConfigProvider, Layout } from "antd";
import styles from "./page.module.scss";
import StoreProvider from "@/libs/zustand/StoreProvider";
import { Inter } from "next/font/google";
import { theme } from "@/styles/antdThemeProvider";
import "@/styles/global.scss";
import "@/styles/customAntd.scss";
import { AntdProvider } from "./_contexts";
import { Sidebar, Header, Content } from "@/c";
import ClientAuthProvider from "./_contexts/clientAuth";

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
          <ClientAuthProvider>
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
          </ClientAuthProvider>
        </main>
      </body>
    </html>
  );
}
