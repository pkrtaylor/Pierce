import './App.css';
import React, { useState} from 'react';
import LoaderCrest from './components/LoaderCrest';
import MainPage from './components/MainPage';









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
    
      <div className='app'>
        {display}
      </div>
    
  );
}

export default App;
