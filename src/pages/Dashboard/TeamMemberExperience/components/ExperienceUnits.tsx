import { Stack, Title, Group, Button } from "@mantine/core";

interface Props {
  stack: string;
  description: string;
}


export const ExperienceUnits = ({ stack, description }: Props) => {
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
        {description}
        <Button disabled style={{ cursor: "default", color: "black" }}>
          {stack}
        </Button>
      </Group>
    </Stack>
  );
};
