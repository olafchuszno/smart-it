// core
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router';
// components
import Login from 'pages/Login/Login.tsx';
import Logout from 'pages/Logout/Logout.tsx';
import ErrorPage from 'pages/ErrorPage/ErrorPage.tsx';
import UsersManagement from 'pages/UsersManagement/UsersManagement.tsx';
// styles
import About from 'pages/About/About.tsx';
import MainPage from 'pages/Main/Main.tsx';
import { routes } from 'constants/routes.ts';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute.tsx';
import MainLayout from 'pages/MainLayout/MainLayout.tsx';
import { useAuthContext } from 'contexts/AuthContext.tsx';

export const App: React.FC = () => {
  const { isLoggedIn } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path="/smart-it/" element={<Navigate to={routes.main.href} />} />

        <Route path={routes.main.href} element={<MainPage />} />

        <Route
          path={routes.usersManagement.href}
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
                <UsersManagement />
            </PrivateRoute>
          }
        />

        <Route path={routes.about.href} element={<About />} />

        <Route path={routes.login.href} element={<Login />} />

        <Route path={routes.logout.href} element={<Logout />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
