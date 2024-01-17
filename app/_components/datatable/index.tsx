"use client";

import React, { useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { TableToolbar } from "@/c";

interface AntdProps<T> extends TableProps<T> {}

interface Props<T> {
  rows: Record<string, any>[];
  search?: boolean;
  download?: boolean;
  antdProps?: AntdProps<T>;
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
    antdProps = {},
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
        {...(antdProps as TableProps<Record<string, any>>)}
        dataSource={rows}
        size="small"
        columns={columns}
      />
    </>
  );
}

export default DataTable;
