// Componente cuadrado individual
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index); // Muy importante: pasamos el índice del cuadrado clickeado
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}