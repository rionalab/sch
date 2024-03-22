import { useEffect, useState } from "react";
import type { ModuleName } from "@/types";
import { handlePrismaError } from "@/libs/helpers";
import * as uom from "@/master/uom/action";

interface Result {
  uom?: any[];
}

function useData(dataType: ModuleName[]) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Result>({});

  const fetchDatas = async () => {
    const result: Result = {};

    if (dataType.includes("uom")) {
      result.uom = await uom.index();
    }

    setLoading(false);
    setData(result);
  };

  useEffect(() => {
    void fetchDatas();
  }, []);

  return { data, loading };
}

export default useData;
