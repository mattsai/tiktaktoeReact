import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './Components/Square'
import { TURNS,winningCombinations} from './Constants/constants.js'
import { WinnerModal } from './Components/WinnerModal'

function App() {

  const [board,setBoard] = useState(Array(9).fill(null));
  const [turn,setTurn] = useState(TURNS.X);
  const [winner,setWinner] = useState(-1); // 1 winner ,  0 Tie

  
  const checkWinner= (newBoard) =>{
    for(const  x of winningCombinations){
      const [p1,p2,p3] = x;
      if(newBoard[p1] && newBoard[p1] === newBoard[p2] &&  newBoard[p1] === newBoard[p3]){
        return newBoard[p1]
      }
    }
    return null
  }
  const boardFull = (newBoard) =>{
    return newBoard.every(square => square !== null)
  }
  const updateBoard = (index) =>{
    if(board[index] || winner>0) return
    const newBoard =[...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O :TURNS.X;
    setTurn(newTurn)

    const isWinner= checkWinner(newBoard)
    if(isWinner) {
      // console.log('Winner ',isWinner)
      confetti()
      setWinner(isWinner)
    }else if(boardFull(newBoard)){
      // console.log('0 tie')
      setWinner('-')
    }
  }


  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setWinner(-1);
    setTurn(TURNS.X);
  }

  return (  
    <main className='container'>
      <h1>^•ﻌ•^ tik tak toe </h1>
      <h2> Turn :  {turn}  </h2>
      <section className='game-area'>
        {
          board.map((square, index) => {
            return (
            <Square 
              index={index} 
              key={index} 
              updateBoard={updateBoard} 
            >  
              {square} 
            </Square>
                        
          )})
        }
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
