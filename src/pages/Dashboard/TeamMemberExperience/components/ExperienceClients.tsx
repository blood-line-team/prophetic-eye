import { ActionIcon, Stack, Textarea, TextInput } from '@mantine/core'
import { IconSearch, IconTrash } from '@tabler/icons-react'

interface ExperienceClients {
  onDelete: () => void
}


export const ExperienceClients: React.FC<ExperienceClients> = ({ onDelete }) => {

  return (
    <Stack
      gap={15}
      pos={'relative'}
    >
      <ActionIcon pos={'absolute'} right={0} top={-5} variant="default" onClick={onDelete}>
        <IconTrash width={16} height={16} opacity={0.6} />
      </ActionIcon>

      <TextInput
        // withAsterisk
        label="Client"
        placeholder="Client name"
        size="lg"
        // key={form.key('email')}
        // {...form.getInputProps('email')}
        aria-label="Clear input"
        leftSection={
          <IconSearch width={25} height={25} />
        }
      />

      <Textarea
        label="Details and achievements"
        placeholder="Detail your experience with the client"
        size="lg"
      />
    </Stack>
  )
}
