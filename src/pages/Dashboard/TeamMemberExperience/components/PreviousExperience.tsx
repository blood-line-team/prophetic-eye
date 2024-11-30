import { ActionIcon, Stack, Textarea, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IconTrash } from '@tabler/icons-react';


interface PreviousExperience {
  form: UseFormReturnType<{
    teamMemberInformation: {
      name: string;
      description: string;
      key: string;
    }[];
  }>,
}


export const PreviousExperience: React.FC<PreviousExperience> = ({ form }) => {




  const fields = form.getValues().teamMemberInformation.map((member, index) => (
    <Stack
      gap={15}
      pos={'relative'}
      key={member.key}
    >
      <ActionIcon pos={'absolute'} right={0} top={-5} variant="default" onClick={() => form.removeListItem('teamMemberInformation', index)}>
        <IconTrash width={16} height={16} opacity={0.6} />
      </ActionIcon>

      <TextInput
        // withAsterisk
        name='name'
        label="Project name or company"
        placeholder="Client name"
        size="lg"

        key={form.key(`teamMemberInformation.${index}.name`)}
        {...form.getInputProps(`teamMemberInformation.${index}.name`)}
      />

      <Textarea
        name='description'
        label="Details and achievements"
        placeholder="Detail your experience with the project or company"
        size="lg"
        key={form.key(`teamMemberInformation.${index}.description`)}
        {...form.getInputProps(`teamMemberInformation.${index}.description`)}
      />
    </Stack>
  ));




  return fields
}
