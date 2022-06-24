import phrases from "./phrases.json";
import "./styles.css";
import { useState } from "react";

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
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
          {phrases[index].quote} {phrases[index].quote}{" "}
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
