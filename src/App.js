import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Nav from './Nav.js'
import Home from './Home.js'
import Newpost from './Newpost.js'
import Postpage from './Postpage.js'
import Missing from './Missing.js'
import About from './About.js'
import { useEffect, useState } from 'react';
import {format} from 'date-fns'
import { Route, Routes, useNavigate } from 'react-router-dom';
import api from './api/post.js'
import Editpost from './Editpost.js';
import useWindowsize from './hooks/usewindowsize.js';
import useAxiosfetch from './hooks/useAxiosfetch.js';
import { DataProvider } from './context/Datacontext.js';

function App() {
 

 return (
    <div className="App">
      <DataProvider>
        <Header title='MK social-media' />
        <Nav />

        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/postpage'>
            <Route index element={<Newpost />} />  
            <Route path=':id' element={<Postpage  />}/>
            <Route path='edit/:id' element={<Editpost />}></Route>
          </Route>
        
          <Route path='/about' element={<About />} />
          <Route path='*' element={ <Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
