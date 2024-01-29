import React from "react";
import { getEmployee } from "./action";
import { type Employee } from "./type";
import Table from "./components/table/table";
import { tableData } from "@/libs/helpers/table";

async function Page() {
  const data = await getEmployee();

  return <Table rows={tableData<any>(data)} />;
}

export default Page;
