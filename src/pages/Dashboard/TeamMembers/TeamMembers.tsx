import { Container, Stack, Table, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { getTeamMembersData } from "../../../queries/get-team-members";
import { IconSearch } from "@tabler/icons-react";
import { TeamMember } from "../../../types";

export const TeamMembers = () => {
  const [teamMember, setTeamMember] = useState<TeamMember[]>([]);
  const [query, setQuery] = useState<string>("");
  useEffect(() => {
    const getTeamMember = async () => {
      const data = await getTeamMembersData();
      setTeamMember(data);
    };
    getTeamMember();
  }, []);
  const rows = teamMember
    .filter((teamMember) => teamMember.name.includes(query))
    .map((element) => (
      <Table.Tr key={element.name} bg="white">
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.tech_stack.join(", ")}</Table.Td>
        <Table.Td>{element.seniority}</Table.Td>
        <Table.Td>{element.english}</Table.Td>
      </Table.Tr>
    ));
  return (
    <Container w={"100%"} m={0}>
      <Stack px={20} py={72}>
        <Title order={2}>Team Members</Title>
        <TextInput
          leftSection={<IconSearch size={12} />}
          value={query}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
          placeholder="Search for team member"
        />
        <Table
          styles={{
            tbody: { display: "block", height: "72vh", overflow: "auto" },
            tr: {
              display: "table",
              width: "100%",
              tableLayout: "fixed",
            },
          }}
        >
          <Table.Thead>
            <Table.Tr bg="gray.2">
              <Table.Th>Team Member </Table.Th>
              <Table.Th>Tech Stack</Table.Th>
              <Table.Th>Seniority</Table.Th>
              <Table.Th>English Level</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Stack>
    </Container>
  );
};
