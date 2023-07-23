import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

import {AnimatePresence, motion} from 'framer-motion'

function App() {


  return (
    <>
      <div className='App'>
        <Router>
          <Navbar/>
              <AnimatePresence>
                <Routes>
                  <Route path='/' Component={Home}/>
                  <Route path='/menu' Component={Menu}/>
                  <Route path='/about' Component={About}/>
                  <Route path='/contact' Component={Contact}/>
                 
                </Routes>
              </AnimatePresence>
          <Footer/>
        </Router>
        
      </div>
    </>
  )
}

export default App
