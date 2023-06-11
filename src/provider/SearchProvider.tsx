import React, { PropsWithChildren, useState } from "react";
import { SearchContext } from "src/context/SearchContext";

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
