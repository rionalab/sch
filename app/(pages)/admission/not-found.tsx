import { urls } from "@/consts";
import Link from "next/link";

function NotFound() {
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

      <Link href={urls.admission.forms}>Back to Forms</Link>
    </div>
  );
}

export default NotFound;
