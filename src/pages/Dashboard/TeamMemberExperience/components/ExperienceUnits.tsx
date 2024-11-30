import {
  Stack,
  Title,
  Group,
  Button,
  Grid,
  Badge,
  Center,
} from "@mantine/core";

interface Props {
  experienceData: {
    description: string;
    tech_stack: string;
  }[];
}

export const ExperienceUnits = ({ experienceData }: Props) => {
  return (
    <Stack bg={"#F8F9FA"} p={10} style={{ borderRadius: "10px" }} mt={12}>
      <Title size={"h4"}>Experience Units</Title>
      {experienceData.map((experience) => {
        return (
          <Grid
            key={experience.description}
            justify="space-between"
            px={10}
            py={5}
            style={{ borderRadius: "10px" }}
            bg={"white"}
          >
            <Grid.Col span={8}>{experience.description}</Grid.Col>
            <Grid.Col
              span={4}
              style={{
                alignContent: "center",
              }}
            >
              <Stack align="end">
                <Badge
                  p={16}
                  bg="gray.1"
                  c="black"
                  style={{
                    borderRadius: "0px",
                  }}
                >
                  {experience.tech_stack}
                </Badge>
              </Stack>
            </Grid.Col>
          </Grid>
        );
      })}
    </Stack>
  );
};
