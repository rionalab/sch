import React from "react";
import { index } from "./action";
import { Employee } from "./type";
import { DataTable } from "@/c";
import Table from "./c/table";
import { tableData } from "@/libs/helpers/table";

async function Page() {
  const data = await index();
  console.log(data);

  return (
    <div>
      <Table data={tableData<Employee>(data)} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Page;
