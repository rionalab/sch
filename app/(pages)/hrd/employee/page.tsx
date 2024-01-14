import React from "react";
import { index } from "./action";
import { Employee } from "./type";
import { DataTable } from "@/c";
import Table from "./components/table";
import { tableData } from "@/libs/helpers/table";

async function Page() {
  const data = await index();

  return (
    <div>
      <Table rows={tableData<Employee>(data)} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Page;
