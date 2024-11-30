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
} from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";
import { useForm } from "@mantine/form";

import { useEffect, useState } from "react";
import { getTeamMemberExperience } from "../../../queries/team-member-experience.query";
import { getClients, IGetClients } from "../../../queries/get-clients.query";

export interface Experience {
  id: string;
  project: string;
  details: string;
}

interface TeamMemberInformation {
  name: string;
  description: string;
}

export type TeamMemberInfo = {
  id: string;
  name: string;
  description: string;
  experienceUnits?: { id: string; description: string; stack: string }[];
};

export type ExperienceUserData = {
  idTeamMember: number;
  description: string;
  tech_stack: string;
};

export const TeamMemberExperience = () => {
  const [teamMembers, setTeamMembers] = useState<ExperienceUserData[]>();

  const [clientsData, setClientsData] = useState<string[]>([]);

  console.log({ clientsData });

  console.log({ teamMembers });

  const onSubmit = async (values: {
    teamMemberInformation: TeamMemberInformation[];
  }) => {
    await Promise.all(
      values.teamMemberInformation.map(async (item, index) => {
        const data = await getTeamMemberExperience(item.description);
        setTeamMembers((prev) => [
          ...(prev ?? []),
          {
            idTeamMember: index,
            description: data?.description ?? "",
            tech_stack: data?.tech_stack ?? "",
          },
        ]);
      })
    );
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      teamMemberInformation: [
        {
          name: "",
          description: "",
        },
      ],
    },
  });

  const clientsExperiencefields = form
    .getValues()
    .teamMemberInformation.map((_, index) => (
      <Stack
        key={index}
        gap={16}
        style={{
          borderRadius: "24px",
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
        <Autocomplete
          label="Client"
          placeholder="Client name"
          style={{ flex: 1 }}
          key={form.key(`teamMemberInformation.${index}.name`)}
          {...form.getInputProps(`teamMemberInformation.${index}.name`)}
          data={clientsData}
        />

        <Textarea
          label="Details and achievements"
          placeholder="Detail your experience with the client"
          style={{ flex: 1 }}
          key={form.key(`teamMemberInformation.${index}.description`)}
          {...form.getInputProps(`teamMemberInformation.${index}.description`)}
        />
        {/* {
          dataReceived
            ?
            teamMemberInformation.filter(member => member.id === item.key)
            .map(member => {
              return(
                <ExperienceUnits description={member.experienceUnits['description']} stack={member.experienceUnits['stack']}/>
              )
            })
              
            :
            <></>
          // <ExperienceUnits />
        } */}
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

  return (
    <Container w={"100%"} m={0}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack px={20} py={72}>
          <Stack>
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
                  variant="default"
                  color="gray"
                  bg={"white"}
                  onClick={() => {
                    form.insertListItem("teamMemberInformation", {
                      name: "",
                      key: randomId(),
                    });
                  }}
                >
                  <IconPlus opacity={0.7} />
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
          <Button w={"fit-content"} size="md" bg={"#5F14EF"} type="submit">
            Generate Experience Units
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
