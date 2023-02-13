import React from 'react'
import {useState} from 'react'

function App() {
    const [color, setColor] = useState('white')
    
    return (
      <div className="App" style={{backgroundColor: color}}>
        <ColorButtons action={setColor}/>
      </div>
    )
  }
  
  function ColorButtons({action}) {
  
    return (
      <div>
        <button onClick={() => action('red')}>Red</button>
        <button onClick={() => action('blue')}>Blue</button>
        <button onClick={() => action('green')}>Green</button>
      </div>
    )
  }
  
export default App;