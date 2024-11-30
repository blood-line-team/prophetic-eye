import {
  Avatar,
  Badge,
  Card,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { IGetTeamMemberRecommendation } from "../../../../queries/get-team-member-recomendation";

export const RecommendationCard = ({
  reason,
  english,
  name,
  seniority,
  tech_stack,
}: IGetTeamMemberRecommendation) => {
  return (
    <Grid.Col span={8}>
      <Card shadow="sm" padding="lg">
        <Grid>
          <Grid.Col span={6}>
            <Group>
              <Text>Top Recommendation</Text>
              <IconStar size={22} color="#5F14EF" />
            </Group>
          </Grid.Col>
          <Grid.Col span={6} />
          <Grid.Col span={6}>
            <Group>
              <Avatar name={name} size="lg" color="#5F14EF" />
              <Stack gap={0}>
                <Title c="#5F14EF" variant="h2">
                  {name}
                </Title>
                <Text size="md">
                  {seniority} - (English) {english}
                </Text>
              </Stack>
            </Group>
          </Grid.Col>
          <Grid.Col span={6} />
          <Grid.Col span={7}>
            <Stack gap={12}>
              <Text size="md" fw={700}>
                It’s the best suit to the project because:
              </Text>
              <Text size="lg" fw={700}>
                MAIN STACKS
              </Text>
            </Stack>
            <Grid mt={12}>
              <Grid.Col>
                <Group>
                  {tech_stack.map((teamMember) => {
                    return (
                      <Badge
                        key={teamMember}
                        p={16}
                        c="black"
                        variant="outline"
                        style={{
                          borderRadius: "4px",
                          border: "1px solid gray",
                        }}
                      >
                        {teamMember}
                      </Badge>
                    );
                  })}
                </Group>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={6} />
          <Grid.Col span={12}>
            <Text size="md">{reason}</Text>
          </Grid.Col>
        </Grid>
      </Card>
    </Grid.Col>
  );
};
