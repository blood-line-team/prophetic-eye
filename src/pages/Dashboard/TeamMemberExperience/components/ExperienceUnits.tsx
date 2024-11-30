import { Stack, Title, Group, Button } from "@mantine/core";

export const ExperienceUnits = () => {
  return (
    <Stack bg={"#F8F9FA"} p={10} style={{ borderRadius: "10px" }}>
      <Title size={"h4"}>Experience Units</Title>
      <Group
        justify="space-between"
        px={10}
        py={5}
        style={{ borderRadius: "10px" }}
        bg={"white"}
      >
        Experience description for a technology and description large
        <Button disabled style={{ cursor: "default", color: "black" }}>
          React
        </Button>
      </Group>
    </Stack>
  );
};
