"use client";

import React from "react";
import { Layout, Flex, Dropdown, Avatar, Skeleton } from "antd";
import styles from "./styles.module.scss";
import {
  UserOutlined,
  CommentOutlined,
  PoweroffOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useSession } from "next-auth/react";
import type { MenuProps } from "antd";
import { urls } from "@/consts";
import { useRouter } from "next/navigation";
import type { UserSession } from "@/types";
import Link from "next/link";

export function Header() {
  const { Header: HeaderAntd } = Layout;
  const { data: session } = useSession();
  const router = useRouter();

  const items: MenuProps["items"] = [
    {
      label: <Link href={urls.help}>Help / Feedback</Link>,
      key: "0",
      icon: <CommentOutlined />,
    },
    {
      label: <Link href={urls.documentation}>Documentation</Link>,
      icon: <InfoCircleOutlined />,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      key: "3",
      icon: <PoweroffOutlined />,
      onClick: async () => {
        router.push(urls.auth.signout);
      },
    },
  ];

  const user = session?.user as UserSession;

  return (
    <HeaderAntd className={styles.header}>
      <Flex style={{ width: "100%" }} justify="space-between" align="center">
        <div className={styles.welcome}>
          {user ? (
            <>
              Welcome,{" "}
              <span>
                {user.name} {user?.role ? `(${user?.role?.label})` : ""}
              </span>
            </>
          ) : (
            <Skeleton.Input
              className={styles.userSkeleton}
              active={true}
              size={"small"}
            />
          )}
        </div>

        <div className={styles.headerRight}>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              // src={`https://api.dicebear.com/7.x/miniavs/svg?seed=2`}
              style={{
                backgroundColor: "rgb(230, 244, 255)",
                color: " rgb(22, 119, 255)",
                cursor: "pointer",
              }}
              icon={
                <UserOutlined
                  style={{ fontSize: 22 }}
                  size={44}
                  color="black"
                />
              }
            />
          </Dropdown>
        </div>
      </Flex>
    </HeaderAntd>
  );
}
