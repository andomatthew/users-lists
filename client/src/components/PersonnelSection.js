import React, { useState } from 'react'
import PersonnelCard from './Card'

export default function PersonnelSection({ personnels }) {

  const [currentPage, setCurrentPage] = useState(1)
  //helper for setting current page
  let page  = currentPage
  const [postPerPage] = useState(4)
  const [searchedPersonnel, setSearchPersonnel] = useState([])

   //get current displayed personnels
   const indexOfLastPost = currentPage * postPerPage
   const indexOfFirstPost = indexOfLastPost - postPerPage
   const currentPosts = personnels.slice(indexOfFirstPost, indexOfLastPost)
   
   //get filtered displayed personnels
   const currentFilteredPosts = searchedPersonnel.slice(indexOfFirstPost, indexOfLastPost)

   function setPage(action) {
    action === 'next' ? page++ : page--
    setCurrentPage(page)
  }

  function filteredPersonnels(e) {
    const input = e.toLowerCase()
    const filteredPersonnel = personnels.filter((personnel) => {
      const personnelFirstName = personnel.name.first.toLowerCase()
      return personnelFirstName.includes(input)
    })
    setSearchPersonnel(filteredPersonnel)
  }


  return(
    <>
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
      <div className='section'>
        <div className='columns is-justify-content-space-around'>
          {
            currentFilteredPosts.length === 0 ?
            currentPosts.map((user, index) => 
              <div className='column card-container' key={index}>    
                <PersonnelCard user={user}/>
              </div>)
            :
            currentFilteredPosts.map((filteredUser, index) => 
              <div className='column card-container' key={index}>    
                <PersonnelCard user={filteredUser}/>
              </div>)
          }
        </div>
      </div>
      <div className='button-container'>
        <button 
          disabled={currentPage === 1 ? true : false} 
          onClick={() => setPage('previous')} 
          className='button is-light'
          >Previous Page
        </button>
        <button
          disabled={ currentPage === 7 || (currentFilteredPosts.length > 0 && currentFilteredPosts.length < 4) ? true : false }
          onClick={() => setPage('next')} 
          className='button is-light'
          >Next Page
        </button>
      </div>  
    </>
  )
}