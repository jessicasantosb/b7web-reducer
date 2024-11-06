"use client";

import { listReducer } from "@/reducers/listReducer";
import { useReducer } from "react";

export default function Home() {
  const [list, dispatch] = useReducer(listReducer, []);

  const handleAdd = () => {
    dispatch({
      type: "add",
      payload: {
        text: "Novo item",
      },
    });

    console.log(list);
  };

  return (
    <main>
      <button onClick={handleAdd}>adicionar</button>
    </main>
  );
}
