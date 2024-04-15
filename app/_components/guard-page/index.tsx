"use client";

import { urls } from "@/consts";
import type { MenuAccess } from "@/types";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  access: MenuAccess;
  children: React.ReactNode;
}

export function GuardPage({ access, children }: Props) {
  const [hasAccess, setHasAccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (access !== "*") {
      const roleActions = localStorage.getItem("roleActions");

      if (!roleActions) {
        router.push(urls.auth.signout);
      } else if (!roleActions?.includes(access)) {
        return notFound();
      } else {
        setHasAccess(true);
      }
    }
  }, []);

  if (access === "*") {
    return <>{children}</>;
  }

  return !hasAccess ? null : <>{children}</>;
}
