import React from 'react';

import Routes from './routes'
import {VerticleButton as ScrollUpButton} from 'react-scroll-up-button'
import './App.css';

function App() {
  const buttonUpStyle = {
    backgroundColor: 'rgba(165, 42, 42, 0.705)',
    marginRight: '-20px',
    outline: 'none'
  }
  return (
    <div className="App">
      <Routes/>
      <ScrollUpButton 
        style={buttonUpStyle} 
        StopPosition={0}
        
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={1000} 
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
      />
    </div>
  );
}

export default App;
