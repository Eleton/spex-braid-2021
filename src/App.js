import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Node from "./Node";
import { rawData, data, length } from "./data";

function App() {
  const [state, setState] = useState(data);
  const [finished, setFinished] = useState(false);
  const refs = useRef({});

  useEffect(() => {
    if (
      state.filter(d => d.node === "input").every(d => d.value === d.letter)
    ) {
      setFinished(true);
    }
  }, [state]);

  useEffect(() => {
    if (!localStorage.getItem("braidData")) {
      const answers = JSON.stringify(state.map(d => d.value));
      localStorage.setItem("braidData", answers);
    } else {
      const answers = JSON.parse(localStorage.getItem("braidData"));
      const tempState = state.map((d, i) => {
        if (d.node === "input") {
          return { ...d, value: answers[i] };
        } else {
          return d;
        }
      });
      setState(tempState);
    }
  }, []);

  const updateStorage = (value, index) => {
    const answers = JSON.parse(localStorage.getItem("braidData"));
    answers[index] = value;
    localStorage.setItem("braidData", JSON.stringify(answers));
  };

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
    updateStorage(value, index);
    if (value.length === 1) {
      refs.current[index + 1].focus();
    }
  };

  return (
    <div className="App">
      <header className="header">Manusflätan 20/21</header>
      <div className="content">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${length}, 1fr`,
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
              finished={finished}
            />
          ))}
        </div>
        <div className="cluesList text-gold">
          <ol start="0">
            <li>
              <span className="text-white">Temat på nästa års spex</span>
            </li>
            {rawData.map(d => (
              <li key={d.index}>
                <span className="text-white">{d.question}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
