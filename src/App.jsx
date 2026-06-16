import { useEffect, useState } from "react";
import "./App.css";

function App() {
  {
    /*create habits drop down table*/
  }
  const [inputTable, setInputTable] = useState(false);

  {
    /*habit input*/
  }
  const [inputHabit, setInputHabit] = useState("");

  {
    /*Overall data and add persistence into local storage*/
  }
  const [summaryHabit, setSummaryHabit] = useState(() => {
    const saved = localStorage.getItem("habits");
    {
      /*debugging note*/
    }
    console.log("check storage: ", saved);
    return saved ? JSON.parse(saved) : [];
  });

  {
    /*write data into local storage*/
  }
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(summaryHabit));
  }, [summaryHabit]);

  return (
    <section>
      <h1>My Habit Tracker</h1>
      <button onClick={() => setInputTable(true)}>Create Habits</button>
      {inputTable && (
        <form className="input-form">
          <div className="input-habit">
            <label>Habit: </label>
            <input
              placeholder="Enter habit..."
              value={inputHabit}
              onChange={(e) => setInputHabit(e.target.value)}
            ></input>
          </div>
          <div className="input-date">
            <label>Date: </label>
            <input type="date"></input>
          </div>
          <div className="input-note">
            <label>Note: </label>
            <div>
              <textarea className="note-text"></textarea>
            </div>
          </div>
          <div className="button-input">
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSummaryHabit([...summaryHabit, { habit: inputHabit }]);
                  {
                    /*Debugging console*/
                  }
                  console.log("DEBUG Input Field:", inputHabit);
                }}
              >
                Save
              </button>
            </div>
            <div>
              <button onClick={() => setInputTable(false)}>Close</button>
            </div>
          </div>
        </form>
      )}
      {/*Display UI section*/}
      <section>
        <h2>Saved Habits</h2>
        <div>
          <ul>
            {summaryHabit.map((item, index) => (
              <li className="habit-card" key={index}>
                <span>Habit: {item.habit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default App;
