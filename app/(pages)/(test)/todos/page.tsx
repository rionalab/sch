import React from "react";
import prisma from "@/libs/prisma";
import FormCreate from "@/components/pages/todo/FormCreate";

async function page() {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <h1>Todos</h1>

      <FormCreate />

      <ol>
        {todos.map((todo, i) => (
          <li key={i}>{todo.task}</li>
        ))}
      </ol>
    </div>
  );
}

export default page;
