import { IconLockPassword, IconMail } from '@tabler/icons-react';
import {
  Anchor,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Input,
  PasswordInput,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useAuth } from '@/hooks/auth.hook';

export function LoginPage() {
  const { login } = useAuth();
  return (
    <Container h="100vh">
      <Center h="100%">
        <Stack px="20px" py="40px">
          <Container mb="md">
            <Text>Welcome to SUITPOS!</Text>
            <Title order={1}>Log in to your Account.</Title>
          </Container>

          <Container w="100%">
            <Stack>
              <Input size="xs" placeholder="Email" leftSection={<IconMail size={16} />} />
              <PasswordInput
                size="xs"
                placeholder="Password"
                leftSection={<IconLockPassword size={16} />}
              />
            </Stack>
          </Container>

          <Container w="100%">
            <Group justify="space-between">
              <Checkbox
                size="xs"
                label={
                  <Text c="gray" size="xs">
                    Remember me
                  </Text>
                }
              />
              <Anchor size="xs" href="https://google.com" target="_blank">
                <Text fw="bold">Forgot Password?</Text>
              </Anchor>
            </Group>
          </Container>

          <Container w="100%">
            <Button w="100%" variant="filled" onClick={() => login('test', 'test')}>
              Log In
            </Button>
          </Container>
        </Stack>
      </Center>
    </Container>
  );
}
