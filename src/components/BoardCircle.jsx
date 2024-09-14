export const BoardCircle = () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  return (
    <div>
      {letters.map(() => {
        const currentLetter = 'a';
        for (let i = currentLetter; i === letters.length; i++) {
          currentLetter++;
        }
      })}
    </div>
  );
};
