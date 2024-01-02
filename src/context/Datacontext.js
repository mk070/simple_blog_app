import React, { useEffect, createContext } from 'react'
import useAxiosfetch from '../hooks/useAxiosfetch'
import useWindowsize from '../hooks/usewindowsize'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {format} from 'date-fns'
import api from '../api/post.js'

const Datacontext = createContext({})

export const DataProvider = ({children}) => {

    const [posts, setposts] = useState([])
    const [search, setsearch] =useState('')
    const [searchresult , setsearchresult] = useState([])
    const [posttitle, setposttitle] = useState('')
    const [postbody, setpostbody]= useState('')
    const [editbody, seteditbody]= useState('')
    const [edittitle, setedittitle]= useState('')
    const navigate = useNavigate()
    const {width} = useWindowsize()
    const {data, fetcherror, isloading} = useAxiosfetch('http://localhost:3500/posts')
  
  
    useEffect(() =>{
      setposts(data)
    }, [data])
  
    useEffect(() =>{
      const filterresults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))
      setsearchresult(filterresults.reverse())
    }, [posts, search])
  
  
  const handleedit = async (id) =>{
    const datetime  = format(new Date(),' MMMM dd , yyyy pp')
    const updatedpost = {id, title: edittitle, datetime, body: editbody}
    
    try{
      const response = await api.put(`/posts/${id}`,updatedpost)
      setposts(posts.map( post => post.id === id ? {...response.data} : post)) 
      setedittitle('')
      seteditbody('')
      navigate('/')
    }catch(err){
      alert("Erro ao deletar o Post")
    }
  }
  
    const handlesubmit = async (e) =>{
      e.preventDefault();
      const id = posts.length ? posts[posts.length - 1].id +1 : 1;
      const datetime  = format(new Date(),' MMMM dd , yyyy pp')
      const newpost = {id, title: posttitle, datetime, body: postbody}
      const response = await api.post('/posts', newpost)
      const allposts = [...posts, response.data];
      setposts(allposts)
      setposttitle('')
      setpostbody('')
      navigate('/')
  
    }
  
    const handledelete = async (id) =>{
      try{
        await api.delete(`/posts/${id}`)
        const postlist = posts.filter(post => post.id !==id)
        setposts(postlist)
        navigate('/')
      }catch(err){
        alert("Erro ao deletar o Post")
      }
    }

    return (
        <Datacontext.Provider value={{ 
            width,search, setsearch,searchresult,  fetcherror, isloading, handlesubmit , posttitle, setposttitle, postbody, setpostbody,
            posts ,handledelete, handleedit, editbody, seteditbody, edittitle, setedittitle
        }}>
            {children}
        </Datacontext.Provider>
    )
}

export default Datacontext;