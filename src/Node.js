import React, { forwardRef } from "react";

const Node = forwardRef(
  ({ data, length, onChange, onBackspace, finished }, ref) => {
    if (data.node === "empty") {
      return (
        <div
          ref={ref}
          style={{
            width: `calc(90vw / ${length}`,
            height: `calc(90vw / ${length}`
          }}
        />
      );
    }

    if (data.node === "number") {
      return (
        <div
          className={finished && "fadeNode"}
          style={{
            verticalAlign: "bottom",
            color: "#fd0"
          }}
        >
          <span
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              transform: "translate(-3px)",
              fontSize: "4vw"
            }}
          >
            {data.number}.
          </span>
        </div>
      );
    }

    return (
      <input
        className={`node ${finished && !data.main && "fadeNode"}`}
        ref={ref}
        type="text"
        style={{
          width: `calc(90vw / ${length}`,
          height: `calc(90vw / ${length}`,
          backgroundColor: data.main ? "#fd0" : "ivory"
        }}
        value={data.value}
        onChange={onChange}
        onKeyDown={onBackspace}
      />
    );
  }
);

export default Node;
