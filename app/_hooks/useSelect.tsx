import { useEffect, useState } from "react";
import * as employee from "@/pages/hrd/employee/action";
import * as department from "@/pages/master/department/action";
import { selectOptions } from "@/libs/helpers";

const initialValues = {
  department: [],
  employee: [],
};

type ModuleType = keyof typeof initialValues;
type FetchResult = {
  [key in ModuleType]: [] | Array<{ label: string; value: string | number }>;
};

function useSelect(type: ModuleType | ModuleType[]): FetchResult {
  const [result, setResult] = useState<FetchResult>(initialValues);

  async function fetchData() {
    const arr = Array.isArray(type) ? type : [type];
    const fetchResult: FetchResult = {
      department: [],
      employee: [],
    };

    for (const i of arr) {
      if (i === "department") {
        fetchResult.department = selectOptions(
          await department.index(),
          "name",
          "id"
        );
      } else if (i === "employee") {
        fetchResult.employee = selectOptions(
          await employee.index(),
          "fullName",
          "id"
        );
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
