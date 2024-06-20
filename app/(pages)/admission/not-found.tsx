"use client";

import { urls } from "@/consts";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NotFound() {
  const r = useRouter();

  return (
    <div className="textCenter post">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>Not Found</h3>
      <h4>
        Oops! It seems like there&apos;s nothing here at the moment. <br />
        Check back later for updates or try a different page
      </h4>

      <a href={urls.admission.dashboard}>Back to Dashboard</a>
    </div>
  );
}

export default NotFound;
