import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const isEven = selector({
  key: "isEven",
  get: ({ get }) => {
    let counter = get(countState);

    return counter % 2 === 0 ? "even number" : "";
  },
});

async function abc() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
export const userQuery = selector({
  key: "CurrentUserName",
  get: async () => {
    return await abc();
  },
});
