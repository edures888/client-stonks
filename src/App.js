import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import Loading from './components/Loading';
import ProtectedRoute from './auth/ProtectedRoute';
import Portfolio from './components/investments/Portfolio';
import SavingsWallet from './components/savingswallet/SavingsWallet';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage status="404" message="Not Found" />} />
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="/investments" element={<ProtectedRoute component={Portfolio} />} />
        <Route path="/savings" element={<ProtectedRoute component={SavingsWallet} />} />
      </Routes>
    </div>
  );
}

export default App;
