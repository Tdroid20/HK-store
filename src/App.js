import './App.css';
import LandingPage from './pages/LandingPage/index';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import { AuthPageView } from './pages/auth/authPage';
import { StoreView } from './pages/shop/StoreView';
import { ProfileView } from './pages/profile/profilePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path='/home' element={<LandingPage />} />
      <Route path="/invite" element={<Link to="/" />}/>
      <Route path='/store' element={<StoreView />} />
      <Route path='/auth' element={<AuthPageView />} />
      <Route path='/profile' element={<ProfileView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
