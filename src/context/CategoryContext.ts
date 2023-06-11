import { Dispatch, SetStateAction, createContext } from "react";

type CategoryContextValue = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

export const CategoryContext = createContext<CategoryContextValue>({
  category: "all",
  setCategory: () => "",
});
