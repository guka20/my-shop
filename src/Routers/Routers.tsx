import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "../Layouts";
import { Home, Product } from "../pages";
export const Routers = () => {
  // [
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/product/:productId",
  //     element: <Product />,
  //   },
  // ];
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
