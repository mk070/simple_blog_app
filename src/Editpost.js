import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Datacontext from './context/Datacontext'

const Editpost = () => {
    const {posts, handleedit, editbody, seteditbody, edittitle, setedittitle} = useContext(Datacontext)
    const {id}  =useParams()
    const post = posts.find(post => (post.id).toString() === id)

    useEffect (() =>{
        if( post ) {
            setedittitle(post.title)
            seteditbody(post.body)
        }
    }, [post, seteditbody, setedittitle])
    return (
        <main className='newpost'>
            {edittitle &&
            <>
                <h2>Edit Post</h2>
                <form action="" className='newpostform' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="" id=""  value={edittitle} onChange={(e) => setedittitle(e.target.value)} required/>
                    <label htmlFor="postbody">Post:</label>
                    <textarea name="" id="postbody" value={editbody} onChange={(e) => seteditbody(e.target.value)}></textarea>
                    <button type='submit' onClick={() => handleedit(post.id)}>Submit</button>
                </form>
            </>}
        </main>
  )
}

export default Editpost