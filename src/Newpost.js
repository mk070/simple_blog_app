import React, { useContext } from 'react'
import Datacontext from './context/Datacontext'

const Newpost = () => {
  const {handlesubmit, posttitle, setposttitle, postbody, setpostbody} = useContext(Datacontext)
  return (
    <main className='newpost'>
      <h2>New post</h2>
      <form action="" className='newpostform'  onSubmit={handlesubmit}>
        <label htmlFor="posttitle">Title:</label>
        <input type="text" id='posttitle' value={posttitle} onChange={(e)=> setposttitle(e.target.value)} required/>
        <label htmlFor="postbody">Post:</label>
        <textarea name="" id="postbody" required value={postbody} onChange={(e) => setpostbody(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default Newpost