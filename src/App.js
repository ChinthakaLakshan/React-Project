import React from 'react'

import {Brand, CTA , Navbar} from './components';

import{Blog , Header , Footer , Features , Posssibility , Whatsapp} from './containers';

import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar/>
      <Header/>
      
      </div>
    <Brand/>
    <Whatsapp/>
    <Features/>
    <Posssibility/>
    <CTA/>
    <Blog/>
    <Footer/>

    </div>
  )
}

export default App
