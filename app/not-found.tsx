import Link from "next/link";
import { urls } from "./_consts";

export default function NotFound() {
  return (
    <div style={{ display: "grid", placeContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href={urls.landingPage}>Return Home</Link>
      </div>
    </div>
  );
}
