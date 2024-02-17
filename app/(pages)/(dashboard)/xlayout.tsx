import React from "react";
import { Layout } from "antd";
import styles from "./styles.module.scss";
import { Inter } from "next/font/google";
import "@/styles/global.scss";
import "@/styles/customAntd.scss";
import { Sidebar, Header, Content } from "@/c";
import { ClientAuthProvider } from "@/contexts";

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
            <Layout>
              <Sidebar />
              <Layout>
                <Header />
                <Content className={styles.content}>{children}</Content>
              </Layout>
            </Layout>
          </ClientAuthProvider>
        </main>
      </body>
    </html>
  );
}
