import { ActionIcon, Stack, Textarea, TextInput } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'

interface ExperienceState {
  onDelete: () => void
}


export const ExperienceForm: React.FC<ExperienceState> = ({ onDelete }) => {

  return (
    <Stack
      gap={20}
      pos={'relative'}
      style={{
        borderRadius: '10px',
        backgroundImage: 'repeating-linear-gradient(90deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(180deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(90deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(180deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px)',
        backgroundPosition: 'left top, right top, left bottom, left top',
        backgroundRepeat: 'repeat-x, repeat-y, repeat-x, repeat-y',
        backgroundSize: '100% 1px, 1px 100%, 100% 1px, 1px 100%'
      }}
      p={20}

    >
      <ActionIcon pos={'absolute'} right={20} top={10} variant="default" onClick={onDelete}>
        <IconTrash width={16} height={16} opacity={0.6} />
      </ActionIcon>

      <TextInput
        // withAsterisk
        label="Project name or company"
        placeholder="Client name"
        size="lg"
      // key={form.key('email')}
      // {...form.getInputProps('email')}
      />

      <Textarea
        label="Details and achievements"
        placeholder="Detail your experience with the project or company"
        size="lg"
      />
    </Stack>
  )
}
