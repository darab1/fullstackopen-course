import React, { useState } from 'react';

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    good || neutral || bad
      ? <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={good + neutral + bad} />
            <StatisticLine text='average' value={good || neutral || bad ? (good - bad) / (good + neutral + bad) : 0} />
            <StatisticLine text='positive' value={good || neutral || bad ? `${(good / (good + neutral + bad)) * 100} %`  : `0 %`} />
          </tbody>
        </table>
      : <p>No feedback given</p>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
