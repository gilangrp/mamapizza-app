import React from 'react'
import { Facebook } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Facebook/><Instagram/><LinkedIn/><Twitter/>
        </div>
        <p>&copy; gilangpizza.com</p>
    </div>
  )
}

export default Footer