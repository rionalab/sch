"use client";

import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { TableAction, TableToolbar, Tag } from "@/c";
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
  let hasActive = false;

  if (rows[0]) {
    hasActive = "active" in rows?.[0];
  }

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
        className="customTbl"
        footer={(currentPageData) => {
          return (
            currentPageData.length > 0 && <span>Total: {rows.length} rows</span>
          );
        }}
        columns={[
          ...finalColumns,

          // * ACTIVE
          ...(hasActive
            ? [
                {
                  title: "Active",
                  dataIndex: "active",
                  render: (v: boolean) => {
                    return (
                      <Tag
                        label={v ? "Active" : "Inactive"}
                        theme={v ? "green" : "red"}
                      />
                    );
                  },
                },
              ]
            : []),

          // * ACTIONS
          keyActions.length
            ? {
                title: "Action",
                align: "center",
                fixed: "right",
                width: 130,
                render: (a, b) => (
                  <TableAction<T> row={b as T} id={b.id} {...actions} />
                ),
              }
            : {},
        ]}
      />
    </>
  );
}
