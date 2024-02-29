import { atom, selectorFamily } from "recoil";

let todoList = atom({
  key: "todoAtom",
  default: [
    {
      name: "play cricket",
      id: 0,
    },
    {
      name: "study DSA",
      id: 1,
    },
  ],
});

export const filteredTodoListState = selectorFamily({
  key: "FilteredTodoList",

  get:
    (id) =>
    ({ get }) => {
      const list = get(todoList);
      return list.filter((item) => item.id === id);
    },
});
