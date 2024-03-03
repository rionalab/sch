"use client";

import { urls } from "@/consts";
import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

function Page() {
  useEffect(() => {
    void signOut({
      redirect: true,
      callbackUrl: urls.auth.signin,
    });
  });

  return <div>Signing out...</div>;
}

export default Page;
