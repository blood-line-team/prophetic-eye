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
import { useTeamMemberStore } from "../../../store/use-team-member";
// import { ExperienceUnits } from "./components/ExperienceUnits";
// import { useState } from "react";

export interface Experience {
  id: string;
  project: string;
  details: string;
}



export const TeamMemberExperience = () => {


  const { setTeamMemberInformation } = useTeamMemberStore()
  // const [dataReceived, setDataReceived] = useState(false)


  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      teamMemberInformation: [
        {
          name: "",
          description: "",
          key: randomId(),
        },
      ],
    },
  });

  const clientsExperiencefields = form
    .getValues()
    .teamMemberInformation.map((item, index) => (
      <Stack
        key={item.key}
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
          data={['React', 'Angular', 'Vue', 'Svelte']}
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

  return (
    <Container w={"100%"} m={0}>
      <form
        onSubmit={form.onSubmit((values) =>
          setTeamMemberInformation(
            values.teamMemberInformation.map((item) => ({
              description: item.description,
              id: item.key,
              name: item.name,
            }))
          )
        )}
      >
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
                <Stack gap={16}>
                  {clientsExperiencefields}
                </Stack>
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
