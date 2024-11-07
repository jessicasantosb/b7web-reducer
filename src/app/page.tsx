"use client";

import { FormEvent, useReducer, useState } from "react";

import { listReducer } from "@/reducers/listReducer";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function Home() {
  const [list, dispatch] = useReducer(listReducer, []);
  const [newItem, setNewItem] = useState("");
  const [isDone, setIsDone] = useState(false);

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

  const handleDone = (itemId: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id: itemId },
    });

    setIsDone(!isDone);
  };

  return (
    <main className="max-w-96 p-4 mx-auto">
      <form
        onSubmit={handleAdd}
        className="h-10 my-8 flex items-center justify-between gap-1"
      >
        <input
          className="border w-full h-full"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="h-full px-2 bg-slate-300 hover:opacity-65">
          adicionar
        </button>
      </form>

      {list.map((item) => {
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleDone(item.id)}
            className={`w-full my-2 p-2 border flex items-center justify-between bg-slate-100 ${
              isDone && "opacity-40 [&>*]:pointer-events-none"
            }`}
          >
            <p className={`${isDone && "line-through"}`}>{item.text}</p>
            <div className="flex items-center gap-2 [&>*]:cursor-pointer">
              <BiTrash size={24} className="text-red-700 hover:opacity-65" />
              <BiEdit size={24} className="text-green-700 hover:opacity-65" />
            </div>
          </button>
        );
      })}
    </main>
  );
}
