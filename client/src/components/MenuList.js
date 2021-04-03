import React from 'react'


export default function MenuList() {

  return(
    <ul className='menu-list'>
      <li>
        <button className='button button-list'>
          <div className='is-flex is-justify-content-flex-start'>
            <span className='material-icons md-18'>home</span>
            <p className='is-size-5 has-text-weight-bold ml-3'>Beranda</p>
          </div>
        </button>
      </li>
      <li>
        <button className='button button-list' style={{color: '#1cbfbd'}}>
          <div className='is-flex is-justify-content-flex-start'>
            <span className='material-icons'>groups</span>
            <p className='is-size-5 has-text-weight-bold ml-3'>Personnel List</p>
          </div>
        </button>
      </li>
      <li>
        <button className='button button-list'>
          <div className='is-flex is-justify-content-flex-start'>
            <span className='material-icons'>today</span>
            <p className='is-size-5 has-text-weight-bold ml-3'>Daily Attendance</p>
          </div>
        </button>
      </li>
    </ul>
  )
}