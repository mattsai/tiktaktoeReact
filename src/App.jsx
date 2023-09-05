import { useState } from 'react'
import './App.css'


//later will be cat and dog 
const TURNS = {
  X: 'X',
  O: 'O'
}


const Square = ({children,updateBoard,index})=>{
  const handleClick = () =>{
    updateBoard(index)
  }
  return(
    <div onClick={handleClick} className='square'>
        {children}
    </div>
  )
}

function App() {

  const [board,setBoard] = useState(Array(9).fill(null));
  const [turn,setTurn] = useState(TURNS.X);
  const [winner,setWinner] = useState(-1); // 1 winner ,  0 Tie

  const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner= (newBoard) =>{
    for(const  x of winningCombinations){
      const [p1,p2,p3] = x;
      if(newBoard[p1] && newBoard[p1] === newBoard[p2] &&  newBoard[p1] === newBoard[p3]){
        return newBoard[p1]
      }
    }
    return null
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
      console.log('Winner ',isWinner)
      setWinner(isWinner)
    }
  }


  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setWinner(-1);
    setTurn(TURNS.X);

  }
  return (
    
    <main className='container'>
      <h1>tik tak toex </h1>
      <h2> Turn :  {turn}  </h2>
      <section className='game-area'>
        {
          board.map((_, index) => {
            return (
            <Square 
              index={index} 
              key={index} 
              updateBoard={updateBoard} 
            >  
              {board[index]} 
            </Square>
                        
          )})
        }
      </section>

      {
        winner !== -1 && (
          <section className='winner-modal'>
            <div className="text">
              <h2>
                {
                  winner === 0 ? "Tie" : "Winner "
                }
              </h2>
            </div>
            <header className='win'>
              {winner && winner}
            </header>
              
            <footer> 
              <button onClick={resetGame}>Reset Game</button>
            </footer>
          
          </section>
          
        )
      }
    </main>
  )
}

export default App
