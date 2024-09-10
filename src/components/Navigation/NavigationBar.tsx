import {
  IconBadgeTm,
  IconBuildingStore,
  IconBuildingWarehouse,
  IconReceipt,
  IconReportMoney,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Container, NavLink } from '@mantine/core';

export function NavigationBar() {
  const navigate = useNavigate();

  return (
    <Container p={4} pos="sticky" top={0} size="100%">
      <NavLink
        label="POS"
        leftSection={<IconBuildingStore size="1rem" stroke={1.5} />}
        onClick={() => navigate('/dashboard/pos')}
      />
      <NavLink
        label="Inventory"
        leftSection={<IconBuildingWarehouse size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink
          label="Products"
          leftSection={<IconBadgeTm size="1rem" stroke={1.5} />}
          onClick={() => navigate('/dashboard/products')}
        />
      </NavLink>
      <NavLink
        label="Sales"
        leftSection={<IconReportMoney size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink
          label="Orders"
          leftSection={<IconReceipt size="1rem" stroke={1.5} />}
          onClick={() => navigate('/dashboard/orders')}
        />
      </NavLink>
    </Container>
  );
}
