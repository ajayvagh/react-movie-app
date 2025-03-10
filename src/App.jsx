import { Routes, Route } from 'react-router-dom'

//Pages 
import HomePage from './pages/home';

import NavBar from './components/navbar';
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
