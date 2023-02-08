import { Navigate, Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Overview from './pages/Overview';

function App() {
  return (
    <Routes>
      <Route element={<Overview />} path="/" />
      <Route element={<Detail />} path="/:id" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}
export default App;
