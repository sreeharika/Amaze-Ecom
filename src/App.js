import React from 'react';
import './App.css';
import './index.css';
import data from './data'

function App(){

  const openMenu = ()=>{
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = ()=>{
    document.querySelector('.sidebar').classList.remove('open');
  }

  return(
    <div className='grid-container'>
      <header className='header'>
        <div className='brand'>
          <button onClick={openMenu}>
            &#9776;
          </button>
          <a href='index.html'>AMAZE ECOM</a>
        </div>
        <div className='header-links'>
          <a href='Signin.html'>Signin</a>
          <a href='Cart.html'>Cart</a>
        </div>
      </header>
      <aside className='sidebar'>
        <h3>Shooping Categories</h3>
        <button className='sidebar-close-btn' onClick={closeMenu}>X</button>
        <ul>
          <li>
            <a href='index.html'>Shirts</a>
          </li>
          <li>
          <a href='index.html'>T-Shirts</a>
          </li>
          <li>
          <a href='index.html'>Pants</a>
          </li>
        </ul>
        </aside>
      <main className='main'>
        <div className='content'>
        <ul className='products'>
          {
        data.products.map(product => 
           <li>
            <div className='product'>
              <img className='product-image' src={product.image} alt='product' />
              <div className='product-name'>
        <a href='product.html'>{product.name}</a>
                </div>
        <div className='product-brand'>{product.brand}</div>
        <div className='product-price'>{product.price}</div>
              <div className='product-rating'>{product.rating} Star({product.numReviews}Reviews)</div>
            </div>
          </li>
          )
          }
        </ul>
        </div>
      </main>
      <footer className='footer'>
        All right reserved
      </footer>

    </div>
  )
}

export default App;
