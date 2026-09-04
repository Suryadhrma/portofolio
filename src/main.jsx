import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'


import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ once: true, duration: 700 });

import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <div className="container mx-auto px-4">
    <App />
    <Footer/>
    </div>
  </StrictMode>,
)
