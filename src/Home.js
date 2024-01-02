import React, { useContext } from 'react'
import Feed from './Feed'
import Datacontext from './context/Datacontext'

const Home = () => {
  const {searchresult,  fetcherror, isloading} =useContext(Datacontext)
  return (
        <main className='home'>
           {isloading && <p className='statusmsg'>Loading posts...</p>}
           {!isloading && fetcherror && <p className='statusmsg' style={{color: "red"}}>{fetcherror}</p>}
           {!isloading && !fetcherror && (searchresult.length ? <Feed  posts={searchresult} /> : <p className='statusmsg'>NO posts to display</p> )}
        </main>
    )
}

export default Home