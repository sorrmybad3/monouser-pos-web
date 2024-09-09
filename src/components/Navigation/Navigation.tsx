import { Container, NavLink } from '@mantine/core';
import { IconGauge, IconHome2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function Navigation() {

  const navigate = useNavigate();

  return (
    <Container p={4} pos={"sticky"} top={0} size={"100%"}>
      <NavLink
        href="#required-for-focus"
        label="Inventory"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink
        href="#required-for-focus"
        label="Products"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        onClick={() => navigate('/dashboard/products')}
        />
      </NavLink>
      <NavLink
        href="#required-for-focus"
        label="Sales"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink
        href="#required-for-focus"
        label="Orders"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        onClick={() => navigate('/dashboard/orders')}
        />
      </NavLink>
    </Container>
  );
}
