
export const Square = ({ children, updateBoard, index }) => {
    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className='square'>
            {children}
        </div>
    )
}
