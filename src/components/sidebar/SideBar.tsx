import { useState } from "react";
import { IconNotebook, IconUsers } from "@tabler/icons-react";
import { Button, Group, Stack } from "@mantine/core";
import { Paths } from "../../routes/path.routes";
import { useNavigate } from "react-router-dom";

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
  {
    link: Paths.TEAM_MEMBER,
    label: "Team members  ",
    icon: <IconUsers size={16} />,
  },
];

export function SideBar() {
  const [active, setActive] = useState(Paths.HOME);
  const navigate = useNavigate();

  const links = data.map((item) => (
    <Button
      fullWidth
      variant={active === item.link ? "light" : "transparent"}
      fw="normal"
      color="gray.6"
      c="black"
      key={item.label}
      onClick={() => {
        setActive(item.link);
        navigate(item.link);
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
      bg="white"
      maw={270}
      style={{
        borderRight:
          "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))",
      }}
    >
      <Stack>
        <Group justify="space-between" style={{ cursor: "pointer" }}>
          <img
            src="/logo/logo-sidebar.svg"
            height={60}
            width={150}
            onClick={() => navigate(Paths.HOME)}
          />
        </Group>
        <Stack gap={8}>{links}</Stack>
      </Stack>
    </Stack>
  );
}
