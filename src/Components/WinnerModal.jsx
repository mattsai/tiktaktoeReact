export function WinnerModal ({winner,resetGame} )  {
    
    const winnerText =  winner !== 0 ?   "Winner " : "Tie"
    return (
        winner !== -1 &&     
          <section className='winner-modal'>
            <div className="text">
              <h2>
                {winnerText}
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