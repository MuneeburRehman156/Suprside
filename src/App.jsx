import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkDetailPage from './pages/WorkDetailPage';

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<WorkDetailPage />} path="/work/:projectId" />
      <Route element={<Navigate replace to="/" />} path="*" />
    </Routes>
  );
}

export default App;
