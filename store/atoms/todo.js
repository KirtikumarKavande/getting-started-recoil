import { atomFamily } from "recoil";
import todoList from "../../src/todoList";

export let todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => {
    return todoList.find((x) => x.id === id);
  },
});
