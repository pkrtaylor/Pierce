import React from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';
import { useState } from 'react';
import HeroSection from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footnote from './Footnote';

const MainPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  
  return (
      <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footnote/>
      </>
    
)
}

export default MainPage