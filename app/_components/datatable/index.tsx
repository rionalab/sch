import React from "react";

interface Props<T> {
  rows: T[];
}

function DataTable<T>(props: Props<T>) {
  const { rows } = props;
  return (
    <div>
      <h1>table</h1>
      {JSON.stringify(rows, null, 2)}
    </div>
  );
}

export default DataTable;
