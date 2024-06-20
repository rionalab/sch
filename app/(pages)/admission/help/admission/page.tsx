"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();

  return (
    <div className="post">
      <br />
      <br />
      <h3>Guide for Admission</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quod
        necessitatibus. Cumque sapiente et aut quaerat sint, amet, quia
        inventore libero, sequi consequatur laudantium rerum. Natus quo
        inventore mollitia odit!
      </p>
      <button onClick={() => router.back()} className="custom yellow">
        Back
      </button>
    </div>
  );
}

export default Page;
