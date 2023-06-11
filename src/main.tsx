import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CategoryProvider } from "./provider/CategoryProvider";
import { SearchProvider } from "./provider/SearchProvider";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CategoryProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
