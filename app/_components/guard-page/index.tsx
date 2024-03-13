"use client";

import type { MenuAccess } from "@/types";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  access: MenuAccess;
  children: React.ReactNode;
}

export function GuardPage({ access, children }: Props) {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (access !== "*") {
      const roleActions = localStorage.getItem("roleActions");

      if (!roleActions?.includes(access)) {
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
