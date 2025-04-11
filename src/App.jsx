import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'; 
import './App.css'
import Footer from './Components/Footer';
import ProfilePage from './Pages/ProfilePage';
import AboutPage from './Pages/AboutPage';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App