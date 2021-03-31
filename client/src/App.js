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

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=28')
    .then(({data}) => setPersonnels(data.results))
  }, [])


  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = personnels.slice(indexOfFirstPost, indexOfLastPost)

  function setPage(action) {
    action === 'next' ? page++ : page--
    setCurrentPage(page)
  }

  console.log(
    currentPage, 'currentPage',
    page,'page',
    postPerPage, 'postPerPage'
  )

  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='columns'>
          <div className='column is-one-fifth is-hidden-mobile is-hidden-tablet-only'>
            <MenuList/>
          </div>
          <div className='column' style={{backgroundClip: 'content-box', backgroundColor: 'whitesmoke'}}>
            <PersonnelSection/>
            <div className='section'>
              <div className='columns'>
                {
                  currentPosts.map((user, index) => 
                    <div className='column' key={index}>    
                      <PersonnelCard user={user}/>
                    </div>
                  )
                }
              </div>
            </div>
            <footer className='container pb-5'>
              <div className='content has-text-centered'>
                <button disabled={currentPage === 1 ? true : false} onClick={() => setPage('previous')} className='button is-light'>Previous Page</button>
                <button disabled={currentPage === 7 ? true : false} onClick={() => setPage('next')} className='button is-light'>Next Page</button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
