import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { OrdersOutlet } from './components/DashboardOutlet/Orders.outlet';
import { ProductsOutlet } from './components/DashboardOutlet/Products.outlet';
import { DashboardPage } from './pages/Dashboard.page';
import { HomePage } from './pages/Home.page';
import { LoginPage } from './pages/Login.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [
      {
        path: 'products',
        element: <ProductsOutlet />,
      },
      {
        path: 'orders',
        element: <OrdersOutlet />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
