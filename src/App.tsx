import { useState, useEffect } from 'react'
import './style.css'
import { Nav } from './components/Nav'
import { Top } from './components/Top'


function App() {

  return (
<div className="App">
      <div className='body'>
        <div className='body-par'>
          <Top/>
        
          <Nav/>
        </div>
      </div>
    </div>
  )
}

export default App
