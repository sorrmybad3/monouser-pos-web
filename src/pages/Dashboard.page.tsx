import { Outlet } from 'react-router-dom';
import { Grid } from '@mantine/core';
import { Navigation } from '@/components/Navigation/Navigation';

export function DashboardPage() {
  return (
    <>
      <Grid>
        <Grid.Col span={2} pos="relative">
          <Navigation />
        </Grid.Col>
        <Grid.Col span={10} py="20px">
          <Outlet />
        </Grid.Col>
      </Grid>
    </>
  );
}
