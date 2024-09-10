import {
  IconBadgeTm,
  IconBuildingStore,
  IconBuildingWarehouse,
  IconReceipt,
  IconReportMoney,
  IconChartHistogram
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from '@mantine/core';

export function NavigationBar() {
  const navigate = useNavigate();

  return (
    <>
      <NavLink
        label="Overview"
        leftSection={<IconChartHistogram size="1rem" stroke={1.5} />}
        onClick={() => navigate('/dashboard/overview')}
      />
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
    </>
  );
}
