import './App.css';
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import HeaderView from './components/header/header.jsx'; 
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path='/home' element={<LandingPage />} />
      <Route path='/store' element={<HeaderView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
