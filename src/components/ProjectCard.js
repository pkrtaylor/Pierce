import React from 'react'
import styled from 'styled-components'
import {FiGithub} from 'react-icons/fi'
import {FiExternalLink} from 'react-icons/fi'
import ImageSlider from './ImageSlider'
import { useInView } from 'react-intersection-observer';


const Container = styled.div`
   
    margin: 10px 10px;
    min-height: 370px;
    position: relative;
    display: grid;
    margin-bottom: 100px;
    

    @media screen and (max-width: 800px){
        height: 600px;
        width: 100vw;
    }


`

const Picture = styled.div`
    
    width: 580px;
    height: 100%;
    justify-self: ${({ toggleLeftOrRight }) => (toggleLeftOrRight ? null : 'end')};;
    position: relative;
    @media screen and (max-width: 800px){
        justify-self: center;
        height: 255px;
        width: 380px;
        
    }

`

const Description = styled.div`
    position: absolute;
    width: 500px;
    height: 300px;
    align-self: center;
    justify-self: ${({ toggleLeftOrRight }) => (toggleLeftOrRight ? 'end' : 'start')};
    display: flex;
    flex-direction: column;
    align-items: ${({ toggleLeftOrRight }) => (toggleLeftOrRight ? 'flex-end' : 'flex-start')};
    justify-content: center;
    @media screen and (max-width: 800px){
        position: relative;
        width: auto;
        align-items: center;

    }
    
    

`

const ProjectName = styled.h2`
    color: #FF0000;
    margin-bottom: 25px;
    cursor: pointer;
    &:hover{
        color: #911c1c;
        transition: .5s ease-in-out;
    }

`

const Desc = styled.p`

    text-align: ${({ toggleLeftOrRight }) => (toggleLeftOrRight ? 'end' : 'start')};
    color: #a8b2d1;
    background-color: #112240;
    padding: 25px;
`

const Tools = styled.ul`
    color: #FF0000;
    list-style: none;
    display: flex;
    margin-top: 25px;

    li{
        margin: ${({ toggleLeftOrRight }) => (toggleLeftOrRight ? '0px 0px 5px 20px' : '0px 20px 5px 0px')};
    }
`


const Icons = styled.div`

    display: flex;
    align-items: center;
    font-size: 22px;
    color: #ccd6f6;
    margin-top: 10px;
    width: 60px;
    justify-content: space-between;
    align-items: center;
    
    a{
        color: #ccd6f6;
    }

`

const GithubIcon = styled(FiGithub)`
    cursor: pointer;
    &:hover{
        color: #FF0000;
        transition: .5s ease-in-out;
    }

`

const ExternalLinkIcon = styled(FiExternalLink)`
    cursor: pointer;
    &:hover{
        color: #FF0000;
        transition: .5s ease-in-out;
    }
`

const ProjectCard = ({name, desc, tools, slides, toggleLeftOrRight, elink, github}) => {


    const { ref: ref1, inView: seeRef1} = useInView({triggerOnce: true});
    const { ref: ref2, inView: seeRef2} = useInView({triggerOnce: true});
    
  return (
    <Container>
        <Picture ref={ref1} className={seeRef1 ? 'show' : (toggleLeftOrRight ? 'hiddenLeft' : 'hiddenRight')} toggleLeftOrRight={toggleLeftOrRight}>
            <ImageSlider slides={slides}/>  
        </Picture>
        <Description ref={ref2} className={seeRef2 ? 'showY' : 'hiddenDown'} toggleLeftOrRight={toggleLeftOrRight}>
            <ProjectName>{name}</ProjectName>
            <Desc toggleLeftOrRight={toggleLeftOrRight}>{desc}</Desc>
            <Tools toggleLeftOrRight={toggleLeftOrRight}>
            {
                tools.map((tool)=>{
                    return(
                        <li key={tool}>{tool}</li>
                    )
                })
            }
            </Tools>
            <Icons>
            <a href={github}>
            <GithubIcon/>
            </a>
            <a href={elink}>
            <ExternalLinkIcon/>
            </a>
            </Icons>
        </Description>
    </Container>
  )
}

export default ProjectCard