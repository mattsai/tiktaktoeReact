import { useState } from 'react'
import './App.css'


//later will be cat and dog 
const TURNS = {
  X: 'X',
  O: 'O'
}


const Square = ({children,udpateBoard,index})=>{
  return(
    <div className='square'>
        {children}
    </div>
  )
}

function App() {

  const board = Array(9).fill(null);
  return (
    <main className='container'>
      <h1>tik tak toex </h1>
      <section className='game-area'>
        {
          board.map((_, index) => {
            return (
              <Square index={index} key={index}> x </Square>
              // <div className='cell' key={index}>
              //   <span className='cellContent'>
              //     {index}
              //   </span>
              // </div>
          )})
        }
      </section>
    </main>
  )
}

export default App
