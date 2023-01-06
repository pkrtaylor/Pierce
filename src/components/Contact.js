import React from 'react'
import styled from 'styled-components'
import pdf from '../Resume_2023.pdf'
import { useInView } from 'react-intersection-observer';

const Container = styled.section`

  height: 700px;
  background-color: #0a192f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Play', sans-serif;

`

const Wrapper = styled.div`

  
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

`

const Heading =styled.h2`

  color: #ccd6f6;
  font-size: 45px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    font-size: 35px;
  }


`

const Text = styled.p`
  color: #8892b0;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    padding:10px;
  }
`
const ContactButton = styled.a`

    background-color: transparent;
    width: 140px;
    height: 55px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FF0000;
    cursor: pointer;
    margin: 15px;
    border: 1px solid #FF0000 ;
    text-decoration: none;
    
    &:hover{
        
        background: rgb(94,30,30,0.6);
        transition: .2s ease;
        
        
       
    }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-top: 50px;
`


const Contact = () => {
  const { ref: ref1, inView: seeRef1} = useInView({triggerOnce: true});
  const { ref: ref2, inView: seeRef2} = useInView({triggerOnce: true});
  const { ref: ref3, inView: seeRef3} = useInView({triggerOnce: true});
  return (
    <Container id='contact'>
      <Wrapper>
        <Heading ref={ref1} className={seeRef1 ? 'showY' : 'hiddenDown'}>Get In Touch</Heading>
        <Text ref={ref2} className={seeRef2 ? 'showY' : 'hiddenDown' }>I’m currently looking for new work opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll definetly get back to you!</Text>
        <ButtonContainer ref={ref3} className={seeRef3 ? 'showY' : 'hiddenDown' } >
          <ContactButton href="mailto:ruddockpierce@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</ContactButton>
          <ContactButton href={pdf} target="_blank">Resume</ContactButton>
        </ButtonContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact