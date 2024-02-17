"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

function Client1() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <div>
      Client1
      {JSON.stringify(session)}
    </div>
  );
}

export default Client1;
