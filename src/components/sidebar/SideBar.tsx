import { useState } from "react";
import { IconLogout, IconNotebook, IconUsers } from "@tabler/icons-react";
import { Button, Group, Stack } from "@mantine/core";
import classes from "./sidebar.module.css";
import { Paths } from "../../routes/path.routes";

const data = [
  {
    link: Paths.CLIENT_REQUIREMENT,
    label: "Client Requirements",
    icon: <IconNotebook size={16} />,
  },
  {
    link: Paths.TEAM_MEMBER_EXPERIENCE,
    label: "Team member experience",
    icon: <IconUsers size={16} />,
  },
];

export function SideBar() {
  const [active, setActive] = useState(Paths.HOME);
  const links = data.map((item) => (
    <Button
      fullWidth
      variant={active === item.link ? "light" : "transparent"}
      fw="normal"
      color="gray.6"
      c="black"
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
      leftSection={item.icon}
      justify="start"
    >
      {item.label}
    </Button>
  ));

  return (
    <Stack
      h="100vh"
      p="md"
      style={{
        borderRight:
          "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
      }}
    >
      <Stack flex={1}>
        <Group justify="space-between">
          <img src="/logo/logo-sidebar.svg" height={60} width={150} />
        </Group>
        <Stack gap={8}>{links}</Stack>
      </Stack>

      <a href={Paths.CLIENT_REQUIREMENT} className={classes.link}>
        <IconLogout className={classes.linkIcon} stroke={1.5} />
        <span>Logout</span>
      </a>
    </Stack>
  );
}
