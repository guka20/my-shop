import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "src/Layouts";
import { Home, Product } from "src/pages";
export const Routers = () => {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
    )
  );
  return <RouterProvider router={routers} />;
};
