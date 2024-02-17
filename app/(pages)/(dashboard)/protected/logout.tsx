"use client";

import React from "react";
import { signOut } from "next-auth/react";

function Logout() {
  return (
    <div>
      <button
        onClick={() => {
          void signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default Logout;
