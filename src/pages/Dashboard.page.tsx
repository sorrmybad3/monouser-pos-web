import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mantine/core';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export function DashboardPage() {
  return (
    <>
      <Grid px={4} py={"xl"}>
        <Grid.Col span={2} pos="relative">
            <Sidebar />
        </Grid.Col>
        <Grid.Col span={10} py="20px">
          <Outlet />
        </Grid.Col>
      </Grid>
    </>
  );
}
