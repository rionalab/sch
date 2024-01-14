import React from "react";
import { Button, Input, Tooltip, Flex, Space } from "antd";
import {
  DownloadOutlined,
  FilterOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { urls } from "@/consts/urls";

interface Props {
  create: boolean;
  filter: boolean;
  search: boolean;
  download: boolean;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TableToolbar(props: Props) {
  const { create, handleSearch, download, search, filter } = props;
  const router = useRouter();

  const handleCreate = () => {
    console.log(111);
    // redirect(urls.hrd.employee.create);
    router.push(urls.hrd.employee.create);
    // redirect("/");
    // router.push("create");
  };

  return (
    <Flex justify="space-between" align="center" style={{ marginBottom: 8 }}>
      <div>
        {search && (
          <Input
            placeholder="Search"
            onChange={handleSearch}
            suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
          />
        )}
      </div>

      <Space>
        {create && (
          <Button onClick={handleCreate} icon={<PlusOutlined />}>
            {" "}
            Create
          </Button>
        )}

        {download && (
          <Tooltip title="Download">
            <Button icon={<DownloadOutlined />} />
          </Tooltip>
        )}

        {filter && (
          <Tooltip title="Filter">
            <Button icon={<FilterOutlined />} />
          </Tooltip>
        )}
      </Space>
    </Flex>
  );
}

export default TableToolbar;
