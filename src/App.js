import { Board } from "./components/Board";
import { TicTacToe } from "./components/TicTacToe";
import {Strike} from "./components/Strike";
import {React,Component} from "react";
function App() {
  return (
    <div>
      <TicTacToe/>
    <Board/>
    {/* <Strike/> */}
    </div>
  );
}
export default App;