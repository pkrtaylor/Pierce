import React, { useEffect } from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import projects from '../projects.json'



const Container = styled.section`
    min-height: 100vh;
    background-color: #0a192f;
    display: flex;
    justify-content: center;
    font-family: 'Play', sans-serif;
    
`

const Wrapper = styled.div`
    
    width: 1000px;
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
   
`

const Top =  styled.div`
    
    height: 40px;
    margin: 10px;
    width: 700px;
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
        background: #ccd6f6
    }
    @media screen and (max-width: 800px){
        
        font-size: 20px;
        margin-left: 170px;
        width: 50%;
       
        
        }


`
const Projects = () => {

  
   
    
    
  return (
    <Container id='projects'>
        <Wrapper>
            <Top>
                <Header>Some Things I've Built</Header>
            </Top>
            {
                projects.map(({id, name, img, desc, tools, slides, github, elink})=>{

                        const toggleLeftOrRight = parseInt(id) % 2 === 0 ? true : false;
                        //true is right, left is false
                    return(
                        <ProjectCard 
        
                        key={id}
                        name={name}
                        img={img}
                        desc={desc}
                        tools={tools}
                        slides={slides}
                        github={github}
                        elink={elink}
                        toggleLeftOrRight={toggleLeftOrRight}/>
                    )
                })
            }
           
        </Wrapper>
    </Container>
  )
}

export default Projects