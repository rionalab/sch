import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ display: "grid", placeContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/dashboard">Return Home</Link>
      </div>
    </div>
  );
}
