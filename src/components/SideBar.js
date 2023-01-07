import React from 'react'
import styled from 'styled-components'
import {TfiClose} from 'react-icons/tfi'
import Logo from './Logo'
import { Link as LinkS, animateScroll as scroll} from 'react-scroll'
import pdf from '../Resume_2023.pdf'


const Container = styled.aside`
   
    display: none;
    transition: 0.3s ease-in-out;
    font-family: 'Play', sans-serif;
    @media screen and (max-width: 768px){
    position: fixed;
    z-index: 999; //since we want sidebar to be above everything 
    width: 100vw;
    height: 100%;
    background:#0a192f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    }

    
`

const CloseIcon = styled(TfiClose)`
    color: #FF0000 ;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
`
const Crest = styled(LinkS)`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    
`
const SideBarWrapper = styled.div`
 color:#FF0000 ;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`

const SideBarMenu = styled.ul`

    

`

const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: lightgrey;
    margin-bottom: 20px;
    cursor: pointer;

    &:hover{
        color: #FF0000;
        transition: 0.2s ease-in-out;
    }
`

const NavButton = styled.a`
    margin-top: 50px;
    background-color: transparent;
    width: 140px;
    height: 55px;
    border-radius: 5px;
    color: #FF0000;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 1px solid #FF0000 ;
    
    &:hover{
        
        background: rgb(94,30,30,0.6);
        
        
       
    }
    

`



const SideBar = ({toggle, isOpen}) => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
  return (
    <Container onClick={toggle} isOpen={isOpen}>
        <Crest onClick={()=>{ toggle(); toggleHome();}}>
            <Logo/>
        </Crest>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink 
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active'
                onClick={toggle}>About</SideBarLink>
                <SideBarLink 
                to='experience'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active'
                onClick={toggle}>Experience</SideBarLink>
                <SideBarLink 
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active' 
                onClick={toggle}>Projects</SideBarLink>
                <SideBarLink 
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active' 
                onClick={toggle}>Contact</SideBarLink>
            </SideBarMenu>
            <NavButton href={pdf} target="_blank">Resume</NavButton>
        </SideBarWrapper>
    </Container>
  )
}

export default SideBar