import React, { useEffect, useState } from "react";
import { checkHasRegisterParent } from "./action";

function useParentData() {
  const [data, setData] = useState<any>();

  const init = async () => {
    const userId = localStorage.getItem("auth");
    const a = await checkHasRegisterParent(Number(userId));

    console.log({ a });

    setData(a);
  };

  useEffect(() => {
    console.log("222222222222");
    init();
  }, []);

  return { data };
}

export default useParentData;

export const parentHasRegister = async () => {
  const userId = localStorage.getItem("auth");
  return await checkHasRegisterParent(Number(userId));
};
