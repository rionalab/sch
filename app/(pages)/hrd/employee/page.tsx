import React from "react";
import { index } from "./action";
import { Employee } from "./type";
import Table from "./components/table";
import { tableData } from "@/libs/helpers/table";

async function Page() {
  const data = await index();

  return <Table rows={tableData<Employee>(data)} />;
}

export default Page;
