import { Outlet } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";
import { Group } from "@mantine/core";

const Layout = () => {
  return (
    <Group h={"100%"} align="normal">
      <SideBar />
      <Outlet />
    </Group>
  );
};

export default Layout;
