import LandingPage from './LandingPage';
import Tenant from './Tenant';
import "./App.css";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/veloxTenant" element={<Tenant />} />
    </Routes>
  );
}

export default App;
