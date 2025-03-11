import { Routes, Route } from 'react-router-dom'

//Pages 
import HomePage from './pages/home';
import FavPage from './pages/fav';

import NavBar from './components/navbar';
import './App.css'


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fav-list" element={<FavPage />} />
      </Routes>
    </>
  )
}

export default App
