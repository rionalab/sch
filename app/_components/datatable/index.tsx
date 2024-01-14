"use client";

import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TableToolbar } from "@/c";

interface Props<T> {
  rows: Record<string, any>[];
  search?: boolean;
  download?: boolean;
  filter?: boolean;
  create?: boolean;
  columns: ColumnsType<Record<string, any>>;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DataTable<T>(props: Props<T>) {
  const {
    rows = [],
    search = true,
    filter = false,
    create = true,
    columns,
    handleSearch,
    download = false,
  } = props;

  return (
    <>
      <TableToolbar
        download={download}
        search={search}
        handleSearch={handleSearch}
        create={create}
        filter={filter}
      />

      <Table
        dataSource={rows}
        size="small"
        columns={columns}
        scroll={{ x: 1600, y: 555 }}
      />
    </>
  );
}

export default DataTable;
