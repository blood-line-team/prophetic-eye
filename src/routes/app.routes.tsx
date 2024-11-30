import { RouteObject } from "react-router-dom";
import { Paths } from "./path.routes";
import Layout from "../Layout";
import ClientRequirement from "../pages/Dashboard/ClientRequirement/ClientRequirement";

export const AppRoutes: RouteObject[] = [
  {
    path: Paths.HOME,
    element: <Layout />,
    children: [
      {
        path: Paths.CLIENT_REQUIREMENT,
        element: <ClientRequirement />,
      },
      // {
      //   path: Paths.LOGIN,
      //   element: <Login />,
      // },
    ],
  },
];
