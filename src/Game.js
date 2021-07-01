import React from "react";
import Square from "./Square";
import Board from "./Board";
import "./Game.css";

function Game() {
  return (
    <div className="container">
      <div className="squares">
        <div className="square-row">
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
        </div>
        <div className="square-row">
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>
        <div className="square-row">
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </div>
      <Board />
    </div>
  );
}

export default Game;
