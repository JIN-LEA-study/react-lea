import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minites",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  //selector value
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  // seletor atom value set
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
