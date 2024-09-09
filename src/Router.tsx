import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { LoginPage } from './pages/Login.page';
import { DashboardPage } from './pages/Dashboard.page';
import { ProductsOutlet } from './components/DashboardOutlet/Products.outlet';
import { OrdersOutlet } from './components/DashboardOutlet/Orders.outlet';

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
      }
    ]
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
