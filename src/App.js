import logo from './logo.svg';
import './App.css';
import Squares from './squares';
import { useState } from 'react';



export default function App() {

  //Holds logic for whether start button is selected
  const [start,startSelected] = useState(false);

  //Holds logic for whether target button is selected
  const [target,targetSelected] = useState(false);
 
  let matrix = Array(15).fill(null);
  let matrix2 = Array(30).fill(null);
  
  function buttonTest(){
   

  }
 
 
  return (
    <div className="Container">
    <header>
      <button onClick={() => buttonTest()}>Start</button>
      <button onClick={() => targetSelected(!target)}>Target</button>
    </header>
    <center>
    <div className="blocks">
        {matrix.map((row, i) => (
          <div key={i} row={row} col={i} matrix={matrix}>
            {matrix2.map((col, j) => (
              <Squares key={j} row={i} col={j} start={start} />
            ))}
          </div>
        ))}
      </div>
      </center>
      </div>
  );
}

