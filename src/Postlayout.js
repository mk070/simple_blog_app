import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Postlayout = () => {
  return (
    <>
    
      <Link to='/postpage/1'>Post 1</Link><br />
      <Link to='/postpage/2'>Post 2</Link><br />
      <Link to='/postpage/3'>Post 3</Link><br />
      <Link to='/postpage/newpost'>Newpost</Link>
      
      <Outlet></Outlet>

    </>
  )
}

export default Postlayout