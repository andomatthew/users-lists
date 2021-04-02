import './App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PersonnelCard from './components/Card'
import Navbar from './components/Navbar.js'
import MenuList from './components/MenuList'
import PersonnelSection from './components/PersonnelSection'
import importScript from './hooks/scriptHook'
import { fetchPersonnels } from './store/action'

function App() {

  // hook for enable script
  importScript('./helpers/script')
  
  const dispatch = useDispatch()
  const personnels = useSelector(state => state.personnels )
  const loading = useSelector(state => state.loading)
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
  
  useEffect(() => {
    dispatch(fetchPersonnels())
  }, [])

  
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

  if(loading) {
    return <h1>Loading...</h1>
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
            <PersonnelSection filteredPersonnels={filteredPersonnels} />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
