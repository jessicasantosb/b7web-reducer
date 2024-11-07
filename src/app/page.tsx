"use client";

import { FormEvent, useReducer, useState } from "react";

import { listReducer } from "@/reducers/listReducer";

export default function Home() {
  const [list, dispatch] = useReducer(listReducer, []);
  const [newItem, setNewItem] = useState("");

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "add",
      payload: {
        text: newItem,
      },
    });

    setNewItem("");
  };

  return (
    <main className="p-4">
      <form onSubmit={handleAdd}>
        <input
          className="border"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>adicionar</button>
      </form>

      {list.map((item) => {
        return (
          <div key={item.id} className="flex justify-between">
            <p>{item.text}</p>
          </div>
        );
      })}
    </main>
  );
}
