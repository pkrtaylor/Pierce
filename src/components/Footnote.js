import React from 'react'
import styled from 'styled-components'


const Container = styled.footer`

  height: 50px;
  background-color: #0a192f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Play', sans-serif;
  
  a{
    text-decoration: none;
    
  }
  
`
const Text = styled.div`
  color: #8892b0;
  
  &:hover{
    color:#FF0000;
  }
`
const Footnote = () => {
  return (
    <Container>
    <a href='' rel='noopener noreferrer' target="_blank">
      <Text clas>
      Designed & Built by Pierce Ruddock Taylor
      </Text>
    </a>  
    </Container>
  )
}

export default Footnote