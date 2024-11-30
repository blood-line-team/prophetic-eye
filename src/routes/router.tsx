import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./app.routes";

const router = createBrowserRouter(AppRoutes);

export const Router = () => {
  return <RouterProvider router={router} />;
};