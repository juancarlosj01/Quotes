import phrases from "./phrases.json";
import "./styles.css";
import { useState } from "react";

const colors = [
  
  "#F2D7D9",
  "#D3CEDF",
  "#9CB4CC",
  "#748DA6",
  "#d8f8e1",
  "#b0c2f2",
  "#ffda9e",
  "#fdf9c4",
  "#b2e2f2",
  "#95b8f6"
];

function App() {
  const random = Math.floor(Math.random() * phrases.length);
  const [index, setIndex] = useState(random);

  const changeQuote = () => {
    const random = Math.floor(Math.random() * phrases.length);
    setIndex(random);
  };

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];
  // @ts-ignore
  document.body.style = `background: ${color}`;

  return (
    <div className="App">
      <div className="card" style={{ color: color }}>
        <h1>
          {phrases[index].quote}
        </h1>
        
        <ul>
          <li>
            <i className=""></i> {phrases[index].author}
          </li>      
        </ul>
        <button onClick={changeQuote}>
          <i className="buttom">next</i>
        </button>
      </div>
    </div>
  );
}

export default App;
