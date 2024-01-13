import React from "react";
import { Breadcrumb as BreadcrumbType } from "@/types/component";
import { Flex, Typography, Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

interface Props {
  title?: string;
  icon?: React.ReactNode;
  breadcrumb?: BreadcrumbType[];
}

function PageHeader(props: Props) {
  const { icon, title, breadcrumb = [] } = props;

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
    <Flex style={{ marginBottom: 24 }} align="center" justify="space-between">
      <div>
        <Typography.Title level={2}>
          {icon && <>{icon} &nbsp;</>}
          {title}
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
  );
}

export default PageHeader;
