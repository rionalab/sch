import useStore from "@/hooks/useStore";
import { useBoundStore } from "@/libs/zustand";
import React from "react";

function Fish() {
  const store = useStore(useBoundStore, (state) => state);

  return (
    <div>
      ?<h1>Fish : {store?.fishes}</h1>
      <br />
      <button onClick={() => store?.addFish?.()}>+ add Fish</button>
      <br />
      <br />
    </div>
  );
}

export default Fish;
