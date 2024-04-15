"use client";

import { TableAction, TableToolbar, Tag } from "@/c";
import { type TableActions } from "@/types";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React from "react";

interface AntdProps<T> extends TableProps<T> {}

type Columns = ColumnsType<Record<string, any>>;

interface Props<T> {
  rows: Array<Record<string, any>>;
  search?: boolean;
  download?: boolean;
  actions?: TableActions;
  actionsRender?: (text: string, record: Record<string, any>) => void;
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
    actionsRender,
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

  const tableColumns = [
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
  ];

  if (keyActions.length || actionsRender) {
    const actionColumn = {
      title: "Action",
      align: "right",
      fixed: "right",
      width: 130,
      render:
        actionsRender ??
        ((text, record) => (
          <TableAction<T> row={record as T} id={record.id} {...actions} />
        )),
    };

    // @ts-expect-error asd
    tableColumns.push(actionColumn);
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
        columns={tableColumns}
      />
    </>
  );
}
