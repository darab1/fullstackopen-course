const Total = (props) => {
  const initialValue = 0;
  const total = props.parts.reduce((accumulator, curValue) =>
    accumulator + curValue.exercises, initialValue);

  return (
    <p><strong>Total of {total} exercises.</strong></p>
  )
}

export default Total;