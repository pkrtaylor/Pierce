import React from 'react'
import styled from 'styled-components'
import selfie from '../images/selfie_2.png'



const Container = styled.section`

  width: 100%;
  min-height: 100vh;
  background-color: #0a192f;
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


const Header = styled.h2`

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


  return (
    <Container id='about'>
      <Wrapper>
          <Top>
            <Header>
              About Me
            </Header>
          </Top>
          <Bottom>
            <PassageContainer>
              <PassageInner>
              <P>Hello! My name is Pierce and one thing I love doing is making ideas come alive on the internet. My Interest for web development started small with a little suggestion from an older cousin, while in high school. This then turned into a something more when I entered college. It was there, I fell in love with the world of software.</P>
              <P>Coming back to the present, I have had the priviledge of working with a start up tech company, graduating college with a computer science degree and more. My main focus these days is staying up to date on software development topics, while also trying to start my career in tech.</P>
              <P>I also, recently had the opportunity to work with a clothing brand that combines fashion and tech to give users a whole new experience. </P>
              <P>Here are a few technologies I’ve been working with recently:</P>
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
            <Selfie>
                <Image/>
                <Image2 src={selfie}/>
            </Selfie>
          </Bottom>
      </Wrapper>
    </Container>
  )
}

export default About