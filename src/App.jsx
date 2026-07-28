import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Nav-Bar'
import Hero from "./components/Hero";
import Features from "./components/FeaturesGrid";

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/Features' element={<Features/>} />


    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
