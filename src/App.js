import React from 'react';
import murom from './img/murom.jpg'
import Bio from './components/Bio'
import Knopki from './components/Knopki'

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <h2>Великий человек</h2>
      <img src={murom} alt="murom" width="200"/>
      <Bio />
      <Knopki />
    </div>
  )
}
}

export default App;
