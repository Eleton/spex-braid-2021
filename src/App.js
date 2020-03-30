import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Node from "./Node";
import { rawData, data, length } from "./data";
import { updateStorage, setStorage, getStorage } from "./storage";

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
    const answers = getStorage();
    if (!answers) {
      setStorage(state.map(d => d.value));
    } else {
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

  const onBackspace = index => e => {
    if (
      state[index].value === "" &&
      e.keyCode === 8 &&
      state[index - 1].node === "input"
    ) {
      refs.current[index - 1].focus();
    }
  };

  const selectNextNode = index => {
    let node = refs.current[index + 1];
    if (node) {
      node.focus();
    } else {
      // If the node at refs.current[index] is the last of it's row,
      // the next input row will be at index + 2 due to the number
      // nodes
      node = refs.current[index + 2];
      if (node) {
        node.focus();
      }
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
      selectNextNode(index);
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
