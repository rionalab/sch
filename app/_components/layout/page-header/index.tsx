"use client";

import React from "react";
import { Flex, Typography, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ModuleName } from "@/types";
import { routes } from "@/configs";

interface Props {
  id: ModuleName;
}

export function PageHeader({ id }: Props) {
  const { icon, title, breadcrumb = [] } = routes[id];
  const pathname = usePathname();

  let action = "";

  if (pathname.includes("create")) {
    action = " . (Create)";
  } else if (pathname.includes("edit")) {
    action = " . (Edit)";
  }

  const breadcrumbProps = breadcrumb.map((b) => {
    const title = (
      <>
        {b.icon && <>{b.icon}&nbsp;</>}
        <span>{b.title}</span>
      </>
    );

    return {
      title: !b.url ? title : <Link href={b.url}>{title}</Link>,
    };
  });

  return (
    <>
      <Flex style={{ marginBottom: 16 }} align="end" justify="space-between">
        <div>
          <Typography.Title
            className="textCapitalize"
            level={2}
            style={{ margin: 0 }}
          >
            {icon && <>{icon} &nbsp;</>}
            {title}
            <span style={{ fontWeight: 500, opacity: 0.5, fontSize: 11 }}>
              {action}
            </span>
          </Typography.Title>
        </div>
        <Breadcrumb
          items={[
            {
              title: (
                <>
                  <Link href="/">
                    <HomeOutlined />
                    &nbsp;
                    <span>Dashboard</span>
                  </Link>
                </>
              ),
            },
            ...breadcrumbProps,
          ]}
        />
      </Flex>
      <hr style={{ border: 0, borderTop: "1px solid #eee" }} />
      <br />
      <br />
    </>
  );
}
