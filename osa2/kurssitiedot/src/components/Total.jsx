const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (sum, part) => sum + Number(part.exercises),
    0
  );
  return (
    <div>
      <h4>Total of {totalExercises} exercises</h4>
    </div>
  );
};

export default Total;
