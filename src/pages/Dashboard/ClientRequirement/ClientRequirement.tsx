import { Button, Grid, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRef } from "react";
import JSConfetti from "js-confetti";
import { RecommendationCard } from "./components/recommendation-card";
import { useState } from "react";
import {
  getTeamMemberRecommendation,
  IGetTeamMemberRecommendation,
} from "../../../queries/get-team-member-recomendation";

interface ClientRequirementForm {
  clientName: string;
  description: string;
}

export default function ClientRequirement() {
  const confetti = useRef(new JSConfetti());
  const [teamMemberRecommendation, setTeamMemberRecommendation] =
    useState<IGetTeamMemberRecommendation>();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      clientName: "",
      description: "",
    },
    validate: {
      clientName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      description: (value) =>
        value.length < 1 ? "Description does not empty" : null,
    },
  });

  const onSubmit = async (values: ClientRequirementForm) => {
    setLoading(true);
    await getTeamMemberRecommendation(values.description)
      .then((resp) => {
        setTeamMemberRecommendation(resp as IGetTeamMemberRecommendation);
      })
      .finally(() => {
        setLoading(false);
        confetti.current.addConfetti();
      });
  };

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Grid px={56} py={72} w="100%" gutter="xl">
        <Grid.Col
          span={8}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <Title>Client Information</Title>
          <span style={{ opacity: 0.5 }}>Client details</span>
          <TextInput
            label="Client"
            placeholder="Client Name"
            size="md"
            key={form.key("clientName")}
            {...form.getInputProps("clientName")}
          />
          <Textarea
            label="Description"
            placeholder="Type description"
            size="md"
            key={form.key("description")}
            styles={{ input: { minHeight: "150px" } }}
            {...form.getInputProps("description")}
          />
          <Stack align="end">
            <Button type="submit" size="md" bg={"#5F14EF"} loading={loading}>
              Get Recommendation
            </Button>
          </Stack>
        </Grid.Col>
        {teamMemberRecommendation ? (
          <RecommendationCard
            english={teamMemberRecommendation.english}
            name={teamMemberRecommendation.name}
            seniority={teamMemberRecommendation.seniority}
            tech_stack={teamMemberRecommendation.tech_stack}
            reason={teamMemberRecommendation.reason}
          />
        ) : null}
      </Grid>
    </form>
  );
}
