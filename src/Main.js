import React from "react";

export default function Main() {
  const [breakfastCount, setBreakfastCount] = React.useState(0)
  const [lunchCount, setLunchCount] = React.useState(0)
  const [dinnerCount, setDinnerCount] = React.useState(0)
  const [response, setResponse] = React.useState('How am I doing???');
  function checkStatus() {
    const total = breakfastCount + lunchCount + dinnerCount
    if (total <= 0) {
      setResponse(() => "I'm so hungry...") 
    } else if (total > 3) {
      setResponse(() => "I'm gonna explode...") 
    } else if (total == 3) {
      setResponse(() => "3 meals! perfect") 
    } else {
      setResponse(() => "I need to eat more!") 
    }
  }
  return (
    <main>
        <section>
          <h2>Meals Taken</h2>
          <div className="meal-counter">
            <p>Breakfast: <button onClick={() => setBreakfastCount(breakfastCount - 1)}>-</button> {breakfastCount} <button onClick={() => setBreakfastCount(breakfastCount + 1)}>+</button></p>
          </div>
          <div className="meal-counter">
            <p>Lunch: <button onClick={() => setLunchCount(lunchCount - 1)}>-</button> {lunchCount} <button onClick={() => setLunchCount(lunchCount + 1)}>+</button></p>
          </div>
          <div className="meal-counter">
            <p>Dinner: <button onClick={() => setDinnerCount(dinnerCount - 1)}>-</button> {dinnerCount} <button onClick={() => setDinnerCount(dinnerCount + 1)}>+</button></p>
          </div>
        </section>
        <button onClick={checkStatus}>
          Check how I'm doing...
        </button>
        <p>{response}</p>
      </main>
  )
}