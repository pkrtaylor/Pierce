import React from 'react'
import styled from 'styled-components'


const Container = styled.div`

    min-height: 100vh;
   
    
    background-color: #0a192f;
    display: flex;
    justify-content: center;
    align-items: center;
    

`


const Wrapper = styled.div`

  width: 900px;
  padding: 0px 20px 0px 20px ;
  display: flex;
  flex-direction: column;
  
  .firstLine{
    color: #FF0000 ;
    font-size: clamp(14px,5vw,16px);
    font-weight: 400;
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 30px;
  }

  .secondLine{
    color: #ccd6f6;
    font-weight: 600;
    font-size: clamp(40px,8vw,80px);
    line-height: 1.1;
    font-family: 'Play', sans-serif;
    
  }

  .thirdLine{
    color: #8892b0;
    font-size: clamp(40px,8vw,80px);
    margin-top: 10px;
    font-family: 'Play', sans-serif;
  }
  .fourthLine{
    color: #8892b0;
    max-width: 540px;
    height: 80px;
    font-size: 20px;
    margin-top: 20px;
    font-family: 'Play', sans-serif;
  }
`


const HeroSection = () => {
  return (
    <Container>
        <Wrapper>
          <h1 className='firstLine'>Hi, my name is</h1>
          <h2 className='secondLine'>Pierce Ruddock.</h2>
          <h2 className='thirdLine'>I build things for the web.</h2>
          <p className='fourthLine'>I'm a software engineer that speacializes creating digital experiences. Currently, I'm focused on landing a position as a frontend developer at an amazing company.</p>
        </Wrapper>
    </Container>
  )
}

export default HeroSection