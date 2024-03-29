import './App.css';
import LandingPage from './pages/LandingPage/index';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import { AuthPageView } from './pages/auth/authPage';
import { StoreView } from './pages/shop/StoreView';
import { Staff } from './pages/staff/staffForm';
import { Leaderboard } from './pages/leaderboard/leaderboardPage'
import CommunityPage from './pages/Community/Community';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path='/home' element={<LandingPage />} />
      <Route path="/invite" element={<Link to="/" />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
      <Route path='/store' element={<StoreView />} />
      <Route path='/auth' element={<AuthPageView />} />
      <Route path='/staff' element={<Staff />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;