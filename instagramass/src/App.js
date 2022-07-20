import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import '../src/Style/style.css'
import Signup from './component/Signup';
import Login from './component/Login'
import LandingPage from './pages/LandingPage';
import Dashboard from './component/Dashboard';
import Profile from './component/Profile';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Slideshow from './component/Slideshow';
import EditProfile from './component/EditProfile';
import Postpics from './component/Postpics';

function App() {
  const token = localStorage.token
  return (
      <>
      <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
      </Routes>
            {/* < Navbar/> */}
      <Routes>
            <Route path='/dashboard/*' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            {/* <Route path='/home/*' element={<Home/>}/> */}
            <Route path='/slide' element={<Slideshow/>}/>
            <Route path='/edit' element={<EditProfile/>}/>
            <Route path='/upload' element={<Postpics/>}/>
      </Routes>
      </>
  );
}

export default App;
