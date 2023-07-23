import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/images/pizzahomepage.png'
import Banner1 from '../assets/images/banner1.jpg'
import Banner2 from '../assets/images/banner2.jpg'
import '../styles/home.css'
import '../styles/menu.css'
import { MenuListSpecial } from '../helpers/MenuListSpecial'
import { motion } from 'framer-motion'
import { About } from '../helpers/About'
import { Button } from '@mui/material'
function Home() {

  return (
    <motion.div
      className='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Landing Page */}

      <div className='headerContainer' style={{backgroundImage:`url(${Banner1})`}}>
        <h1>Gilang's Pizza</h1>
        <p>Whatever the question <br></br><span style={{ color: "red", fontWeight: 'bold' }}>
          Pizza </span>is the answer.</p>
        <Link to='/menu'>
          <button style={{ marginTop: '70px' }}>ORDER NOW</button>
        </Link>
      </div>
      {/* Landing Page */}


      {/* Special Pizza */}
      <div className=' special-pizza'>
        <h1>MENU</h1>
        <span></span>
        <p>SPECIAL PIZZA</p>
        <div className='list-product'>
          {MenuListSpecial.map((value, key) => {
            return (
              <div className='product'>
                <div className='product-image' style={{ backgroundImage: `url(${value.image})` }}></div>
                <h3>{value.name}</h3>
                <i>{value.desc}</i>
              </div>
            )
          })}

        </div>
        <Link to='./menu'>
          <button>All Menu</button>
        </Link>
      </div>
      {/* Special Pizza */}

      {/* Banner 1 */}
      <div className='banner-1' style={{ backgroundImage: `url(${Banner1})` }}>

        <h1>DELICIOUS <br /> TASTY.</h1>
      </div>
      {/* Banner 1 */}

      {/* ABOUT */}
      <div className='about'>
        <h1>ABOUT</h1>
        <span></span>
        <p>SINCE 1998</p>
        <div className='list-about'>
          {About.map((value, key) => {
            return (
              <div className='content-about'>
                <div className='image-about' style={{ backgroundImage: `url(${value.image})` }}></div>
                <h3>{value.name}</h3>
                <i>{value.desc}</i>
              </div>
            )
          })}
        </div>
      </div>
      {/* ABOUT */}


      {/* Banner 2 */}
      <div className='banner-1' style={{
        backgroundImage: `url(${Banner2})`,
        margin: '100px 0px'
      }}>

        <h1>MADE <br /> WITH <span style={{ color: 'red' }}>LOVE.</span></h1>
      </div>
      {/* Banner 2 */}
    </motion.div>
  )
}

export default Home