import React, { useEffect, useState } from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItems from '../components/MenuItems'
import '../styles/menu.css'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import CartImage from '../assets/shopping.svg'


function Menu() {
  const [openModal, setOpenModal] = useState(false)

// useEffect(() => {
//  let eventHandler = () => {
  
//  }
//   document.addEventListener('click', eventHandler)
// })
  return (
    
    <motion.div className='menu'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {MenuList.map((value, key) => {
        return (
          openModal && <Modal closeModal={setOpenModal} name={value.name[key]}
          image={value.image} price={value.price}/>
        
        )
      })}
     
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList' onClick={(MenuList) => {
        
      
      }}>


        {MenuList.map((menuItem, key) => {
          key = { key }
          return (<MenuItems image={menuItem.image}
            name={menuItem.name} price={menuItem.price} 
            onClicks={setOpenModal}
             />

            )
           
        })}
      </div>

    </motion.div>
  )
}

export default Menu