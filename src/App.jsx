import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './components/Toast';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout';

import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthPage from './pages/AuthPage';
import ForgotPassword from './pages/ForgotPassword';
import ForgotUsername from './pages/ForgotUsername';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import UsersAdmin from './pages/UsersAdmin';
import SystemsAdmin from './pages/SystemsAdmin';
import UserActivity from './pages/UserActivity';
import ActivityLog from './pages/ActivityLog';
import Settings from './pages/Settings';
import Forbidden from './pages/Forbidden';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <Routes>
            {/* Rutas publicas */}
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-username" element={<ForgotUsername />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/403" element={<Forbidden />} />

            {/* Rutas protegidas: requieren sesion activa */}
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                <Route path="/dashboard/settings" element={<Settings />} />

                {/* Rutas solo para administradores (verificadas tambien en backend) */}
                <Route element={<ProtectedRoute requiredRole="admin" />}>
                  <Route path="/dashboard/users" element={<UsersAdmin />} />
                  <Route path="/dashboard/systems" element={<SystemsAdmin />} />
                  <Route path="/dashboard/users/:id/activity" element={<UserActivity />} />
                  <Route path="/dashboard/activity" element={<ActivityLog />} />
                </Route>
              </Route>
            </Route>

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
