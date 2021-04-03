import './App.css'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar.js'
import MenuList from './components/MenuList'
import PersonnelSection from './components/PersonnelSection'  
import { fetchPersonnels } from './store/action'

function App() {
  
  const dispatch = useDispatch()
  const personnels = useSelector(state => state.personnels )
  const loading = useSelector(state => state.loading)
  
  useEffect(() => {
    dispatch(fetchPersonnels())
  }, [dispatch])

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
            <PersonnelSection personnels={personnels} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
