import './App.css';
import React, { useState} from 'react';
import LoaderCrest from './components/LoaderCrest';
import MainPage from './components/MainPage';
import styled from 'styled-components';




const AppContainer =styled.div`
  overflow: clip;
`





function App() { 

  const [moveToMain, setMoveToMain] = useState(false)
  function displayHandler(){
    setMoveToMain(true)
  }

  let display = <LoaderCrest displayHandler={displayHandler}/>

  if(moveToMain)
  {
    display = <MainPage/>
  }
  

  return (
    <AppContainer>
      {display}
    </AppContainer>
  );
}

export default App;
