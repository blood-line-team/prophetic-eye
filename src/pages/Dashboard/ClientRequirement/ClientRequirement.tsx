import {
  Button,
  Container,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";

export default function ClientRequirement() {
  return (
    <Container w={"100%"} m={0}>
      <Stack px={20} py={30}>
        <Title>Client Information</Title>

        <Stack>
          <span style={{ opacity: 0.5 }}>Client details</span>
          <TextInput
            label="Client"
            placeholder="Client name"
            size="md"
          // key={form.key('email')}
          // {...form.getInputProps('email')}
          />
          <Textarea
            label="Description"
            placeholder="Type description"
            size="md"
          />
        </Stack>

        <Stack>
          <span style={{ opacity: 0.5 }}>Client Requirements</span>
          <Textarea
            label="Description"
            placeholder="Type requirements"
            size="md"
          />
        </Stack>

        <Stack align="end">
          <Button w={100} size="md" bg={"#5F14EF"}>
            Save
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
