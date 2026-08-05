import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Nav-Bar'
import Hero from "./components/Hero";
import Features from "./components/FeaturesGrid";
import PricingSection from "./components/Pricing-Section";
import Footer from "./components/Footer";

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/Features' element={<Features/>} />
        <Route path='/PricingSection' element={<PricingSection/>} />
        <Route path='/Footer' element={<Footer/>} />
        

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
