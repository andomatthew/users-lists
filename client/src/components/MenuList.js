import React from 'react'


export default function MenuList() {

  return(
    <ul className='menu-list'>
      <li>
        <a>
          <span className='material-icons md-18'>home</span>
          <p className='is-size-5 has-text-weight-bold ml-3'>Beranda</p>
        </a>
      </li>
      <li>
        <a style={{color: '#1cbfbd'}}>
          <span className='material-icons'>groups</span>
          <p className='is-size-5 has-text-weight-bold ml-3'>Personnel List</p>
        </a>
      </li>
      <li>
        <a>
          <span className='material-icons'>today</span>
          <p className='is-size-5 has-text-weight-bold ml-3'>Daily Attendance</p>
        </a>
      </li>
    </ul>
  )
}