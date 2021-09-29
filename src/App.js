import React, { useState } from "react";
import "./styles.css";

import PlayCard from "./components/PlayCard";
import { compareTypes } from "./utils/types";

export default function App() {
  const [state, setState] = useState({
    gameStarted: false,
    round: 0,
    mode: 0,
    leftName: "You",
    rightName: "Player 2",
    leftSelection: "",
    leftScore: 0,
    rightSelection: "",
    rightScore: 0,
    message: "",
  });

  const reset = () => {
    setState({
      ...state,
      round: 0,
      mode: 0,
      leftName: "You",
      rightName: "Player 2",
      leftSelection: "",
      leftScore: 0,
      rightSelection: "",
      rightScore: 0,
      message: "",
    });
  };

  const playGame = (e) => {
    const user = e.target.parentNode.getAttribute("value");
    const pc = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
    let result = compareTypes(user, pc);

    if (result === 0) {
      setState({
        ...state,
        message: (state.message = "It's a tie!"),
      });
    } else if (result === 1) {
      setState({
        ...state,
        leftScore: (state.leftScore += 1),
        message: (state.message = "You won!"),
      });
    } else {
      setState({
        ...state,
        rightScore: (state.rightScore += 1),
        message: (state.message = "You lost!"),
      });
    }

    setState({
      ...state,
      round: (state.round += 1),
      leftSelection: user,
      rightSelection: pc,
    });
  };

  return (
    <div className="App">
      <h1>Rock, paper, scissors!</h1>
      <h1 className="rounds">
        {state.leftSelection === ""
          ? "No rounds yet!"
          : `Round: ${state.round}`}
      </h1>
      <div className="play-box">
        <PlayCard state={state} playGame={playGame} position="left" />
        <div className="message-box">
          {state.leftSelection === "" ? (
            <h1>VS</h1>
          ) : (
            <>
              <h3 className="message">{state.message}</h3>
            </>
          )}
        </div>
        <PlayCard state={state} playGame={playGame} position="right" />
      </div>
      <div className="score-box">
        <h1>{state.leftScore}</h1>
        <div />
        <h1>{state.rightScore}</h1>
      </div>
      {state.leftSelection !== "" && (
        <div onClick={reset} className="reset-btn">
          <h3>
            {state.leftScore === 10 || state.rightScore === 10
              ? "Play again"
              : "Reset"}
          </h3>
        </div>
      )}
    </div>
  );
}
