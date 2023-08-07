import React,{useEffect, useState} from 'react'
import styled, { keyframes } from 'styled-components';



const dash = keyframes`
  from {stroke-dashoffset: 1000;}
  to {stroke-dashoffset: 0;}
`


const MainContainer = styled.div`
  
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  

  #crestSymbol{
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 4s linear forwards;
    animation-timing-function: ease-in-out;
  }

  .crestDisperse{
   
    opacity: 0;
    scale: 0.1;
    transition: 1s ease;
  }

  .crest{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .P-hidden{
    
    opacity: 0;
    top: 27.5rem;
    left: 59.3rem;
  }

  .P-show{
    opacity: 1;
    transition: 1s ease;
}

`
const LoaderCrest = ({displayHandler}) => {
    const [isMounted, setIsMounted] = useState(false)
    const [crestFinished, setCrestFinished] = useState(false)
    
  
    useEffect(() => {
      setTimeout(() => setIsMounted(true), 2000);
      setTimeout(() => setCrestFinished(true), 3000);// turn this into function that naviagtes to main page or something
      setTimeout(() => displayHandler(), 4000)
    }, [displayHandler]);
  
    return (
     <MainContainer>
        
        <div className={crestFinished ? 'crestDisperse' : null}>
            <svg width="173" height="116" viewBox="0 0 163 106" fill="none" strokeLinecap='square' xmlns="http://www.w3.org/2000/svg">
            <path id='crestSymbol' d="M81.5 95L10 31.3817L22.806 8L81.5 8L140.194 8L153 31.3817L81.5 95Z" stroke="#F10808" stroke-width="5"/>
            
                <svg className={isMounted ? 'P-show' : 'P-hidden'} x='75' y='30' width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 31.5V0H27V4.5H31.5V18H27V22.5H9V31.5H0ZM9 18H22.5V4.5H9V18Z" fill="#F10808"/>
                </svg>
          
            </svg>




        </div>
  
  
  
     </MainContainer>
    );
}

export default LoaderCrest




/*

<div className={crestFinished ? 'crestDisperse' : null}>
          <svg className='crest' width="186" height="104" viewBox="0 0 186 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1_10)">
          <path id='crestSymbol' d="M91.2007 90.4005L93 91.7491L94.7993 90.4005L174.799 30.4385L177.045 28.7554L175.515 26.4027L161.187 4.36474L160.299 3H158.672L93 3L27.3284 3H25.7005L24.8132 4.36474L10.4849 26.4027L8.9552 28.7554L11.2007 30.4385L91.2007 90.4005Z" stroke="#F10808" stroke-width="6" shape-rendering="crispEdges"/>
          </g>
          
  
          <defs>
          <filter id="filter0_d_1_10" x="0.9104" y="0" width="184.179" height="103.498" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_10"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_10" result="shape"/>
          </filter>
          </defs>
          <svg className={isMounted ? 'P-show' : 'P-hidden'} x='83' y='25' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 31.5V0H27V4.5H31.5V18H27V22.5H9V31.5H0ZM9 18H22.5V4.5H9V18Z" fill="#F10808"/>
          </svg>
          </svg>
  
          
          {/* <svg className={isMounted ? 'P-show' : 'P-hidden'} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 31.5V0H27V4.5H31.5V18H27V22.5H9V31.5H0ZM9 18H22.5V4.5H9V18Z" fill="#F10808"/>
          </svg> }
        
          </div>

*/