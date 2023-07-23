import React from 'react'
import '../styles/modal.css'
import Pictures from '../assets/images/pepperoni.jpg'
function Modal({ closeModal, name, image, price }) {
    return (
        <div className='modalBackground' onClick={() => {
            closeModal(false)
        }}>
            <div className='modalContainer'>
                <h1 className='title'>Pepperoni Pizza</h1>

                <div className='content'>
                    <div className='image' style={{ backgroundImage: `url(${Pictures})` }} />
                    <div className='contentText'>
                        <p className='description'>
                            Our pizza menu is carefully crafted, using fresh and high-quality ingredients. You can choose from various types 
                            of dough, ranging from traditional to gluten-free, according to your preferences and needs. Abundant toppings such as delicious
                             cheese, beef, chicken, fresh vegetables, and signature sauces will provide delightful flavors in every bite.

                        </p>
                        <p className='price'>Rp. 150.000</p>
                        <div className='button'>
                            <button className='addToCart'>Tambah Keranjang</button>
                            <button onClick={() => {
                                closeModal(false)
                            }} className='x'>X</button>
                        </div>
                    </div>

                </div>
                <p className='star'>⭐⭐⭐⭐</p>

            </div>
        </div>

    )
}

export default Modal