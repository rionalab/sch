import React from "react";
import { getEmployee } from "./action";
import { Employee } from "./type";
import Table from "./components/table";
import { tableData } from "@/libs/helpers/table";

async function Page() {
  const data = await getEmployee();

  return <Table rows={tableData<Employee>(data)} />;
}

export default Page;
