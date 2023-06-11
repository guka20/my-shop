import { Dispatch, SetStateAction, createContext } from "react";

type SearchContextValue = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
export const SearchContext = createContext<SearchContextValue>({
  search: "",
  setSearch: () => "",
});
