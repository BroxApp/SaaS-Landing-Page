import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Nav-Bar'
import Home from "./components/Home";
import Order from "./components/Order";
import About from "./components/About";
import Footer from "./components/Footer";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Order' element={<Order/>} />
      <Route path='/Footer' element={<Footer/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
