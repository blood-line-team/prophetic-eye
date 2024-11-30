import { Button, Grid, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

interface ClientRequirementForm {
  clientName: string;
  description: string;
}

export default function ClientRequirement() {
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

  const onSubmit = (values: ClientRequirementForm) => {
    console.log(values);
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
            <Button type="submit" w={100} size="md" bg={"#5F14EF"}>
              Save
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </form>
  );
}
