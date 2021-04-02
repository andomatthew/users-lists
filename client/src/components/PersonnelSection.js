import React from 'react'

export default function PersonnelSection({ filteredPersonnels }) {


  return(
    <div className='section p-0'>
      <div className='columns m-0'>
        <div className='column'>
          <div className='columns m-0 personnel-section-container'>
            <div className='column'>
              <div>
                <p id='subtitle' className='subtitle is-3 m-0 has-text-weight-bold'>Personnel List</p>
                <p className='is-size-5'>List of all personnel</p>
              </div>
            </div>
            <div className='level is-justify-content-flex-end p-3'>
              <div className='p-2'>
                <div className='control has-icons-left mr-0'>
                  <input
                    onChange={(e) => filteredPersonnels(e.target.value)}
                    className='input'
                    type='text'
                    placeholder='Find Personnels'
                  />
                  <span
                    id='search-logo'
                    className='material-icons icon is-left'
                    > search
                  </span>
                </div>
              </div>
              <div className='p-2'>
                <button className='button button-add-personnel'>
                  <div className='is-flex is-justify-content-space-between'>
                    <p>ADD PERSONNEL</p> <span className='material-icons is-flex'>add</span> 
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}