const Total = (props) => {
  let total = 0;
  props.parts.map(part => total += part.exercises);

  return (
    <p><strong>Total of {total} exercises.</strong></p>
  )
}

export default Total;