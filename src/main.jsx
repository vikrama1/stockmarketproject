import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Login from './pages/login';
import Signup from './pages/Signup';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
    <Route path="/features" element={<Features />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
      
  </BrowserRouter>
)
