"use client";

import React from "react";
import { store } from "./action";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {pending ? "........" : "Add"}
    </button>
  );
}

function Form() {
  const [state, formAction] = useFormState(store, initialState);

  return (
    <form action={formAction}>
      <input name="name" type="text" />
      <SubmitButton />

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}

export default Form;
