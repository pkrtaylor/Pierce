import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import workHistory from '../workHistory'


const Container = styled.section`

  min-height: 800px;
  background-color: #0a192f ;
  display: flex;
  justify-content: center;
  font-family: 'Play', sans-serif;

`

const Wrapper = styled.div`

    height: 500px;
    width: 700px;
    /* border: solid;
    border-color: white; */
    display: flex;
    flex-direction: column;
`

const Top = styled.div`

  
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;


`

const Bottom = styled.div`
  
  display: flex;

  @media screen and (max-width: 800px){
    flex-direction: column;
  }

  

`

const Heading = styled.h2`

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
        
      font-size:20px;
      width: 90%;
      &:after{

      }
      }



`

const LeftB = styled.div`
  flex: .25;
  

  @media screen and (max-width: 800px)
  {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 

`

const JobList = styled.ul`
  
  list-style: none;
  text-align: left;
  font-family: 'Play', sans-serif;
  font-size: 14px;
  width: 90%;
  .jobClass{

    padding: 15px;
    color: #8892b0;
    cursor: pointer;
    border-left: 0.1rem solid #233554;
  
    &:hover{
      background-color: #233554;
      color: #FF0000 ;
      transition: 0.5s all ease;
     

      
    }

    
  }

  .activeJobClass{
    
    padding: 15px;
    cursor: pointer;
    background-color: #233554;
    color: #FF0000 ;
    transition: 0.5s all ease;
    border-left: 1px solid #FF0000;
  }


  @media screen and (max-width: 800px){
    display: flex;
    text-align: center;
    width: auto;
    
    .jobClass{
    
    border-bottom: 0.1rem solid #233554;
    border-left: none;


    }
    .activeJobClass{
    border-bottom: 1px solid #FF0000;
    border-left: none;
  }
        }



`

// const Job = styled.li`
//   padding: 15px;
//   color: grey;
//   cursor: pointer;
//   border-left: 0.1rem solid #233554;
  
  


//   &:hover{
//     background-color: #233554;
//     color: #FF0000 ;
//     transition: 0.5s all ease;
    
//   }

 

// `

const RightB = styled.div`
  flex:.75;
  padding-top: 10px;
  
  @media screen and (max-width: 800px) {
    padding: 0px 10px 0px 10px;
  }
`

const Header = styled.h3`

  color: #ccd6f6 ;
  margin-bottom: 10px;

  span{
    color: #FF0000 ;
    cursor: pointer;
    margin-left: 5px;
  }

  @media screen and (max-width:800px)
  {
    margin-left: 20px;
  }

`

const WorkDuration = styled.div`
  color: #8892b0;
  margin-bottom: 25px;
  @media screen and (max-width: 800px){

  margin-left: 20px;
  font-size: 16px;

}
`

const JobDescriptions = styled.ul`
  color: #8892b0;
  list-style: none;
  list-style-position: inside;
  font-size: 18px;
  line-height: 1.7rem;
  text-align: left;


  li{
    margin-bottom: 10px;
    
    
  }


  li::before {
    content: "▹"; 
    color: red;
    margin-right: 15px;
    }


  @media screen and (max-width: 800px){

    margin-left: 20px;
    font-size: 16px;
    
  }
  
`






const Experience = () => {

  
  
  const [spotLight, setSpotLight] = useState(workHistory[0].id)
  const [spotLightData, setSpotLightData] = useState(workHistory[0].desc)
  const [spotLightName, setSpotLightName] = useState(workHistory[0].name)
  const handleChange = (id,desc,name) => {
    setSpotLight(id)
    setSpotLightData(desc)
    setSpotLightName(name)
  }
  console.log(spotLight)

  return (
    <Container id='experience'>
      <Wrapper>
        <Top>
          <Heading>Where I've Worked</Heading>
        </Top>
        <Bottom>
          <LeftB>
             <JobList>
              {
                workHistory.map(({id, name, desc}) =>{
                  return(
                    <li className={spotLight === id  ? 'activeJobClass' : 'jobClass' } onClick={()=>{handleChange(id,desc,name);}} key={id}>{name}</li>
                  )
                })
              }

             </JobList>
          </LeftB>
          <RightB>
              <Header> { spotLightData.title} <span>@ {spotLightName}</span> </Header>
              <WorkDuration> {spotLightData.timeWorked} </WorkDuration>
              <JobDescriptions>
                { spotLightData.workDesc.map((item)=>{
                  return (
                    <li key={item}>{item}</li>
                  )
                })}
              </JobDescriptions>
          </RightB>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Experience