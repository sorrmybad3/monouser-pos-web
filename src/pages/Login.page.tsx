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
import { useAuth, useLoginForm } from '@/hooks/auth.hook';

export function LoginPage() {
  const { login } = useAuth();
  const { form } = useLoginForm();
  return (
    <Container h="100vh">
      <Center h="100%">
        <form onSubmit={form.onSubmit(login)}>
          <Stack px="20px" py="40px">
            <Container mb="md">
              <Text>Welcome to SUITPOS!</Text>
              <Title order={1}>Log in to your Account.</Title>
            </Container>

            <Container w="100%">
              <Stack>
                <Input
                  size="xs"
                  placeholder="Email"
                  leftSection={<IconMail size={16} />}
                  key={form.key('email')}
                  {...form.getInputProps('email')}
                />
                <PasswordInput
                  size="xs"
                  placeholder="Password"
                  leftSection={<IconLockPassword size={16} />}
                  key={form.key('password')}
                  {...form.getInputProps('password')}
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
              <Button w="100%" variant="filled" type="submit">
                Log In
              </Button>
            </Container>
          </Stack>
        </form>
      </Center>
    </Container>
  );
}
