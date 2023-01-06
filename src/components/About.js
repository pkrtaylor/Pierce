import React from 'react'
import styled from 'styled-components'
import selfie from '../images/selfie_2.png'
import { useInView } from 'react-intersection-observer';


const Container = styled.section`

  width: 100%;
  min-height: 100vh;
  background-color: rgb(10, 25, 47);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: 'Play', sans-serif;

`

const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  width: 1000px;
  @media screen and (max-width: 800px){
        
        width: 700px;
        
    }


`

const Top = styled.div`

 display: flex;
 align-items: center;
 justify-content: center;
 max-width: 540px;
 
 .header {
  color: #ccd6f6;
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 32px;
    display: flex;
    align-items: center;
    width: 100%;
    

    &:after{
        content: '';
        flex: 1;
        margin-left: 1rem;
        height: 1px;
        background: #8892b0
    }

    @media screen and (max-width: 800px){
        
      font-size:25px;
      width: 90%;
      &:after{

      }
      }
 }
 
 


`


const Bottom = styled.div`
display: flex;


@media screen and (max-width: 800px){
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

`







const PassageContainer = styled.div`
   
    color: #8892b0;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media screen and (max-width: 800px){
        
        
    }
    
`

const PassageInner = styled.div`

  width: 490px;
  //font-family: 'Changa', sans-serif;
  font-family: 'Play', sans-serif;
  
  ul{
  color: #8892b0;
  list-style: none;
  list-style-position: inside;
  column-count: 2;
  

  li::before {
    content: "▹"; 
    color: #FF0000;
    margin-right: 5px;}
  

  }

  @media screen and (max-width: 800px){
        
        width: 340px;
        ul{

          font-size:15px;
        }
    }
`

const Selfie = styled.div`

    
    width: 100%;
    height: 500px;
    position: relative;
    
    display: grid;
    
   
`

const P = styled.p`

  margin-bottom: 15px;
  font-size: 18px;

  @media screen and (max-width: 800px){
        
        font-size: 17px;
        line-height: 1.5rem;
        
    }

`

const Image = styled.div`

    border: solid;
    border-color: #FF0000;
    height: 400px;
    width: 300px;
    
    margin-top: 50px;
    margin-left: 75px;
    
    @media screen and (max-width: 800px){
        
        height: 300px;
        width: 200px;
        justify-self: center;
        margin-left: 40px;
        margin-top: 40px;
        
    }
   
`
const Image2 = styled.img`

    
    height: 400px;
    width: 300px;
    position: absolute;
    margin-top: 25px;
    object-fit: cover;
    margin-left: 50px;
    
    
   
    @media screen and (max-width: 800px){
        
        height: 300px;
        width: 200px;
        align-self: start;
        margin-left: 0px;
        justify-self: center;
        
        
    }
    
   
`









const About = () => {
  const { ref: ref1, inView: seeRef1} = useInView({triggerOnce: true});
  const { ref: ref2, inView: seeRef2} = useInView({triggerOnce: true});
  const { ref: ref3, inView: seeRef3} = useInView({triggerOnce: true});

  return (
    <Container id='about'>
      <Wrapper>
          <Top>
            <h2 ref={ref1} className={`header ${seeRef1 ? 'show' : 'hiddenLeft'}`}>About Me</h2>
          </Top>
          <Bottom>
            <PassageContainer ref={ref2} className={seeRef2 ? 'show' : 'hiddenLeft'}>
              <PassageInner>
              <P>As a passionate and driven software developer, I am excited to bring ideas to life on the internet. My interest in web development was sparked by an older cousin in high school and grew into a true love during college.</P>
              <P> I have had the privilege of working with a start-up tech company and recently had the opportunity to contribute to a clothing brand that merges fashion and tech to provide a unique user experience. I hold a degree in computer science and am committed to staying up-to-date on the latest software development trends.</P>
              <P>Here are a few technologies I am proficient in:</P>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>ThirdWeb</li>
              </ul>
              </PassageInner>
            </PassageContainer>
            <Selfie ref={ref3} className={seeRef3 ? 'show' : 'hiddenRight'}>
                <Image/>
                <Image2 src={selfie}/>
            </Selfie>
          </Bottom>
      </Wrapper>
    </Container>
  )
}

export default About