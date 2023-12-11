import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div id="header-calc">
            <h1>Calculadora</h1>
        </div>
        <div id="display-calc">
            <input type="text" placeholder='0' />
        </div>
        <div id="numbers-calc">
          <div className='button-calc'>
            <button className='yellow-btn'>C</button>
            <button className='gray-btn'>/</button>
            <button className='gray-btn'>x</button>
            <button className='gray-btn'>-</button>
          </div>
          <div className='button-calc'>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className='gray-btn'>+</button>
          </div>
          <div className='button-calc'>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className='gray-btn'>,</button>
          </div>
          <div className='button-calc'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className='gray-btn'>%</button>
          </div>
          <div className='button-calc'>
            <button>0</button>
            <button className='red-btn'>=</button>
            
          </div>
        </div>
        <footer><p>By Basilio</p></footer>
      </div>
      
    </>
  )
}

export default App
