import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Datacontext from './context/Datacontext'

const Nav = () => {
  const {search, setsearch} = useContext(Datacontext)
  return (
    <nav className='nav'> 
      <form className='searchform' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input type="text" id='search' placeholder='Search post' value={search} onChange={(e) => setsearch(e.target.value)}/>
      </form>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/postpage'>Post</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

    </nav>
  )
}

export default Nav