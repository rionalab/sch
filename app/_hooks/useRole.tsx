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
      allowEdit: Boolean(actions?.includes(`role_${moduleName}_edit`)),
      allowDelete: Boolean(actions?.includes(`role_${moduleName}_delete`)),
      allowCreate: Boolean(actions?.includes(`role_${moduleName}_create`)),
    });
  }, []);

  return result;
}

export default useRole;
