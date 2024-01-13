import React from "react";

export async function aa() {
  return await new Promise((r) => setTimeout(() => r({ a: 1 }), 2222));
}

async function Aaa() {
  const something = await aa();

  return <div>AAAAAAAAAA {JSON.stringify(something)}</div>;
}

export default Aaa;
