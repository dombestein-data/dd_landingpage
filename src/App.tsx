import LandingPage from './LandingPage';
import Tenant from './velox/Tenant';
import NAA from './focaline/azureAdminApproval';
import "./App.css";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/velox/tenant" element={<Tenant />} />
      <Route path="/focaline/NAA" element={<NAA />} />
    </Routes>
  );
}

export default App;
