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
    init();
  }, []);

  return { data };
}

export default useParentData;

export const parentHasRegister = async () => {
  const userId = localStorage.getItem("auth");
  return await checkHasRegisterParent(Number(userId));
};

export const storeLocalStorage = (label: string, values: any) => {
  localStorage.setItem(label, JSON.stringify(values));
};
