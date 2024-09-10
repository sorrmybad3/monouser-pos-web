import { Container, Title } from "@mantine/core";
import { NavigationBar } from "../Navigation/NavigationBar";
import { SidebarHeader } from "./Sidebar.Header";

export function Sidebar() {
  return(
    <Container pos="sticky" top={0} size="100%">
      <Container mb={"3rem"}>
        <SidebarHeader />
      </Container>
      
      <NavigationBar />
    </Container>
  )
}