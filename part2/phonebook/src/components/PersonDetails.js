const PersonDetails = (props) => {
  return (
    <div>
      <li>
        {props.name} {props.number}
        <button onClick={props.removePerson}>delete</button>
      </li>
    </div>
  )
}

export default PersonDetails