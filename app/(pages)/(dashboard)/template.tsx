"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { urls } from "@/consts";
import { useSession } from "next-auth/react";
import type { UserSession } from "@/types";

export default function Template({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const router = useRouter();
  const path = usePathname();
  const urlUpdatePassword = urls.account.updatePassword.index;
  const { hasUpdatePassword } = (session?.user as UserSession) || {};

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  const defineRoleActions = async () => {
    if (!localStorage.getItem("roleActions")) {
      const url = `${baseUrl}/api/user`;
      const user = await fetch(url);
      const data = await user.json();

      localStorage.setItem("roleActions", `${data.role.actions}`);
    }
  };

  useEffect(() => {
    void defineRoleActions();

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
    if (path !== urlUpdatePassword && hasUpdatePassword === false) {
      router.push(urlUpdatePassword);
    }
  }, []);

  return <>{children}</>;
}
