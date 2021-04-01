import React from 'react'
import gadjian_logo from '../assets/gadjian.png'
import avatar from '../assets/avatar_vector.jpg'

export default function Navbar() {
  
  return (
    <navbar className='navbar py-4'>
        <div className='container'>
          <div className='navbar-brand m-0 pl-3'>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
            <img className='gadjian-logo' src={gadjian_logo} alt='Gadjian Logo'/>
          </div>
          <div className='navbar-menu'>
            <div className='navbar-start'></div>
            <div className='navbar-end'>
            <p className='navbar-item is-size-4'>Halo, Gadjian User</p>
            <div className='navbar-item'>
                <img className='is-rounded' src={avatar} alt='avatar'/>
            </div>
            </div>
          </div>
        </div>
      </navbar>
  )
}