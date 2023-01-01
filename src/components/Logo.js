import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`

   cursor: pointer;
    &:hover{
        #P{
        fill: #D61A1A;
        fill-opacity: 0.2;
        
    }
    }

`

const Logo = () => {
  return (
    
    <SVG width="136" height="54" viewBox="0 0 445 278" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id='P' d="M222.5 273L3.99999 75.564L43.1343 3L222.5 3L401.866 3L441 75.564L222.5 273Z" stroke="#FF0000" stroke-width="15"/>
          <svg className='S' x='195' y='75' width="80" height="80" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 31.5V0H27V4.5H31.5V18H27V22.5H9V31.5H0ZM9 18H22.5V4.5H9V18Z" fill="#FF0000"/>
          </svg>
          
    </SVG>

    
  )
}

export default Logo


/*
 <svg className='crest' width="136" height="54" viewBox="0 0 186 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g  filter="url(#filter0_d_1_10)">
          <path id='P' d="M91.2007 90.4005L93 91.7491L94.7993 90.4005L174.799 30.4385L177.045 28.7554L175.515 26.4027L161.187 4.36474L160.299 3H158.672L93 3L27.3284 3H25.7005L24.8132 4.36474L10.4849 26.4027L8.9552 28.7554L11.2007 30.4385L91.2007 90.4005Z" stroke="#F10808" stroke-width="6" shape-rendering="crispEdges"/>
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
          <svg x='83' y='25' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 31.5V0H27V4.5H31.5V18H27V22.5H9V31.5H0ZM9 18H22.5V4.5H9V18Z" fill="#F10808"/>
          </svg>
          </svg>

*/