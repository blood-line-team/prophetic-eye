import { Navigate, RouteObject } from "react-router-dom";
import { Paths } from "./path.routes";
import Layout from "../components/layout/Layout";
import ClientRequirement from "../pages/Dashboard/ClientRequirement/ClientRequirement";
import { TeamMemberExperience } from "../pages/Dashboard/TeamMemberExperience/TeamMemberExperience";
import { TeamMembers } from "../pages/Dashboard/TeamMembers/TeamMembers";

export const AppRoutes: RouteObject[] = [
  {
    path: Paths.HOME,
    element: <Layout />,
    children: [
      {
        path: Paths.HOME,
        element: <Navigate to={Paths.CLIENT_REQUIREMENT} />,
      },
      {
        path: Paths.CLIENT_REQUIREMENT,
        element: <ClientRequirement />,
      },
      {
        path: Paths.TEAM_MEMBER_EXPERIENCE,
        element: <TeamMemberExperience />,
      },
      {
        path: Paths.TEAM_MEMBER,
        element: <TeamMembers />,
      },
      {
        path: "*",
        element: <Navigate to={Paths.HOME} />,
      },
    ],
  },
];
