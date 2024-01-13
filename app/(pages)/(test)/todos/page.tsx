import React from "react";
import prisma from "@/libs/prisma";

async function page() {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      <h1>Todos</h1>

      <ol>
        {todos.map((todo, i) => (
          <li key={i}>{todo.task}</li>
        ))}
      </ol>
    </div>
  );
}

export default page;
