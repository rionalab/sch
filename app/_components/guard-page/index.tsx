"use client";

import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  access: string;
  children: React.ReactNode;
}

function GuardPage({ access, children }: Props) {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const roleActions = localStorage.getItem("roleActions");

    if (!roleActions?.includes(access)) {
      return notFound();
    } else {
      setHasAccess(true);
    }
  }, []);

  return !hasAccess ? null : <>{children}</>;
}

export default GuardPage;
