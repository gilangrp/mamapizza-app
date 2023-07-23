import React from 'react'

function MenuSpecials(name, image, price) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:{image}}}></div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default MenuSpecials