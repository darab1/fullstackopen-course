const Notification = (props) => {
  let styles = {}
  if (props.message.type === null) {
    return null
  } else if (props.message.type === 'success') {
    styles = {
      color: 'green',
      background: 'lightgrey',
      fontSize: '20px',
      borderStyle: 'solid',
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '10px'
    }
  }

  return (
    <div className={props.message.type} style={styles}>
      {props.message.text}
    </div>
  )
}

export default Notification