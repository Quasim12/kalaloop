import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs'
import logo from '../assets/logo.jpeg'  // Logo import

const Navbar = ({ setData, cart }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    setData(element)
  }

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price)
    setData(element)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  return (
    <>
      <header 
        className='sticky-top' 
        style={{ 
          backgroundColor: '#000', // dark background for white text visibility
          padding: '10px 20px', 
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)' 
        }}
      >
        <div 
          className="nav-bar" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap' 
          }}
        >
          {/* Logo + Kalaloop text */}
          <Link 
            to={'/'} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              textDecoration: 'none' 
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: '40px', objectFit: 'contain' }} 
            />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              Kalaloop
            </span>
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSubmit}
            className="search-bar"
            style={{
              width: '100%',
              maxWidth: '300px',
              flexShrink: 0,
              flexGrow: 1
            }}
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder='Search Products'
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
          </form>

          {/* Cart Button */}
          <Link to={'/cart'} className="cart">
            <button 
              type="button" 
              className="btn btn-primary position-relative" 
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <BsFillCartCheckFill style={{ fontSize: '1.5rem' }} />
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                style={{ fontSize: '0.75rem' }}
              >
                {cart.length}
                <span className="visually-hidden">cart items</span>
              </span>
            </button>
          </Link>
        </div>

        {/* Filters shown only on home page */}
        {
          location.pathname === '/' && (
            <div 
              className="nav-bar-wrapper" 
              style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}
            >
              <div className="items" style={{ fontWeight: 'bold' }}>Filter by {"->"}</div>
              <div onClick={() => setData(items)} className="items" style={{ cursor: 'pointer' }}>packaging supplies</div>
              <div onClick={() => filterByCategory('product condition')} className="items" style={{ cursor: 'pointer' }}>product condition</div>
              <div onClick={() => filterByCategory('writing instruments')} className="items" style={{ cursor: 'pointer' }}>writing instruments</div>
              <div onClick={() => filterByCategory('paper products')} className="items" style={{ cursor: 'pointer' }}>paper products</div>
              <div onClick={() => filterByPrice(29999)} className="items" style={{ cursor: 'pointer' }}>cutting tools</div>
              <div onClick={() => filterByPrice(49999)} className="items" style={{ cursor: 'pointer' }}>painting and arts supply</div>
              <div onClick={() => filterByPrice(69999)} className="items" style={{ cursor: 'pointer' }}>measuring tools</div>
              <div onClick={() => filterByPrice(89999)} className="items" style={{ cursor: 'pointer' }}>adhesives products</div>
            </div>
          )
        }
      </header>
    </>
  )
}

export default Navbar
