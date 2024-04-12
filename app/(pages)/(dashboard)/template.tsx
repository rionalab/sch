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
  const disableUpdateDefaultPassword =
    process.env.NEXT_PUBLIC_DISABLE_UPDATE_DEFAULT_PASSWORD;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-boolean-literal-compare
    if (path !== urlUpdatePassword && hasUpdatePassword === false) {
      if (!disableUpdateDefaultPassword) {
        router.push(urlUpdatePassword);
      }
    }
  }, []);

  return <>{children}</>;
}
