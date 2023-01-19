import React, { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleClick(feedback) {
    if (feedback === 'good') {
      setGood(prevFeed => prevFeed + 1);
    } else if (feedback === 'neutral') {
      setNeutral(prevFeed => prevFeed + 1);
    } else {
      setBad(prevFeed => prevFeed + 1);
    }
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button
        text={'good'}
        handleClick={() => handleClick('good')}
      />
      <Button
        text={'neutral'}
        handleClick={() => handleClick('neutral')}
      />
      <Button
        text={'bad'}
        handleClick={() => handleClick('bad')}
      />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {good || neutral || bad ? (good - bad) / (good + neutral + bad) : 0}</p>
      <p>positive {good || neutral || bad ? `${(good / (good + neutral + bad)) * 100} %`  : `0 %`} </p>
    </div>
  )
}

export default App;
