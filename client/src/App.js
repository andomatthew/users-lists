import './App.css'
import React, { useEffect, useState } from 'react'
import PersonnelCard from './components/Card'
import Navbar from './components/Navbar.js'
import MenuList from './components/MenuList'
import PersonnelSection from './components/PersonnelSection'
import axios from 'axios'

function App() {

  const [loading, setLoading] = useState(false)
  const [personnels, setPersonnels] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(4)
  let page  = currentPage
  const [searchedPersonnel, setSearchPersonnel] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=28')
    .then(({data}) => setPersonnels(data.results))
  }, [])


  //current post
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = personnels.slice(indexOfFirstPost, indexOfLastPost)

  //filtered post
  const currentFilteredPosts = searchedPersonnel.slice(indexOfFirstPost, indexOfLastPost)

  function setPage(action) {
    action === 'next' ? page++ : page--
    setCurrentPage(page)
  }

  function filterPersonnel(e) {
    const filteredPersonnel = personnels.filter((personnel) => {
      return personnel.name.first.toLowerCase().includes(e)
    })
    setSearchPersonnel(filteredPersonnel)
  }


  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='columns'>
          <div className='column is-one-fifth is-hidden-mobile is-hidden-tablet-only'>
            <MenuList/>
          </div>
          <div className='column personnel-section-column'>
            <PersonnelSection filterPersonnel={filterPersonnel}  />
            <div className='section'>
              <div className='columns is-justify-content-space-around'>
                {
                  currentFilteredPosts.length === 0 ?
                  currentPosts.map((user, index) => 
                    <div className='column card-container' key={index}>    
                      <PersonnelCard user={user}/>
                    </div>
                  )
                  :
                  currentFilteredPosts.map((filteredUser, index) => 
                    <div className='column card-container' key={index}>    
                      <PersonnelCard user={filteredUser}/>
                    </div>
                  )
                }
              </div>
            </div>
              <div className='button-container'>
                <button disabled={currentPage === 1 ? true : false} onClick={() => setPage('previous')} className='button is-light'>Previous Page</button>
                <button disabled={currentPage === 7 || (currentFilteredPosts.length > 0 && currentFilteredPosts.length < 4) ? true : false} onClick={() => setPage('next')} className='button is-light'>Next Page</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
