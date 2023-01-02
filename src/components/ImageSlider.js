import React, {useState} from 'react'
import styled from 'styled-components'

const Slider = styled.div`

  height: 100%;
  width: 100%;
  
  
  

`

const Slide = styled.div`

  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  //background-image: ${({currentSlides, currentIndex}) => (`url(${currentSlides[currentIndex].url})`)};
  background-image: ${({currentSlides, currentIndex}) => (currentSlides.length > 0 ? (`url(${currentSlides[currentIndex].url})`): '')};
  
   
 //background-image: url("/images/DC1_3.png");
 //note to self : make sure image are in public folder, you dont even have to add the ../ just /foldername/imagename.png for path

 display: grid;

`

const DotsContainer = styled.div`

  
  
  display: flex;
  align-self: end;
  justify-self: center;
  

`

const Dots = styled.div`

  margin-right: 10px;
  margin-bottom: 4px;
  
  cursor: pointer;

`


const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const gotToSlide = (slideIndex) =>{

    setCurrentIndex(slideIndex);
  }
  return (
    <Slider>
      <Slide currentSlides={slides} currentIndex={currentIndex}>
        <DotsContainer>
        {slides.map((slide, slideIndex)=> {
          return(
            <Dots key={slideIndex} onClick={()=>{gotToSlide(slideIndex);}}>⬤</Dots>
          )
        })}
      </DotsContainer>
      </Slide>
      
    </Slider>
  )
}

export default ImageSlider