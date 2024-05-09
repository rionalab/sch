import { urls } from "@/consts";
import { useRouter } from "next/navigation";

function FormError() {
  const router = useRouter();

  return (
    <div className="post">
      <br />
      <br />
      <center>
        <h3>Not found</h3>
        <button
          onClick={() => {
            router.push(urls.admission.forms);
          }}
          className="custom aqua"
        >
          Back
        </button>
      </center>
    </div>
  );
}

export default FormError;
