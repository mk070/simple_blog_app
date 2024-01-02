import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Datacontext from './context/Datacontext'

const Postpage = () => {
  const {posts ,handledelete} = useContext(Datacontext)
  const {id} =useParams()
  const post =posts.find(post => (post.id).toString() === id)
  return (
   <main className='postpage'>
    <article className='post'>
      {post &&
        <>
          <h2>{post.title}</h2>
          <p className='postdate'> {post.datetime}</p>
          <p className='postbody'> {post.body}</p>
          <Link to={`/postpage/edit/${post.id}`}>
            <button style={{background:'green', marginRight:'10px'}}>Edit post</button>
          </Link>
          
          <button onClick={() =>{ handledelete(post.id)}}>Delete post</button>
        </>

      }

      {!post &&
      <>
        <h2>Post not found</h2>
        <p>well that sad bro😒</p>
        <Link to='/'>Vist HomePage</Link>
      </>

      }
    </article>
   </main>
  )
}

export default Postpage