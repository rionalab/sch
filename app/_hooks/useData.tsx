import { useEffect, useState } from "react";
import type { ModuleName } from "@/types";
import { wait } from "@/libs/helpers";
import * as uom from "@/master/uom/action";
import * as department from "@/master/department/action";
import * as role from "@/superadmin/role/action";
import * as inventory from "@/master/inventory/action";

interface Result {
  uom?: any[];
  role?: any[];
  department?: any[];
  inventory?: any[];
}

function useData(dataType: ModuleName[]) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Result>({});
  const fetchDatas = async () => {
    const result: Result = {};

    if (dataType.includes("uom")) {
      result.uom = await uom.index();
    }

    if (dataType.includes("department")) {
      result.department = await department.index();
    }

    if (dataType.includes("role")) {
      result.role = await role.index();
    }

    if (dataType.includes("inventory")) {
      result.inventory = await inventory.index();
    }

    await wait();

    setLoading(false);

    setData(result);
  };

  useEffect(() => {
    void fetchDatas();
  }, []);

  return { data, loading };
}

export default useData;
