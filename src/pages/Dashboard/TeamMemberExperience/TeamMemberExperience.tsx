import {
  ActionIcon,
  Button,
  Container,
  Group,
  ScrollArea,
  Stack,
  Textarea,
  Tooltip,
  Text,
  Autocomplete,
  Flex,
} from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";
import { useForm } from "@mantine/form";

import { useEffect, useState } from "react";
import { getTeamMemberExperience } from "../../../queries/team-member-experience.query";
import { getClients, IGetClients } from "../../../queries/get-clients.query";
import { ExperienceUnits } from "./components/ExperienceUnits";
import { getTeamMembersData } from "../../../queries/get-team-members";
import { postAddExperienceUnits } from "../../../queries/post-add-experience-units.query";

export interface Experience {
  id: string;
  project: string;
  details: string;
}

interface TeamMemberInformation {
  name: string;
  description: string;
  team_member: string;
}

export type TeamMemberInfo = {
  id: string;
  name: string;
  description: string;
  experienceUnits?: { id: string; description: string; stack: string }[];
};

export type ExperienceUserData = {
  idTeamMember: number;
  experienceData: {
    description: string;
    tech_stack: string;
  }[];
  team_member: string;
  project: string;
};

export const TeamMemberExperience = () => {
  const [experienceUnits, setExperienceUnits] =
    useState<ExperienceUserData[]>();

  const [clientsData, setClientsData] = useState<string[]>([]);
  const [teamMembers, setTeamMembers] = useState<string[]>([]);

  const [generateExperienceUnits, setGenerateExperiencesUnits] =
    useState(false);
  const [saveExperienceUnits, setSaveExperienceUnits] = useState(false);

  const onSubmit = async (values: {
    teamMemberInformation: TeamMemberInformation[];
  }) => {
    setGenerateExperiencesUnits(true);
    await Promise.all(
      values.teamMemberInformation.map(async (item, index) => {
        const data = await getTeamMemberExperience(item.description);
        setExperienceUnits((prev) => [
          ...(prev ?? []),
          {
            idTeamMember: index,
            experienceData: data ?? [],
            team_member: item.team_member,
            project: item.name,
          },
        ]);
      })
    ).finally(() => {
      setGenerateExperiencesUnits(false);
    });
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      teamMemberInformation: [
        {
          name: "",
          description: "",
          team_member: "",
        },
      ],
    },
  });

  const onSaveExperienceUnits = async () => {
    setSaveExperienceUnits(true);
    await Promise.all(
      experienceUnits?.map(async (experienceUnit) => {
        await postAddExperienceUnits({
          experience_units: experienceUnit.experienceData,
          project: experienceUnit.project,
          team_member: experienceUnit.team_member,
        });
      }) ?? []
    ).finally(() => {
      setSaveExperienceUnits(false);
    });
  };

  const clientsExperiencefields = form
    .getValues()
    .teamMemberInformation.map((_, index) => (
      <Stack
        key={index}
        gap={8}
        style={{
          borderRadius: "8px",
          position: "relative",
        }}
        bg="white"
        py={24}
        px={16}
      >
        <div style={{ position: "absolute", right: "16px", top: "12px" }}>
          <ActionIcon
            variant="light"
            color="gray.6"
            onClick={() => {
              form.removeListItem("teamMemberInformation", index);
            }}
          >
            <IconTrash size={12} />
          </ActionIcon>
        </div>
        <Text>Experience details</Text>
        <Autocomplete
          label="Team member"
          placeholder="Team member"
          style={{ flex: 1 }}
          key={form.key(`teamMemberInformation.${index}.team_member`)}
          {...form.getInputProps(`teamMemberInformation.${index}.team_member`)}
          data={teamMembers}
        />
        <Autocomplete
          label="Client"
          placeholder="Client name"
          key={form.key(`teamMemberInformation.${index}.name`)}
          {...form.getInputProps(`teamMemberInformation.${index}.name`)}
          data={clientsData}
        />

        <Textarea
          label="Details and achievements"
          placeholder="Detail your experience with the client"
          key={form.key(`teamMemberInformation.${index}.description`)}
          styles={{ input: { minHeight: "150px" } }}
          {...form.getInputProps(`teamMemberInformation.${index}.description`)}
        />

        {experienceUnits && experienceUnits[index] ? (
          <ExperienceUnits
            key={index}
            experienceData={experienceUnits[index].experienceData}
          />
        ) : null}
      </Stack>
    ));

  useEffect(() => {
    getClients().then((data) => {
      if (data) {
        setClientsData([
          ...new Set((data as IGetClients[]).map((d) => d.name)),
        ]);
      }
    });
  }, []);

  useEffect(() => {
    const getTeamMembers = async () => {
      const teamMembers = await getTeamMembersData();
      if (teamMembers) {
        setTeamMembers(teamMembers.map((member) => member.name));
      }
    };
    getTeamMembers();
  }, []);

  return (
    <Container w={"100%"} m={0}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack px={20} py={72} h="fit-content">
          <Stack h="fit-content">
            <Group justify="space-between">
              <span style={{ opacity: 0.5 }}>Experience with clients</span>
              <Tooltip
                label={"Add new"}
                arrowSize={4}
                arrowPosition="side"
                arrowOffset={5}
                withArrow
                position="left"
              >
                <ActionIcon
                  variant="light"
                  size="md"
                  color="#5F14EF"
                  onClick={() => {
                    form.insertListItem("teamMemberInformation", {
                      name: "",
                      key: randomId(),
                    });
                  }}
                >
                  <IconPlus />
                </ActionIcon>
              </Tooltip>
            </Group>
            {clientsExperiencefields.length > 0 ? (
              <ScrollArea styles={{ viewport: { height: "70vh" } }}>
                <Stack gap={16}>{clientsExperiencefields}</Stack>
              </ScrollArea>
            ) : (
              <Text c="dimmed" ta="center" size="lg">
                Add your previous work with clients
              </Text>
            )}
          </Stack>
        </Stack>

        <Stack align="end">
          <Flex gap={16}>
            <Button
              w={"fit-content"}
              size="md"
              color={"#5F14EF"}
              type="submit"
              loading={generateExperienceUnits}
              disabled={generateExperienceUnits}
              variant={experienceUnits ? "outline" : "filled"}
            >
              {experienceUnits
                ? "Regenerate Experience Units"
                : "Generate Experience Units"}
            </Button>
            {experienceUnits ? (
              <Button
                w={"fit-content"}
                size="md"
                bg={"#5F14EF"}
                onClick={() => {
                  onSaveExperienceUnits();
                  setExperienceUnits([]);
                  form.reset();
                }}
                loading={saveExperienceUnits}
              >
                Save
              </Button>
            ) : null}
          </Flex>
        </Stack>
      </form>
    </Container>
  );
};
