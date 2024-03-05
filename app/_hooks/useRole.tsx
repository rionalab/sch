import { useEffect, useState } from "react";
import type { ModuleName } from "../_types/app";

function useRole(moduleName: ModuleName) {
  const [result, setResult] = useState({
    allowEdit: false,
    allowDelete: false,
    allowCreate: false,
  });

  useEffect(() => {
    const actions = localStorage.getItem("roleActions");

    setResult({
      allowEdit: Boolean(actions?.includes(`edit_${moduleName}`)),
      allowDelete: Boolean(actions?.includes(`delete_${moduleName}`)),
      allowCreate: Boolean(actions?.includes(`create_${moduleName}`)),
    });
  }, []);

  return result;
}

export default useRole;
