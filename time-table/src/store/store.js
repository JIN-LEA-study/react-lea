import { atom } from "recoil";
export const timeTableState = atom({
  key: "timeTableState",
  default: {
    mon: [{ start: 9, end: 11, name: "교양", color: "red", id: 1 }],
    tue: [{ start: 10, end: 13, name: "수학1", color: "blue", id: 2 }],
    wed: [{ start: 12, end: 14, name: "영어", color: "yellow", id: 3 }],
    thu: [{ start: 14, end: 19, name: "물리", color: "hotpink", id: 4 }],
    fri: [{ start: 9, end: 11, name: "프로그래밍", color: "purple", id: 5 }],
  },
});
