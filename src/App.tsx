import { Navigate, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';

function App() {
  return (
    <Routes>
      <Route element={<Overview />} path="/" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}
export default App;
