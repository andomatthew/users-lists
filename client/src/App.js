import React from 'react'
import gadjian_logo from './assets/gadjian.png'
import avatar from './assets/avatar_vector.jpg'

function App() {

  return (
    <div className="App">
      <navbar className='navbar py-4'>
        <div className='container'>
          <div className='navbar-brand'>
            <img src={gadjian_logo} alt='Gadjian Logo' style={{height: '60px', width: '180px'}}/>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className='navbar-menu'>
            <div className='navbar-start'></div>
            <div className='navbar-end'>
            <p className='navbar-item '>Halo, Gadjian User</p>
            <div className='navbar-item'>
                <img className='is-rounded' src={avatar} alt='avatar'/>
            </div>
            </div>
          </div>
        </div>
      </navbar>
      <div className='columns'>
        <div className='column is-one-fifth is-hidden-mobile is-hidden-tablet-only'>
        <aside class="menu">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">
    Transactions
  </p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside>
        </div>

      </div>
    </div>
  );
}

export default App;
