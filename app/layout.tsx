import React from "react";
import { Inter } from "next/font/google";
import { Layout, Flex } from "antd";
import styles from "./page.module.scss";
import { Sidebar, Header, Content } from "@/c";
import StoreProvider from "@/libs/zustand/StoreProvider";
import { GlobalProvider } from "@/c";
import "@/styles/global.scss";
import "@/styles/customAntd.scss";

const inter = Inter({ subsets: ["latin"] });

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
            <GlobalProvider>
              <Layout>
                <Sidebar />
                <Layout>
                  <Header />
                  <Content className={styles.content}>{children}</Content>
                </Layout>
              </Layout>
            </GlobalProvider>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
