import { RouteObject } from "react-router-dom";
import { Paths } from "./path.routes";
import Layout from "../components/layout/Layout";
import ClientRequirement from "../pages/Dashboard/ClientRequirement/ClientRequirement";
import { TeamMemberExperience } from "../pages/Dashboard/TeamMemberExperience/TeamMemberExperience";

export const AppRoutes: RouteObject[] = [
  {
    path: Paths.HOME,
    element: <Layout />,
    children: [
      {
        path: Paths.CLIENT_REQUIREMENT,
        element: <ClientRequirement />,
      },
      {
        path: Paths.TEAM_MEMBER_EXPERIENCE,
        element: <TeamMemberExperience />,
      },
    ],
  },
];
