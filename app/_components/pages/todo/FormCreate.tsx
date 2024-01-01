"use client";

import { createTodo } from "@/actions/todo";
import { validateCreate } from "@/validations/todo";
import { useFormStatus } from "react-dom";
import ButtonSubmit from "./ButtonSubmit";
import { useStore } from "@/libs/zustand";
import { zodErrorMessage } from "@/libs/helpers/notif";

function Form() {
  const notif = useStore((store) => store.notif)!;

  console.log(notif);

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
      notif?.error(zodErrorMessage(validation.error.issues));
    }

    // return new Promise((resolve) => setTimeout(() => resolve, 2000));
    // await createTodo(formData);
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="task" />
      <ButtonSubmit />
    </form>
  );
}

export default Form;
