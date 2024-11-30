import { v4 as uuidv4 } from 'uuid';

import { ActionIcon, Button, Container, Group, Stack, Title, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { PreviousExperience } from "./components/PreviousExperience";
import { ExperienceClients } from './components/ExperienceClients';
import { useTeamMemberStore } from '../../../store/use-team-member';
import { randomId } from '@mantine/hooks';
import { useForm } from '@mantine/form';

export interface Experience {
  id: string;
  project: string;
  details: string;
}


export const TeamMemberExperience = () => {

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      teamMemberInformation: [{
        name: '',
        description: '',
        key: randomId(),
      },]
    }
  })

  const addFields = () => {
    form.insertListItem('employees', { name: '', active: false, key: randomId() })
  }



  return (
    <Container w={'100%'} m={0}>
      <Stack
        px={20}
        py={30}
      >
        <Title>
          Team member experience
        </Title>
        <Stack
        >
          <Group
            justify="space-between"
          >
            <span style={{ opacity: 0.5 }}>
              Previous Experience
            </span>
            <Tooltip
              label={'Add new'}
              arrowSize={4}
              arrowPosition="side" arrowOffset={5}
              withArrow
              position="left"
            >
              <ActionIcon variant="default" color="gray" bg={'white'} onClick={addFields}>
                <IconPlus opacity={0.7} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Stack>

        <form>
          <Stack
            gap={40}
            style={{
              borderRadius: '10px',
              backgroundImage: 'repeating-linear-gradient(90deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(180deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(90deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(180deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px)',
              backgroundPosition: 'left top, right top, left bottom, left top',
              backgroundRepeat: 'repeat-x, repeat-y, repeat-x, repeat-y',
              backgroundSize: '100% 1px, 1px 100%, 100% 1px, 1px 100%'
            }}
            p={20}
          >
            {
              form.map((exp, key) => {
                return (
                  <PreviousExperience form={form} />
                )
              })
            }

            {/* luego de presionar el boton */}
            <Stack bg={'#F8F9FA'} p={10} style={{ borderRadius: '10px' }}>
              <Title size={'h4'}>
                Experience Units
              </Title>
              <Group justify='space-between' px={10} py={5} style={{ borderRadius: '10px' }} bg={'white'}>
                Experience description for a technology and description large
                <Button
                  disabled
                  style={{ cursor: "default", color: "black" }}
                >
                  React
                </Button>
              </Group>
            </Stack>
          </Stack>
        </form>
      </Stack >


      <Stack
        px={20}
        py={30}
      >
        <Stack
        >
          <Group
            justify="space-between"
          >
            <span style={{ opacity: 0.5 }}>
              Experience with clients
            </span>
            <Tooltip
              label={'Add new'}
              arrowSize={4}
              arrowPosition="side" arrowOffset={5}
              withArrow
              position="left"
            >
              <ActionIcon variant="default" color="gray" bg={'white'} onClick={addFields}>
                <IconPlus opacity={0.7} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Stack>

        <form>
          <Stack
            gap={40}
            style={{
              borderRadius: '10px',
              backgroundImage: 'repeating-linear-gradient(90deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(180deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(90deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px), repeating-linear-gradient(180deg, #ced4da, #ced4da 12px, transparent 12px, transparent 16px)',
              backgroundPosition: 'left top, right top, left bottom, left top',
              backgroundRepeat: 'repeat-x, repeat-y, repeat-x, repeat-y',
              backgroundSize: '100% 1px, 1px 100%, 100% 1px, 1px 100%'
            }}
            p={20}
          >
            {
              experiences.map((exp, key) => {
                return (
                  <ExperienceClients onDelete={() => { setExperiences((previewsValues) => previewsValues.filter(value => value.id !== exp.id)) }} key={key} />
                )
              })
            }

            {/* luego de presionar el boton */}
            <Stack bg={'#F8F9FA'} p={10} style={{ borderRadius: '10px' }}>
              <Title size={'h4'}>
                Experience Units
              </Title>
              <Group justify='space-between' px={10} py={5} style={{ borderRadius: '10px' }} bg={'white'}>
                Experience description for a technology and description large
                <Button
                  disabled
                  style={{ cursor: "default", color: "black" }}
                >
                  React
                </Button>
              </Group>
            </Stack>
          </Stack>
        </form>
      </Stack >

      <Stack align="end">
        <Button w={'fit-content'} size="md" bg={'#5F14EF'}>
          Generate Experience Units
        </Button>
      </Stack>
    </Container>
  );
};


