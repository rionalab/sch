"use client";

import { createTodo } from "@/actions/todo";
import { validateCreate } from "@/validations/todo";
import { useFormStatus } from "react-dom";

function Form() {
  const { pending } = useFormStatus();

  async function handleSubmit(formData: FormData) {
    const newTodo = {
      task: formData.get("task") as string,
      isFinished: false,
      user: undefined,
      userId: 0,
    };

    const validation = validateCreate(newTodo);

    console.log(validation);

    if (validation.success) {
      console.log(111111111);
    } else {
      console.log(222222222222);
    }

    // return new Promise((resolve) => setTimeout(() => resolve, 2000));
    // await createTodo(formData);
  }

  console.log(111, pending);

  return (
    <form action={handleSubmit}>
      <input type="text" name="task" />
      <button aria-disabled={pending} type="submit">
        {pending ? "Loading form" : "Add"}
      </button>
    </form>
  );
}

export default Form;
