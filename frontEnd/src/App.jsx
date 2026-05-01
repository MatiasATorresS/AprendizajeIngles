import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import HomeUser from './pages/HomeUser';
import NotFound from './components/NotFound';
import Users_Admin from './pages/Users_Admin';
import Statistics from './pages/Statistics';
import Materials from './pages/Materials';
import MaterialDetail from './pages/MaterialDetail';
import Exercises from './pages/Exercises';
import UserStat from './pages/UserStat';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<HomeUser />} />
        <Route path="/users" element={<Users_Admin />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:id" element={<MaterialDetail />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path='/user-statistics' element={<UserStat/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
