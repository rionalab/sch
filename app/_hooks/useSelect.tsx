import { useEffect, useState } from "react";
import * as employee from "@/pages/(dashboard)/hrd/employee/action";
import * as department from "@/pages/(dashboard)/master/department/action";
import * as uom from "@/pages/(dashboard)/master/uom/action";
import * as leaveType from "@/pages/(dashboard)/master/leave/action";
import { selectOptions } from "@/libs/helpers";

const initialValues = {
  department: [],
  employee: [],
  uom: [],
  leaveType: [],
};

type ModuleType = keyof typeof initialValues;
type FetchResult = {
  [key in ModuleType]: [] | Array<{ label: string; value: string | number }>;
};

function useSelect(type: ModuleType | ModuleType[]): FetchResult {
  const [result, setResult] = useState<FetchResult>(initialValues);

  async function fetchData() {
    const arr = Array.isArray(type) ? type : [type];
    const fetchResult: FetchResult = initialValues;

    for (const i of arr) {
      if (i === "department") {
        fetchResult[i] = selectOptions(await department.index(), "name", "id");
      } else if (i === "employee") {
        fetchResult[i] = selectOptions(
          await employee.index(),
          "fullName",
          "id",
        );
      } else if (i === "uom") {
        fetchResult[i] = selectOptions(await uom.index(), "name", "id");
      } else if (i === "leaveType") {
        fetchResult[i] = selectOptions(await leaveType.index(), "name", "id");
      }
    }

    setResult(fetchResult);
  }

  useEffect(() => {
    void fetchData();
  }, []);

  return result;
}

export default useSelect;
