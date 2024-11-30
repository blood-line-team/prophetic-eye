import { Outlet } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";
import { Grid, Group } from "@mantine/core";

const Layout = () => {
  return (
    <Grid align="normal" bg="gray.0">
      <Grid.Col span="content">
        <SideBar />
      </Grid.Col>
      <Grid.Col span="auto">
        <Outlet />
      </Grid.Col>
    </Grid>
  );
};

export default Layout;
