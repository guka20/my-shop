import React, { useState, PropsWithChildren } from "react";
import { CategoryContext } from "src/context/CategoryContext";
export const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState("");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
