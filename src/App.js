import './App.css';
import HeaderView from './components/header/header.jsx'; 
import LandingPage from './pages/LandingPage/index';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import { AuthPageView } from './pages/auth/authPage';
import StoreView from './pages/shop/store.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/invite" element={<Link to="/sadasd" />}/>
      <Route path='/home' element={<LandingPage />} />
      <Route path='/store' element={<StoreView />} />
      <Route path='/auth' element={<AuthPageView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
