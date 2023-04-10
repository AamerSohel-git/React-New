import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import News from './News'
import Contact from './Contact'
import About from './About'
import NavBar from './NavBar'

const RoutingComp = () => {
  return (
    <div>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutingComp