import React, { useState, useRef } from "react";
import "./App.css";
import Node from "./Node";
import { rawData, data, length } from "./data";

function App() {
  const [state, setState] = useState(data);
  const refs = useRef({});

  const onBackspace = index => e => {
    if (
      state[index].value === "" &&
      e.keyCode === 8 &&
      state[index - 1].node === "input"
    ) {
      refs.current[index - 1].focus();
    }
  };

  const onChange = index => e => {
    if (e.target.value.length > 1) {
      return;
    }
    const value = e.target.value.toUpperCase();
    const tempData = [...state];
    tempData[index].value = value;
    setState(tempData);
    if (value.length === 1) {
      refs.current[index + 1].focus();
    }
  };
  return (
    <div className="App">
      <header className="header">Manusflätan 20/21</header>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${length}, 1fr`
        }}
      >
        {state.map(data => (
          <Node
            ref={el => (refs.current[data.key] = el)}
            key={data.key}
            data={data}
            length={length}
            onChange={onChange(data.key)}
            onBackspace={onBackspace(data.key)}
          />
        ))}
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ol style={{ color: "#fd0" }} start="0">
          <li>
            <span style={{ color: "ivory" }}>Temat på nästa års spex</span>
          </li>
          {rawData.map(d => (
            <li key={d.index}>
              <span style={{ color: "ivory" }}>{d.question}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
