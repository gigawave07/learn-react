import './App.css';
import React from "react";
import Crud from "./components/CRUD/Crud";
import Game from "./components/tictactoe/Game";

function App() {
  return (
    <div className="App">
      <Crud />
      <Game />
    </div>
  );
}

export default App;
