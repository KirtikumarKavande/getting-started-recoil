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
