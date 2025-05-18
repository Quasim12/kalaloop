import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { AiOutlineUpload } from 'react-icons/ai'
import logo from '../assets/logo.jpeg'

const Navbar = ({ setData, cart }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  // Disabled filtering functions (not used since sections won't be clickable)
  // You can keep or remove these if you want

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log("Selected file:", file)
      // Handle file upload here if needed
    }
  }

  // Style for non-clickable filter items
  const disabledFilterStyle = {
    cursor: 'default',
    userSelect: 'none',
    color: '#ccc',
    padding: '5px 10px',
    borderRadius: '4px',
  }

  return (
    <>
      <header
        className='sticky-top'
        style={{
          backgroundColor: '#000',
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

          {/* Cart and Upload Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <Link to={'/cart'} className="cart" style={{ textDecoration: 'none' }}>
              <button
                type="button"
                className="btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 18px',
                  borderRadius: '6px',
                  border: '2px solid #007bff',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  position: 'relative',
                  minWidth: '110px',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0056b3'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#007bff'; }}
              >
                <BsFillCartCheckFill style={{ fontSize: '1.4rem' }} />
                Cart
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.75rem', transform: 'translate(-50%, 50%)' }}
                >
                  {cart.length}
                  <span className="visually-hidden">cart items</span>
                </span>
              </button>
            </Link>

            <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
              <input
                type="file"
                id="file-upload"
                accept="image/*"
                capture="environment"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <div
                style={{
                  display: 'flex',
                  marginLeft:'40px',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 18px',
                  borderRadius: '6px',
                  border: '2px solid #28a745',
                  backgroundColor: '#e6f4ea',
                  color: '#28a745',
                  fontWeight: '600',
                  fontSize: '1rem',
                  userSelect: 'none',
                  minWidth: '110px',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#28a745'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#e6f4ea'
                  e.currentTarget.style.color = '#28a745'
                }}
              >
                <AiOutlineUpload style={{ fontSize: '1.3rem' }} />
                Upload
              </div>
            </label>
          </div>
        </div>

        {/* Filters shown only on home page (disabled) */}
        {
          location.pathname === '/' && (
            <div
              className="nav-bar-wrapper"
              style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}
            >
              <div className="items" style={{ fontWeight: 'bold', cursor: 'default' }}>Filter by</div>

              {/* All these are disabled: no onClick, cursor default */}
              <div className="items" style={disabledFilterStyle}>suggested products</div>
              <div className="items" style={disabledFilterStyle}>writing instruments</div>
              <div className="items" style={disabledFilterStyle}>paper products</div>
              <div className="items" style={disabledFilterStyle}>cutting tools</div>
              <div className="items" style={disabledFilterStyle}>painting and arts supply</div>
              <div className="items" style={disabledFilterStyle}>measuring tools</div>
              <div className="items" style={disabledFilterStyle}>adhesives products</div>
            </div>
          )
        }
      </header>
    </>
  )
}

export default Navbar
