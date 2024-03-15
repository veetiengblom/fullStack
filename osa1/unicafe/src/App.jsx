import { useState } from "react";

const Button = ({ handleClick, value }) => {
  return (
    <>
      <button onClick={handleClick}>{value}</button>
    </>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all == 0) {
    return (
      <div>
        <p>No feedback was given</p>
      </div>
    );
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setAll(all + 1);
    const sum = good - bad + 1;
    setAverage(sum / (all + 1));
    setPositive((good + 1) / (all + 1) + " %");
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
    const sum = good - bad;
    setAverage(sum / (all + 1));
    setPositive(good / (all + 1) + " %");
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
    const sum = good - bad - 1;
    setAverage(sum / (all + 1));
    setPositive(good / (all + 1) + " %");
  };

  return (
    <div>
      <h1>Give feed back</h1>
      <Button handleClick={handleClickGood} value="Good" />
      <Button handleClick={handleClickNeutral} value="Neutral" />
      <Button handleClick={handleClickBad} value="Bad" />
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
