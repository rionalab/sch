"use client";

import { createTodo } from "@/actions/todo";
import { validateCreate } from "@/validations/todo";
import { useFormStatus } from "react-dom";
import ButtonSubmit from "./ButtonSubmit";
import { useStore } from "@/libs/zustand";
import { notifErrorMessage } from "@/libs/helpers/notif";
import { ZodIssue } from "zod";

function Form() {
  const notif = useStore((store) => store.notif)!;

  async function handleSubmit(formData: FormData) {
    const newTodo = {
      task: formData.get("task") as string,
      isFinished: false,
      user: undefined,
      userId: 0,
    };

    // const validation = validateCreate(newTodo);

    // if (!validation.success) {
    //   notif?.error(zodErrorMessage(validation.error.issues));
    //   return;
    // }

    const response = await createTodo(newTodo);

    console.log(response);

    if (!response?.success) {
      notif?.error(notifErrorMessage(response.data));
      return;
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="task" />
      <ButtonSubmit />
    </form>
  );
}

export default Form;
