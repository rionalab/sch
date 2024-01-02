import React from "react";

function List({ fruits }: Props) {
  return (
    <ol>
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ol>
  );
}

interface Props {
  fruits: {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export default List;
