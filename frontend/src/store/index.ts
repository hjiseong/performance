import { User } from "@src/types";
import { atom } from "recoil";

export const userState = atom<User | null>({
  key: "userState",
  default: null
});
