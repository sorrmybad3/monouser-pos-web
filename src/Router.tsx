import { Route, Routes } from 'react-router-dom';
import { OrdersOutlet } from './components/DashboardOutlet/Orders.outlet';
import { PosOutlet } from './components/DashboardOutlet/Pos.outlet';
import { ProductsOutlet } from './components/DashboardOutlet/Products.outlet';
import { DashboardPage } from './pages/Dashboard.page';
import { HomePage } from './pages/Home.page';
import { LoginPage } from './pages/Login.page';
import { ProtectedRoute } from './wrappers/route.wrappers';

export function Router() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/login" Component={LoginPage} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      >
        <Route path="products" Component={ProductsOutlet} />
        <Route path="orders" Component={OrdersOutlet} />
        <Route path="pos" Component={PosOutlet} />
      </Route>
    </Routes>
  );
}
