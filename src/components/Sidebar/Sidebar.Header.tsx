import { useAuth } from "@/hooks/auth.hook";
import { ActionIcon, Avatar, Container, Group, Stack, Text } from "@mantine/core";
import { IconPower } from "@tabler/icons-react";

//TODO: Get S3 image from user
//TODO: Get user name from user
//TODO: PUT THE AVATAR AND USER DETAIL CLOSER.
export function SidebarHeader() {
  const { logout } = useAuth();
  return(
    <>
      <Group justify="space-between">
        <Avatar src="https://api.dicebear.com/9.x/micah/svg?seed=Felix" alt="it's me" variant="filled" />

        <Container p={0} m={0}>
          <Text size="md" fw={"bold"}>Franco Matos</Text>
          <Text size="xs" c="grey">FullStack Developer</Text>
        </Container>
        
        <Group>
          <ActionIcon size="lg" variant="light" color="red" radius={"md"} onClick={logout}>
            <IconPower />
          </ActionIcon>
        </Group>
      </Group>
    </>
  )
}