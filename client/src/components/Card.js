import React, { useState } from 'react'

export default function PersonnelCard(props) {

  return (
    <div className='card' style={{borderRadius: '10px', boxShadow: 'none'}}>
      <div className='card-header' style={{borderBottomColor: 'whitesmoke', marginBottom: '3px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 10px'}}>
          <p className='is-size-5-mobile'>Personnel ID: {props.user.id.value === 'undefined' ? String(new Date()) : props.user.id.value}</p>
          <div>
            <span>&#8226;</span>
            <span>&#8226;</span>
            <span>&#8226;</span>
          </div>
        </div>
      </div>
      <div className='is-flex-mobile is-flex-tablet-only'>
        <div className='card-image'>
          <figure className='image'>
            <img className='p-4' src={props.user.picture.large} style={{borderRadius: '50%'}} />
          </figure>
        </div>
        <div className='card-content'>
          <p className=' is-size-7 is-size-6-mobile has-text-weight-bold'>Name</p>
          <p className=' is-size- 6 has-text-weight-light is-size-4-mobile'>{props.user.name.first} {props.user.name.last}</p>
          <p className=' is-size-7 is-size-6-mobile has-text-weight-bold'>Telephone</p>
          <p className=' is-size-6 has-text-weight-light is-size-4-mobile'>{props.user.phone}</p>
          <p className='is-size-7 has-text-weight-bold is-hidden-mobile is-hidden-tablet-only'>Birthday</p>
          <p className='is-hidden-mobile is-hidden-tablet-only'>
            {
              props.user.dob.date.slice(8,10) + "-" + props.user.dob.date.slice(5, 7)
            }
          </p>
          <p className='is-size-7 has-text-weight-bold is-hidden-mobile is-hidden-tablet-only'>Email</p>
          <p className=' is-size-6 has-text-weight-light is-hidden-mobile is-hidden-tablet-only'>{props.user.email}</p>
        </div>
      </div>
    </div>
  )
}