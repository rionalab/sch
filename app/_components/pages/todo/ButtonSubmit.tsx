import React from "react";
import { useFormStatus } from "react-dom";

function ButtonSubmit() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      {pending ? "Loading form" : "Add"}
    </button>
  );
}

export default ButtonSubmit;
