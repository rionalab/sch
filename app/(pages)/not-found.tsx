"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "grid",
        width: "100vw",
        height: "100vh",
        placeItems: "center",
      }}
    >
      <div
        style={{ marginTop: "-22vh", textAlign: "center", lineHeight: "40px" }}
      >
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>

        <Button
          style={{ marginTop: "32px" }}
          onClick={() => {
            router.push("/dashboard");
          }}
          type="primary"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
