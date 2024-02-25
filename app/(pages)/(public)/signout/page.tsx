"use client";

import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

function Page() {
  useEffect(() => {
    void signOut({
      redirect: true,
      callbackUrl: "/signin",
    });
  });

  return <div>Signing out...</div>;
}

export default Page;
