import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll'
import {BiMenuAltRight} from 'react-icons/bi'
import pdf from '../Resume_2023.pdf'



const Nav = styled.nav`
   background-color: #0a192f;
   height: 80px;
   font-family: 'Play', sans-serif;
   /* margin-top: -80px; */
   //display: flex;
   //justify-content: center;
   //align-items: center;
   position: sticky;
   top: 0;
   z-index: 10;
   //font-size: 1rem;
   

   &.active{
    background-color: rgba(10, 25, 47,0.5); 
    backdrop-filter: blur(5px);
   }
   @media screen and (max-width: 960px){
    transition: 0.8s all ease;
   }
`
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    //max-width: 1100px; this was causing problems //content would not reach the end 
`
const NavLogo = styled(LinkScroll)`

    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    
`

const MobileIcon = styled.div`

    display: none;
    

    @media screen and (max-width:768px)
    {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`

const NavMenu = styled.ul`
   
   /* display: flex;
   justify-content: center;
   align-items: center; */
    color: white;
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

   
   
   @media screen and (max-width: 768px)
   {
    display: none;
   }
   
`

const NavItem = styled.li`

    /* color: white;
    list-style: none;
    padding: 0 10px;
    margin: 0 10px; */
   height: 80px;
`

const NavLinks = styled(LinkScroll)`
    color: lightgray;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
  
    /* &.active {
        color: #FF0000;
        border-bottom: 3px solid #FF0000;
        transition: .2s ease-in-out;

        
    } */

    &:hover{
        color: #FF0000;
        border-bottom: 3px solid #FF0000;
        transition: .2s ease-in-out;
    }
`
const NavButton = styled.a`

    background-color: transparent;
    width: 85px;
    height: 40px;
    border-radius: 5px;
    color: #FF0000;
    cursor: pointer;
    margin-right: 20px;
    border: 1px solid #FF0000 ;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover{
        
        background: rgb(94,30,30,0.6);
        transition: .2s ease-in-out;
        
       
    }
    

`

const Navbar = ({toggle}) => {
  
    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    console.log(navbar)

    window.addEventListener('scroll', changeBackground)
  return (
    <>
        <Nav className={navbar ? 'active' : ''}>
            <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <Logo/>
                    </NavLogo>
                    <MobileIcon>
                    <BiMenuAltRight onClick={toggle}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass='active'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass="active" 
                            >Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass="active">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={80}
                            activeClass="active">Contact</NavLinks>
                        </NavItem>
                        <NavButton href={pdf} target="_blank">Resume</NavButton>
                    </NavMenu>
            </NavContainer>
        </Nav>
    </>
  )
}

export default Navbar