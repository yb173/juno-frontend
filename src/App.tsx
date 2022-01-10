import { VFC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import './App.css';

import { HomePage } from 'pages/HomePage/Home';
import { UsersPage } from 'pages/UsersPage';
import { AllUsersPage } from 'pages/UsersPage/AllUsersPage';
import { UserPage } from 'pages/UsersPage/UserPage';

export const App: VFC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="users" element={<UsersPage />}>
          <Route path="" element={<AllUsersPage />} />
          <Route path=":id" element={<UserPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
