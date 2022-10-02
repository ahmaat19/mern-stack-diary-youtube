import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const { pathname } = useLocation()
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav '>
            <li className='nav-item fs-4 title'>
              <Link
                className={pathname === '/' ? 'active nav-link' : 'nav-link'}
                to='/'
              >
                Personal Diary
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link
                className={
                  pathname === '/register' ? 'active nav-link' : 'nav-link'
                }
                to='/register'
              >
                Register
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  pathname === '/login' ? 'active nav-link' : 'nav-link'
                }
                to='/login'
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
