import React from 'react'
import gadjian_logo from '../assets/gadjian.png'
import avatar from '../assets/avatar_vector.jpg'
import MenuList from './MenuList'
import { useState } from 'react'

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const navbarBurger = 'navbar-burger'
  const navbarMenu = 'navbar-menu'
  const navbarBurgerActive = 'navbar-burger is-active'
  const navbarMenuActive = 'navbar-menu is-active'
  
  return (
    <div className='navbar py-4'>
        <div className='container'>
          <div className='navbar-brand m-0 px-3 is-flex is-justify-content-space-between is-align-items-center'>
            <div className='is-flex is-align-items-flex-end'>
              <button onClick={()=> setOpen(!open)} className={ open? navbarBurgerActive : navbarBurger } data-target='navMenu' aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
              <img className='gadjian-logo' src={gadjian_logo} alt='Gadjian Logo'/>
            </div>
            <div id='user-logo-mobile' className='is-hidden-desktop'>
              <figure className='image is-48x48'>
                <img className='is-rounded' src={avatar} alt='avatar' />
              </figure>
            </div>
          </div>
          <div className={open ? navbarMenuActive : navbarMenu} id='navMenu'>
            <div className='navbar-start' id='menuList'>
              <MenuList/>
            </div>
            <div className='navbar-end is-flex is-align-items-center is-hidden-mobile is-hidden-tablet-only pr-5'>
              <p className='navbar-item is-size-4'>Halo,</p>
              <p className='is-size-4 pr-4' style={{color: '#1cbfbd'}}>Gadjian User</p>
              <figure className='image is-48x48'>
                <img className='is-rounded' src={avatar} alt='avatar' />
              </figure>
            </div>
          </div>
        </div>
      </div>
  )
}