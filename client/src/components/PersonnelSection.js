import React from 'react'

export default function PersonnelSection() {

  return(
    <div className='section p-0'>
      <div className='columns m-0'>
        <div className='column'>
          <div className='columns m-0' style={{padding: '0.75rem', backgroundClip: 'content-box', backgroundColor: 'white'}}>
            <div className='column'>
              <div style={{display: 'flex', flexDirection:'column', paddingLeft: '0.5rem'}}>
                <p className='subtitle is-3 m-0 has-text-primary'>Personnel List</p>
                <p >List of all personnel</p>
              </div>
            </div>
            <div className='column' style={{display: 'flex', justifyContent: 'flex-start'}}>
              <div className='level'>
                <div className='level-item p-2' style={{display: 'block'}}>
                  <input className='input' type='text' placeholder='Find Personnels' />
                </div>
                <div className='level-item p-2' style={{display: 'flex', justifyContent: 'flex-start'}}>
                  <button className='button'>Add Personnel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}