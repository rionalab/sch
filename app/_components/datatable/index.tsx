"use client";

import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { TableAction, TableToolbar } from "@/c";
import { type TableActions } from "@/types";

interface AntdProps<T> extends TableProps<T> {}

type Columns = ColumnsType<Record<string, any>>;

interface Props<T> {
  rows: Array<Record<string, any>>;
  search?: boolean;
  download?: boolean;
  actions?: TableActions;
  antdProps?: AntdProps<T>;
  filter?: boolean;
  create?: boolean;
  columns: Columns;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DataTable<T>(props: Props<T>) {
  const {
    rows = [],
    search = true,
    filter = false,
    create = true,
    columns,
    antdProps = {},
    handleSearch,
    download = false,
    actions = {},
  } = props;

  const finalColumns = columns;
  const keyActions = Object.keys(actions);

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
        columns={[
          ...finalColumns,
          keyActions.length
            ? {
                title: "Action",
                align: "center",
                fixed: "right",
                width: 130,
                render: (a, b) => <TableAction id={b.id} {...actions} />,
              }
            : {},
        ]}
      />
    </>
  );
}
