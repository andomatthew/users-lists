import React from 'react'

export default function PersonnelCard(props) {

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='id-container'>
          <p className='is-size-5-mobile'>Personnel ID: {props.user.id.value}</p>
          <div>
            <span>&#8226;</span>
            <span>&#8226;</span>
            <span>&#8226;</span>
          </div>
        </div>
      </div>
      <div className='is-flex-mobile is-flex-tablet-only'>
        <div className='card-image is-flex-mobile is-align-items-center'>
          <figure className='image mx-5'>
            <img id='personnel-image' className='p-4' src={props.user.picture.large} />
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
          <p className='is-size-6 has-text-weight-light is-hidden-mobile is-hidden-tablet-only'>{props.user.email}</p>
        </div>
      </div>
    </div>
  )
}