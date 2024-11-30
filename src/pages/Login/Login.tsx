import { Button, Grid, Stack, Text, Title } from "@mantine/core";

export default function Login() {
  return (
    <Grid
      style={{ overflowX: 'hidden', overflowY: "hidden" }}
    >
      <Grid.Col
        span={8}
      >
        <Stack
          justify={'center'}
          align={'center'}
          h={'100vh'}
          gap={'10px'}
        >
          <img src="logo/logo.svg" height={300} width={300} />
          <Button
            w={200}
            bg="#5F14EF"
            style={{ alignItems: 'center' }}
          >
            Sign in with Slack
          </Button>
        </Stack>
      </Grid.Col>

      <Grid.Col
        bg={'#373A40'}
        px={60}
        span={4}
      >
        <Stack
          justify={'center'}
          align={'center'}
          h={'100vh'}
          gap={'50px'}
        >
          <Title
            size={"48px"}
            style={{ color: 'white' }}
          >
            The project managing tool you’ll enjoy using.
          </Title>
          <Text
            color="white"
          >
            Mission Board helps manage software projects, sprints, teams,
            and availability tracking. It is designed for high performance
            teams.
          </Text>
        </Stack>
      </Grid.Col>
    </Grid >
  )
}
