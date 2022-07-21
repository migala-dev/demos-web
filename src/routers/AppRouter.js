import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from 'pages/Layout';
import HomePage from 'pages/HomePage';
import PrivacyPage from 'pages/PrivacyPage';
import RepositoriesPage from 'pages/RepositoriesPage';
import CommentsPage from 'pages/CommentsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/repositorios" element={<RepositoriesPage />} />
          <Route path="/comentarios" element={<CommentsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;