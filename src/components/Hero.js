import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect'

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
  const { ref: ref1, inView: seeRef1,} = useInView({
    triggerOnce: true
  });
  const { ref: ref2, inView: seeRef2} = useInView({
    triggerOnce: true
  });
  



  return (
    <Container>
        <Wrapper>
          <div ref={ref1} className={seeRef1 ? 'show' : 'hiddenLeft'}>
          <h1 className='firstLine'>
            <Typewriter
            options={{
              loop: true,
            }}
              onInit={(typewriter) =>{
                typewriter
                .pauseFor(1000)
                .typeString("Hi, my name is")
                .pauseFor(5000)
                .deleteAll()
                .start()
              }}
            />
          </h1>
          <h2 className='secondLine'>Pierce Ruddock.</h2>
          </div>
          <div ref={ref2} className={seeRef2 ? 'show' : 'hiddenRight'} >
          <h2 className='thirdLine'>I make ideas come to life on the web.</h2>
          <p className='fourthLine'>I am a front-end developer with a strong foundation in creating intuitive and engaging user interfaces. I am looking for a company where I can work on challenging projects and continue to develop my skills, with a long-term goal of becoming a full-stack developer.</p>
          </div>
        </Wrapper>
    </Container>
  )
}

export default HeroSection